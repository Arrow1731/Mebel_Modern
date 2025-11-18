'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot, updateDoc, doc, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Order } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Download, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CreditPaymentsPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
      const ords = snapshot.docs
        .map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate?.() || new Date(data.createdAt),
            dueDate: data.dueDate?.toDate?.() || new Date(data.dueDate),
            payments: data.payments?.map((p: any) => ({ ...p, date: p.date?.toDate?.() || new Date(p.date) })) || []
          } as Order;
        });
      setOrders(ords);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const fullyPaid = orders.filter(o => o.paymentStatus === 'fully-paid');
  const partiallyPaid = orders.filter(o => o.paymentStatus === 'partial' || (o.paymentStatus === 'pending' && o.creditMonths > 1));

  const getDaysUntilDue = (date: Date) => {
    const now = new Date();
    const diff = new Date(date).getTime() - now.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  const needsAlert = partiallyPaid.some(o => getDaysUntilDue(o.dueDate) <= 3);

  const handlePaymentStatus = async (orderId: string, isPaid: boolean) => {
    setProcessingId(orderId);
    try {
      const order = orders.find(o => o.id === orderId);
      if (!order) return;

      if (isPaid) {
        // Mark as fully paid
        await updateDoc(doc(db, 'orders', orderId), {
          paymentStatus: 'fully-paid',
          paidAmount: order.totalAmount,
          payments: [
            ...(order.payments || []),
            { amount: order.totalAmount - order.paidAmount, date: new Date(), month: order.creditMonths }
          ]
        });

        await addDoc(collection(db, 'analytics_log'), {
          type: 'payment_completed',
          orderId,
          clientName: order.clientName,
          amount: order.totalAmount - order.paidAmount,
          date: new Date(),
          timestamp: new Date()
        });
      } else {
        // Mark as not paid (keep pending)
        await addDoc(collection(db, 'analytics_log'), {
          type: 'payment_skipped',
          orderId,
          clientName: order.clientName,
          amount: order.totalAmount - order.paidAmount,
          date: new Date(),
          timestamp: new Date()
        });
      }
    } catch (error) {
      console.error('Error updating payment status:', error);
    } finally {
      setProcessingId(null);
    }
  };

  const downloadPDF = (data: Order[], title: string) => {
    let csv = `${title}\n\n`;
    csv += 'Клиент,Телефон,Email,Адрес,Сумма,Статус,Дата платежа\n';
    data.forEach(order => {
      csv += `${order.clientName},${order.clientPhone},${order.clientEmail},${order.clientAddress || 'N/A'},${order.totalAmount},${order.paymentStatus},${new Date(order.dueDate).toLocaleDateString()}\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.csv`;
    a.click();
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-amber-900">Отслеживание кредитных платежей</h1>
          {needsAlert && (
            <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg">
              <AlertCircle size={20} />
              <span className="font-medium">Есть платежи до истечения срока!</span>
            </div>
          )}
        </div>

        {loading ? (
          <div>Загрузка...</div>
        ) : (
          <div className="space-y-8">
            {/* Fully Paid */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-amber-900">Полностью оплаченные</h2>
                <Button
                  onClick={() => downloadPDF(fullyPaid, 'Fully-Paid-Orders')}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  <Download className="mr-2" size={16} /> Скачать CSV
                </Button>
              </div>
              {fullyPaid.length === 0 ? (
                <p className="text-gray-500">Нет полностью оплаченных заказов</p>
              ) : (
                <div className="bg-white rounded-lg shadow overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100 border-b">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Клиент</th>
                        <th className="px-4 py-3 text-left font-semibold">Телефон</th>
                        <th className="px-4 py-3 text-left font-semibold">Адрес</th>
                        <th className="px-4 py-3 text-left font-semibold">Продукт</th>
                        <th className="px-4 py-3 text-left font-semibold">Сумма</th>
                        <th className="px-4 py-3 text-left font-semibold">Дата платежа</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fullyPaid.map(order => (
                        <tr key={order.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3">{order.clientName}</td>
                          <td className="px-4 py-3">{order.clientPhone}</td>
                          <td className="px-4 py-3">{order.clientAddress || 'N/A'}</td>
                          <td className="px-4 py-3 text-sm">
                            {order.products?.map(p => `${p.productName} (${p.quantity} шт)`).join(', ') || 'N/A'}
                          </td>
                          <td className="px-4 py-3 font-semibold text-amber-700">{order.totalAmount.toLocaleString()} сум</td>
                          <td className="px-4 py-3">{new Date(order.dueDate).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Partially Paid */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-amber-900">Частично оплаченные</h2>
                <Button
                  onClick={() => downloadPDF(partiallyPaid, 'Partially-Paid-Orders')}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  <Download className="mr-2" size={16} /> Скачать CSV
                </Button>
              </div>
              {partiallyPaid.length === 0 ? (
                <p className="text-gray-500">Нет частично оплаченных заказов</p>
              ) : (
                <div className="bg-white rounded-lg shadow overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100 border-b">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Клиент</th>
                        <th className="px-4 py-3 text-left font-semibold">Телефон</th>
                        <th className="px-4 py-3 text-left font-semibold">Адрес</th>
                        <th className="px-4 py-3 text-left font-semibold">Продукт</th>
                        <th className="px-4 py-3 text-left font-semibold">Сумма</th>
                        <th className="px-4 py-3 text-left font-semibold">Оплачено</th>
                        <th className="px-4 py-3 text-left font-semibold">Действие</th>
                        <th className="px-4 py-3 text-left font-semibold">Статус</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partiallyPaid.map(order => {
                        const daysUntilDue = getDaysUntilDue(order.dueDate);
                        const isUrgent = daysUntilDue <= 3 && daysUntilDue > 0;
                        return (
                          <tr key={order.id} className={`border-b hover:bg-gray-50 ${isUrgent ? 'bg-red-50' : ''}`}>
                            <td className="px-4 py-3">{order.clientName}</td>
                            <td className="px-4 py-3">{order.clientPhone}</td>
                            <td className="px-4 py-3">{order.clientAddress || 'N/A'}</td>
                            <td className="px-4 py-3 text-sm">
                              {order.products?.map(p => `${p.productName} (${p.quantity} шт)`).join(', ') || 'N/A'}
                            </td>
                            <td className="px-4 py-3 font-semibold text-amber-700">{order.totalAmount.toLocaleString()} сум</td>
                            <td className="px-4 py-3">{order.paidAmount.toLocaleString()} сум</td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => handlePaymentStatus(order.id, true)}
                                  disabled={processingId === order.id}
                                  className="bg-green-600 hover:bg-green-700 text-white"
                                >
                                  <Check size={16} /> Оплачено
                                </Button>
                                <Button
                                  size="sm"
                                  onClick={() => handlePaymentStatus(order.id, false)}
                                  disabled={processingId === order.id}
                                  className="bg-gray-400 hover:bg-gray-500 text-white"
                                >
                                  <X size={16} /> Нет
                                </Button>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              {isUrgent ? (
                                <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-medium">
                                  ⚠️ {daysUntilDue} дней
                                </span>
                              ) : (
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                                  Ожидает
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
