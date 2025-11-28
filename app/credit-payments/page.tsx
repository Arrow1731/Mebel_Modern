// 'use client';

// import { useState, useEffect } from 'react';
// import { collection, onSnapshot, updateDoc, doc, addDoc } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
// import { Order } from '@/lib/types';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { AlertCircle, Download, Check, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export default function CreditPaymentsPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [processingId, setProcessingId] = useState<string | null>(null);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
//       const ords = snapshot.docs
//         .map(doc => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             ...data,
//             createdAt: data.createdAt?.toDate?.() || new Date(data.createdAt),
//             dueDate: data.dueDate?.toDate?.() || new Date(data.dueDate),
//             payments: data.payments?.map((p: any) => ({ ...p, date: p.date?.toDate?.() || new Date(p.date) })) || []
//           } as Order;
//         });
//       setOrders(ords);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const fullyPaid = orders.filter(o => o.paymentStatus === 'fully-paid');
//   const partiallyPaid = orders.filter(o => o.paymentStatus === 'partial' || (o.paymentStatus === 'pending' && o.creditMonths > 1));

//   const getDaysUntilDue = (date: Date) => {
//     const now = new Date();
//     const diff = new Date(date).getTime() - now.getTime();
//     return Math.ceil(diff / (1000 * 3600 * 24));
//   };

//   const needsAlert = partiallyPaid.some(o => getDaysUntilDue(o.dueDate) <= 3);

//   const handlePaymentStatus = async (orderId: string, isPaid: boolean) => {
//     setProcessingId(orderId);
//     try {
//       const order = orders.find(o => o.id === orderId);
//       if (!order) return;

//       if (isPaid) {
//         // Mark as fully paid
//         await updateDoc(doc(db, 'orders', orderId), {
//           paymentStatus: 'fully-paid',
//           paidAmount: order.totalAmount,
//           payments: [
//             ...(order.payments || []),
//             { amount: order.totalAmount - order.paidAmount, date: new Date(), month: order.creditMonths }
//           ]
//         });

//         await addDoc(collection(db, 'analytics_log'), {
//           type: 'payment_completed',
//           orderId,
//           clientName: order.clientName,
//           amount: order.totalAmount - order.paidAmount,
//           date: new Date(),
//           timestamp: new Date()
//         });
//       } else {
//         // Mark as not paid (keep pending)
//         await addDoc(collection(db, 'analytics_log'), {
//           type: 'payment_skipped',
//           orderId,
//           clientName: order.clientName,
//           amount: order.totalAmount - order.paidAmount,
//           date: new Date(),
//           timestamp: new Date()
//         });
//       }
//     } catch (error) {
//       console.error('Error updating payment status:', error);
//     } finally {
//       setProcessingId(null);
//     }
//   };

//   const downloadPDF = (data: Order[], title: string) => {
//     let csv = `${title}\n\n`;
//     csv += "Mijon Ismni", "Telefon", "Yashash Manzili", "Narxi", "Holati", "To'lov Sanasi \n";
//     data.forEach(order => {
//       csv += `${order.clientName},${order.clientPhone},${order.clientEmail},${order.clientAddress || 'N/A'},${order.totalAmount},${order.paymentStatus},${new Date(order.dueDate).toLocaleDateString()}\n`;
//     });

//     const blob = new Blob([csv], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${title}.csv`;
//     a.click();
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-amber-900">Kredit To'lovlarini Nazorat Qilish Bo'limi</h1>
//           {needsAlert && (
//             <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg">
//               <AlertCircle size={20} />
//               <span className="font-medium">Belgilangan Muddatdan Oldin To'lovlar Mavjud!</span>
//             </div>
//           )}
//         </div>

