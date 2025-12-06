'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Order } from '@/lib/types';
import { AlertCircle } from 'lucide-react';
import LoginModal from '@/components/login-user';
import { Button } from '@/components/ui/button';

export default function CreditPaymentsPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login status
  useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(logged);
  }, []);

  // Firestore listener
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
      const ords = snapshot.docs.map((d) => {
        const data = d.data();
        return {
          id: d.id,
          ...data,
          createdAt: data.createdAt?.toDate?.() || new Date(),
          dueDate: data.dueDate?.toDate?.() || new Date(),
          payments:
            data.payments?.map((p: any) => ({
              ...p,
              date: p.date?.toDate?.() || new Date(),
            })) || [],
        } as Order;
      });

      setOrders(ords);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Calculations
  const fullyPaid = orders.filter((o) => o.paymentStatus === 'fully-paid');

  const partiallyPaid = orders.filter(
    (o) =>
      o.paymentStatus === 'partial' ||
      (o.paymentStatus === 'pending' && o.creditMonths > 1)
  );

  const getDaysUntilDue = (date: Date) => {
    const now = new Date();
    return Math.ceil((new Date(date).getTime() - now.getTime()) / 86400000);
  };

  const needsAlert = partiallyPaid.some(
    (o) => getDaysUntilDue(o.dueDate) <= 3
  );

  const FIXED_MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const computeMonthly = (order: Order) => {
    if (order.monthlyPayment) return Number(order.monthlyPayment);

    const months = order.creditMonths || 1;
    const total = Number(order.totalAmount || 0);

    if (months <= 1) return total;

    const remaining =
      order.remainingAmount != null
        ? Number(order.remainingAmount)
        : total - (order.paidAmount || 0);

    const fee = months > 1 ? remaining * 0.05 : 0;

    return Math.round((remaining + fee) / months);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-[150px]">

      {/* ---------- LOGIN OVERLAY (NO HOOKS INSIDE RETURN) ---------- */}
      {!isLoggedIn && (
        <div className="fixed inset-0 bg-white z-50">
          <LoginModal onLoginSuccess={() => setIsLoggedIn(true)} />
        </div>
      )}

      {/* ---------- PAGE CONTENT (hidden until logged in) ---------- */}

      {isLoggedIn && (
        <>
          {/* Logout */}
          <div className="flex justify-between items-center mb-8">
            {/* <h1 className="text-3xl font-bold text-amber-900">Kredit To'lovlari</h1> */}
            <h2 className="text-2xl font-bold text-green-700 mb-4">To‘liq To‘langanlar</h2>


            <Button
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => {
                localStorage.removeItem('isLoggedIn');
                setIsLoggedIn(false);
              }}
            >
              Chiqish
            </Button>
          </div>

          {/* Alert */}
          {needsAlert && (
            <div className="flex items-center gap-2 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-8">
              <AlertCircle size={20} />
              <span className="font-semibold">⚠️ Ba'zi mijozlarda muddat yakunlanmoqda!</span>
            </div>
          )}

          {loading ? (
            <p>Yuklanmoqda…</p>
          ) : (
            <>
              {/* FULLY PAID */}
              <section className="mb-14">
                {fullyPaid.length === 0 ? (
                  <p className="text-gray-500">Hozircha to‘liq to‘lov qilganlar yoʻq.</p>
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
                              {o.products?.map((p: any) => `${p.productName} (${p.quantity})`).join(', ')}
                            </td>
                            <td className="px-4 py-3 text-green-700 font-semibold">
                              {Number(o.totalAmount).toLocaleString()} so‘m
                            </td>
                            <td className="px-4 py-3">{o.dueDate?.toLocaleDateString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>

              {/* PARTIALLY PAID */}
              <section>
                <h2 className="text-2xl font-bold text-amber-900 mb-4">Bo‘lib To‘lash Mijozlar</h2>

                {partiallyPaid.length === 0 ? (
                  <p className="text-gray-500">Bo‘lib to‘lashdagi mijozlar yo‘q.</p>
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
                          <th className="px-5 py-3 text-left">Holati</th>
                        </tr>
                      </thead>

                      <tbody>
                        {partiallyPaid.map((o) => {
                          const days = getDaysUntilDue(o.dueDate);
                          const urgent = days <= 3 && days > 0;
                          const monthly = computeMonthly(o);

                          return (
                            <tr key={o.id} className={`border-b ${urgent ? 'bg-red-50' : ''}`}>
                              <td className="px-5 py-3">{o.clientName}</td>
                              <td className="px-5 py-3">{o.clientPhone}</td>
                              <td className="px-5 py-3">
                                {o.products?.map((p: any) => `${p.productName} (${p.quantity})`).join(', ')}
                              </td>
                              <td className="px-5 py-3 text-amber-700 font-semibold">
                                {Number(o.totalAmount).toLocaleString()} so‘m
                              </td>
                              <td className="px-5 py-3">
                                {Number(o.paidAmount || 0).toLocaleString()} so‘m
                              </td>
                              <td className="px-5 py-3 text-sm">
                                {urgent ? (
                                  <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full">
                                    {days} kun qoldi
                                  </span>
                                ) : (
                                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                                    Kutyapti
                                  </span>
                                )}

                                <div className="mt-2 text-xs text-gray-600">
                                  {FIXED_MONTHS.slice(0, o.creditMonths).map((m, i) => {
                                    const paid = o.payments?.filter((p: any) => p.monthIndex === i)
                                      ?.reduce((s: number, p: any) => s + Number(p.amount || 0), 0);

                                    return (
                                      <div key={i}>
                                        {m}: {monthly.toLocaleString()} so‘m
                                        {paid ? ` — Paid: ${paid.toLocaleString()} so‘m` : ''}
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
        </>
      )}
    </main>
  );
}