//         {loading ? (
//           <div>Yuklanmoqda...</div>
//         ) : (
//           <div className="space-y-8">
//             {/* Fully Paid */}
//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-bold text-amber-900">To'liq Holda To'lov Qilgan Mijorlar</h2>
//                 <Button
//                   onClick={() => downloadPDF(fullyPaid, 'Fully-Paid-Orders')}
//                   className="bg-amber-600 hover:bg-amber-700"
//                 >
//                   <Download className="mr-2" size={16} />CSV Yuklab Olish
//                 </Button>
//               </div>
//               {fullyPaid.length === 0 ? (
//                 <p className="text-gray-500">To'liq To'langan Buyurtmalar Yo'q</p>
//               ) : (
//                 <div className="bg-white rounded-lg shadow overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-gray-100 border-b">
//                       <tr>
//                         <th className="px-4 py-3 text-left font-semibold">Mijoz Ismi</th>
//                         <th className="px-4 py-3 text-left font-semibold">Telefon Raqami</th>
//                         <th className="px-4 py-3 text-left font-semibold">Yashash Manzili</th>
//                         <th className="px-4 py-3 text-left font-semibold">Mahsulot Nomi</th>
//                         <th className="px-4 py-3 text-left font-semibold">Narxi</th>
//                         <th className="px-4 py-3 text-left font-semibold">To'lov Qilingan Sana</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {fullyPaid.map(order => (
//                         <tr key={order.id} className="border-b hover:bg-gray-50">
//                           <td className="px-4 py-3">{order.clientName}</td>
//                           <td className="px-4 py-3">{order.clientPhone}</td>
//                           <td className="px-4 py-3">{order.clientAddress || 'Korsatilmagan'}</td>
//                           <td className="px-4 py-3 text-sm">
//                             {order.products?.map(p => `${p.productName} (${p.quantity} Dona)`).join(', ') || 'Korsatilmagan'}
//                           </td>
//                           <td className="px-4 py-3 font-semibold text-amber-700">{order.totalAmount.toLocaleString()} So'm</td>
//                           <td className="px-4 py-3">{new Date(order.dueDate).toLocaleDateString()} Yil</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>

//             {/* Partially Paid */}
//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-bold text-amber-900">Bo'lib To'lashga Harid Qilgan Mijozlar</h2>
//                 <Button
//                   onClick={() => downloadPDF(partiallyPaid, 'Partially-Paid-Orders')}
//                   className="bg-amber-600 hover:bg-amber-700"
//                 >
//                   <Download className="mr-2" size={16} />CSV Yuklab Olish
//                 </Button>
//               </div>
//               {partiallyPaid.length === 0 ? (
//                 <p className="text-gray-500">Bo'lib To'lashga Harid Qilgan Mahsulotlar Yo'q</p>
//               ) : (
//                 <div className="bg-white rounded-lg shadow overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-gray-100 border-b">
//                       <tr>
//                         <th className="px-8 py-3 text-left font-semibold">Mijoz Ismi</th>
//                         <th className="px-8 py-3 text-left font-semibold">Telefon Raqami</th>
//                         <th className="px-8 py-3 text-left font-semibold">Yashash Manzili</th>
//                         <th className="px-8 py-3 text-left font-semibold">Mahsulot Nomi</th>
//                         <th className="px-8 py-3 text-left font-semibold">Narxi</th>
//                         <th className="px-8 py-3 text-left font-semibold">To'langan Summa</th>
//                         <th className="px-8 py-3 text-left font-semibold">To'lav Holati</th>
//                         <th className="px-8 py-3 text-left font-semibold">Holati</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {partiallyPaid.map(order => {
//                         const daysUntilDue = getDaysUntilDue(order.dueDate);
//                         const isUrgent = daysUntilDue <= 3 && daysUntilDue > 0;
//                         return (
//                           <tr key={order.id} className={`border-b hover:bg-gray-50 ${isUrgent ? 'bg-red-50' : ''}`}>
//                             <td className="px-8 py-3">{order.clientName}</td>
//                             <td className="px-8 py-3">{order.clientPhone}</td>
//                             <td className="px-8 py-3">{order.clientAddress || 'Kiritilmagan'}</td>
//                             <td className="px-8 py-3 text-sm">
//                               {order.products?.map(p => `${p.productName} ${p.quantity} Dona`).join(', ') || 'Kiritilmagan'}
//                             </td>
//                             <td className="px-4 py-3 font-semibold text-amber-700">{order.totalAmount.toLocaleString()} So'm</td>
//                             <td className="px-4 py-3">{order.paidAmount.toLocaleString()} So'm</td>
//                             <td className="px-4 py-3">
//                               <div className="flex gap-2">
//                                 <Button
//                                   size="sm"
//                                   onClick={() => handlePaymentStatus(order.id, true)}
//                                   disabled={processingId === order.id}
//                                   className="bg-green-600 hover:bg-green-700 text-white"
//                                 >
//                                   <Check size={16} /> To'lov Qilingan
//                                 </Button>
//                                 <Button
//                                   size="sm"
//                                   onClick={() => handlePaymentStatus(order.id, false)}
//                                   disabled={processingId === order.id}
//                                   className="bg-gray-400 hover:bg-gray-500 text-white"
//                                 >
//                                   <X size={16} /> To'lov Qilinmagan
//                                 </Button>
//                               </div>
//                             </td>
//                             <td className="px-4 py-3">
//                               {isUrgent ? (
//                                 <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-medium">
//                                   ⚠️ {daysUntilDue} Kunlar
//                                 </span>
//                               ) : (
//                                 <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
//                                   Kutyabdi
//                                 </span>
//                               )}
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }




















'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot, updateDoc, doc, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Order } from '@/lib/types';
import { AlertCircle, Download, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * CreditPaymentsPage
 * - Fixed 5 months: Nov, Dec, Jan, Feb, Mar
 * - Buttons: Pay for Nov / Pay for Dec / ...
 * - Success modal after Firestore update completes
 * - Disabled pill shows when month already paid
 */
export default function CreditPaymentsPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  // Fixed months (Option A)
  const FIXED_MONTHS = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

  // Load orders live from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
      const ords = snapshot.docs.map((d) => {
        const data = d.data();
        return {
          id: d.id,
          ...data,
          createdAt: data.createdAt?.toDate?.() || new Date(data.createdAt),
          dueDate: data.dueDate?.toDate?.() || new Date(data.dueDate),
          payments:
            data.payments?.map((p: any) => ({
              ...p,
              date: p.date?.toDate?.() || new Date(p.date),
            })) || [],
        } as Order;
      });

      setOrders(ords);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const fullyPaid = orders.filter((o) => o.paymentStatus === 'fully-paid');
  const partiallyPaid = orders.filter(
    (o) =>
      o.paymentStatus === 'partial' ||
      (o.paymentStatus === 'pending' && o.creditMonths > 1)
  );

  const getDaysUntilDue = (date: Date) => {
    const now = new Date();
    const diff = new Date(date).getTime() - now.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  const needsAlert = partiallyPaid.some(
    (o) => getDaysUntilDue(o.dueDate) <= 3
  );

  // Compute monthly payment for order (fallback logic)
  const computeMonthly = (order: Order) => {
    if (order.monthlyPayment && Number(order.monthlyPayment) > 0)
      return Number(order.monthlyPayment);

    const months = order.creditMonths || 1;
    const total = Number(order.totalAmount || 0);

    if (months <= 1) return total;

    const remaining =
      order.remainingAmount != null
        ? Number(order.remainingAmount)
        : total - (order.paidAmount || 0);

    const fee = months > 1 ? remaining * 0.05 : 0;

    // round to whole so'm
    return Math.round((remaining + fee) / months);
  };

  // Pay for a specific month (by index). Shows success modal after save.
  const handlePayForMonth = async (orderId: string, monthIndex: number) => {
    setProcessingId(orderId);
    try {
      const order = orders.find((o) => o.id === orderId);
      if (!order) return;

      // Prevent double-pay if already present
      const alreadyPaid = (order.payments || []).some(
        (p: any) => p.monthIndex === monthIndex
      );
      if (alreadyPaid) {
        setModalText(`This month (${FIXED_MONTHS[monthIndex]}) is already paid.`);
        setModalOpen(true);
        return;
      }

      const monthlyAmount = computeMonthly(order);
      const paymentRecord = {
        amount: monthlyAmount,
        date: new Date(),
        monthIndex,
        monthLabel: FIXED_MONTHS[monthIndex] || `Month-${monthIndex + 1}`,
      };

      const newPaidAmount = (order.paidAmount || 0) + monthlyAmount;
      const isFullyPaid = newPaidAmount >= Number(order.totalAmount || 0);

      // Update Firestore
      await updateDoc(doc(db, 'orders', orderId), {
        payments: [...(order.payments || []), paymentRecord],
        paidAmount: newPaidAmount,
        paymentStatus: isFullyPaid ? 'fully-paid' : 'pending',
      });

      // analytics log
      await addDoc(collection(db, 'analytics_log'), {
        type: 'monthly_payment',
        orderId,
        clientName: order.clientName,
        amount: monthlyAmount,
        monthIndex: paymentRecord.monthIndex,
        monthLabel: paymentRecord.monthLabel,
        date: new Date(),
      });

      // Show success modal AFTER update succeeded (Option A)
      setModalText(`Partial Payment for month ${paymentRecord.monthLabel} is successfully paid`);
      setModalOpen(true);
    } catch (err) {
      console.error('Payment error:', err);
      setModalText('An error occurred while processing payment.');
      setModalOpen(true);
    } finally {
      setProcessingId(null);
    }
  };

  // CSV helper and export
  const csvEscape = (v: any) => {
    if (v == null) return '';
    const s = String(v);
    if (s.includes(',') || s.includes('"')) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };

  const downloadCSV = (data: Order[], title: string) => {
    let csv = '\ufeff';
    const headers = [
      'Client Name',
      'Phone',
      'Phone 2',
      'Email',
      'Address',
      'Products',
      'Agreed Amount',
      'Initial Payment',
      'Remaining',
      'Credit Months',
      'Monthly Payment',
      'Total',
      'Paid',
      'Status',
      'Created At',
      'Due Date',
      ...FIXED_MONTHS.map((m) => `${m} (Scheduled)`),
      ...FIXED_MONTHS.map((m) => `${m} (Paid)`),
    ];
    csv += headers.join(',') + '\n';

    data.forEach((order) => {
      const productNames =
        order.products?.map((p: any) => `${p.productName} x${p.quantity}`).join('; ') || '';

      const monthly = computeMonthly(order);

      const paidPerMonth = Array(FIXED_MONTHS.length).fill(0);
      order.payments?.forEach((p: any) => {
        if (typeof p.monthIndex === 'number' && p.monthIndex >= 0 && p.monthIndex < FIXED_MONTHS.length) {
          paidPerMonth[p.monthIndex] += Number(p.amount || 0);
        } else {
          const firstEmpty = paidPerMonth.findIndex((v) => v === 0);
          if (firstEmpty >= 0) paidPerMonth[firstEmpty] += Number(p.amount || 0);
        }
      });

      const scheduledPerMonth = FIXED_MONTHS.map((_, i) => ((order.creditMonths || 0) > i ? monthly : ''));

      const row = [
        csvEscape(order.clientName),
        csvEscape(order.clientPhone),
        csvEscape(order.clientPhone2 || ''),
        csvEscape(order.clientEmail || ''),
        csvEscape(order.clientAddress || ''),
        csvEscape(productNames),
        order.agreedAmount,
        order.initialPayment,
        order.remainingAmount,
        order.creditMonths,
        monthly,
        order.totalAmount,
        order.paidAmount,
        order.paymentStatus,
        order.createdAt?.toLocaleDateString() || '',
        order.dueDate?.toLocaleDateString() || '',
        ...scheduledPerMonth,
        ...paidPerMonth.map((n) => (n === 0 ? '' : n)),
      ];
      csv += row.join(',') + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.csv`;
    a.click();
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Kredit To'lovlari</h1>

      {needsAlert && (
        <div className="flex items-center gap-2 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-8">
          <AlertCircle size={20} />
          <span className="font-semibold">⚠️ Ba'zi mijozlarda muddat yakunlanmoqda!</span>
        </div>
      )}

      {/* Success Modal (appears AFTER successful payment save) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-fadeIn">
            <h3 className="text-xl font-semibold mb-2">Payment Status</h3>
            <p className="text-gray-700 mb-6">{modalText}</p>
            <div className="flex justify-end">
              <Button
                onClick={() => setModalOpen(false)}
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <p>Loading…</p>
      ) : (
        <>
          {/* Fully Paid */}
          <section className="mb-14">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-green-700">To'liq To'langanlar</h2>
              <Button onClick={() => downloadCSV(fullyPaid, 'Fully-Paid')} className="bg-green-700 text-white">
                <Download size={16} className="mr-2" />CSV Yuklab Olish
              </Button>
            </div>

            {fullyPaid.length === 0 ? (
              <p className="text-gray-500">Hozircha to'liq to'lov qilgan mijozlar yo‘q.</p>
            ) : (
              <div className="overflow-auto bg-white shadow rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="px-4 py-3 text-left">Mijoz</th>
                      <th className="px-4 py-3 text-left">Telefon</th>
                      <th className="px-4 py-3 text-left">Mahsulotlar</th>
                      <th className="px-4 py-3 text-left">Summa</th>
                      <th className="px-4 py-3 text-left">Muddat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fullyPaid.map((o) => (
                      <tr key={o.id} className="border-b">
                        <td className="px-4 py-3">{o.clientName}</td>
                        <td className="px-4 py-3">{o.clientPhone}</td>
                        <td className="px-4 py-3">
                          {o.products?.map((p: any) => `${p.productName} (${p.quantity} dona)`).join(', ')}
                        </td>
                        <td className="px-4 py-3 font-semibold text-green-700">{Number(o.totalAmount).toLocaleString()} so‘m</td>
                        <td className="px-4 py-3">{o.dueDate?.toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {/* Partial Payment Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-amber-900">Bo‘lib To‘lash Mijozlar</h2>

              <Button onClick={() => downloadCSV(partiallyPaid, 'Partially-Paid')} className="bg-amber-700 text-white">
                <Download size={16} className="mr-2" />CSV Yuklab Olish
              </Button>
            </div>

            {partiallyPaid.length === 0 ? (
              <p className="text-gray-500">Bo‘lib to‘lashda bo‘lgan mijozlar yo‘q.</p>
            ) : (
              <div className="overflow-auto bg-white shadow rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-5 py-3 text-left">Mijoz</th>
                      <th className="px-5 py-3 text-left">Telefon</th>
                      <th className="px-5 py-3 text-left">Mahsulotlar</th>
                      <th className="px-5 py-3 text-left">Jami</th>
                      <th className="px-5 py-3 text-left">To‘langan</th>
                      <th className="px-5 py-3 text-left">To‘lov Qo‘shish</th>
                      <th className="px-5 py-3 text-left">Holati</th>
                    </tr>
                  </thead>

                  <tbody>
                    {partiallyPaid.map((o) => {
                      const days = getDaysUntilDue(o.dueDate);
                      const urgent = days <= 3 && days > 0;
                      const monthly = computeMonthly(o);

                      // paid month indices (if present)
                      const paidIndices = (o.payments || [])
                        .map((p: any) => (typeof p.monthIndex === 'number' ? p.monthIndex : -1))
                        .filter((n: number) => n >= 0);

                      return (
                        <tr key={o.id} className={`border-b ${urgent ? 'bg-red-50' : ''}`}>
                          <td className="px-5 py-3">{o.clientName}</td>
                          <td className="px-5 py-3">{o.clientPhone}</td>
                          <td className="px-5 py-3">{o.products?.map((p: any) => `${p.productName} (${p.quantity})`).join(', ')}</td>

                          <td className="px-5 py-3 text-amber-700 font-semibold">
                            {Number(o.totalAmount).toLocaleString()} so‘m
                          </td>

                          <td className="px-5 py-3">{Number(o.paidAmount || 0).toLocaleString()} so‘m</td>

                          <td className="px-5 py-3">
                            <div className="flex flex-wrap gap-2">
                              {Array.from({ length: o.creditMonths || 0 }).map((_, i) => {
                                const label = FIXED_MONTHS[i] || `M${i + 1}`;
                                const already = paidIndices.includes(i);
                                return (
                                  <div key={i}>
                                    {already ? (
                                      <button className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-xs" disabled>
                                        {label} — Paid ✓
                                      </button>
                                    ) : (
                                      <Button
                                        size="sm"
                                        onClick={() => handlePayForMonth(o.id, i)}
                                        disabled={processingId === o.id}
                                        className="bg-green-600 hover:bg-green-700 text-white text-xs"
                                      >
                                        Pay for {label}
                                      </Button>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </td>

                          <td className="px-5 py-3 text-sm">
                            {urgent ? (
                              <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full">{days} kun qoldi</span>
                            ) : (
                              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Kutyapti</span>
                            )}

                            <div className="mt-2 text-xs text-gray-600">
                              {FIXED_MONTHS.slice(0, o.creditMonths).map((m, i) => {
                                const paid = o.payments?.filter((p: any) => p.monthIndex === i)?.reduce((s: number, p: any) => s + Number(p.amount || 0), 0);
                                return (
                                  <div key={i}>
                                    {m}: {monthly.toLocaleString()} so‘m{paid ? ` — Paid: ${paid.toLocaleString()} so‘m` : ''}
                                  </div>
                                );
                              })}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}