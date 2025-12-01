// 'use client';
// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import { doc, onSnapshot } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
// import { Order } from '@/lib/types';
// import { Button } from '@/components/ui/button';

// const FIXED_MONTHS = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

// export default function OrderDetailPage() {
//   const params = useParams();
//   const orderId = params.id;
//   const [order, setOrder] = useState<Order | null>(null);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(doc(db, 'orders', orderId), (docSnap) => {
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         setOrder({
//           id: docSnap.id,
//           ...data,
//           payments: data.payments?.map((p: any) => ({ ...p, date: p.date?.toDate?.() || new Date() })),
//           createdAt: data.createdAt?.toDate?.() || new Date(),
//           dueDate: data.dueDate?.toDate?.() || new Date(),
//         });
//       }
//     });
//     return () => unsubscribe();
//   }, [orderId]);

//   if (!order) return <p>Loading…</p>;

//   const monthly = Math.round((Number(order.totalAmount) - Number(order.paidAmount || 0)) / ((order.creditMonths || 1) - (order.payments?.length || 0)));

//   return (
//     <main className="p-6">
//       <h1 className="text-2xl font-bold mb-4">{order.clientName} — To‘lov Tafsiloti</h1>
//       <p>Telefon: {order.clientPhone}</p>
//       <p>Manzil: {order.clientAddress}</p>

//       <table className="w-full text-sm mt-4 border">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="px-3 py-2">Oy</th>
//             <th className="px-3 py-2">To‘lov miqdori</th>
//             <th className="px-3 py-2">Holat</th>
//             <th className="px-3 py-2">Keyingi to‘lov sanasi</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.from({ length: order.creditMonths || 0 }).map((_, i) => {
//             const monthLabel = FIXED_MONTHS[i];
//             const payment = order.payments?.find(p => p.monthIndex === i);
//             return (
//               <tr key={i} className={payment ? 'bg-green-50' : 'bg-yellow-50'}>
//                 <td className="px-3 py-2">{monthLabel}</td>
//                 <td className="px-3 py-2">{monthly.toLocaleString()} so‘m</td>
//                 <td className="px-3 py-2">{payment ? 'Paid ✓' : 'Pending'}</td>
//                 <td className="px-3 py-2">{!payment ? new Date(order.createdAt).toLocaleDateString() : ''}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </main>
//   );
// }



























'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { doc, onSnapshot, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Order } from '@/lib/types';
import { Button } from '@/components/ui/button';

const FIXED_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function OrderDetailPage() {
  const params = useParams();
  const orderId = params.id;
  const [order, setOrder] = useState<Order | null>(null);
  const [processingMonth, setProcessingMonth] = useState<number | null>(null);

  // Load order in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'orders', orderId), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setOrder({
          id: docSnap.id,
          ...data,
          payments: data.payments?.map((p: any) => ({ ...p, date: p.date?.toDate?.() || new Date() })) || [],
          createdAt: data.createdAt?.toDate?.() || new Date(),
          dueDate: data.dueDate?.toDate?.() || new Date(),
        });
      }
    });
    return () => unsubscribe();
  }, [orderId]);

  if (!order) return <p>Loading…</p>;

  // Compute monthly payment
  const remainingMonths = (order.creditMonths || 1) - (order.payments?.length || 0);
  const remainingAmount = Number(order.totalAmount) - Number(order.paidAmount || 0);
  const monthly = remainingMonths > 0 ? Math.round(remainingAmount / remainingMonths) : 0;

  // Handle payment for a month
  const handlePayMonth = async (monthIndex: number) => {
    if (!order) return;
    if (processingMonth !== null) return; // prevent double click

    const alreadyPaid = order.payments?.some(p => p.monthIndex === monthIndex);
    if (alreadyPaid) return;

    setProcessingMonth(monthIndex);

    try {
      const paymentRecord = {
        monthIndex,
        monthLabel: FIXED_MONTHS[monthIndex] || `M${monthIndex + 1}`,
        amount: monthly,
        date: new Date(),
      };

      const newPaidAmount = (order.paidAmount || 0) + monthly;
      const isFullyPaid = newPaidAmount >= Number(order.totalAmount || 0);

      await updateDoc(doc(db, 'orders', order.id), {
        payments: arrayUnion(paymentRecord),
        paidAmount: newPaidAmount,
        paymentStatus: isFullyPaid ? 'fully-paid' : 'partial',
      });
    } catch (err) {
      console.error('Payment error:', err);
    } finally {
      setProcessingMonth(null);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{order.clientName} — To‘lov Tafsiloti</h1>
      <p>Telefon: {order.clientPhone}</p>
      <p>Manzil: {order.clientAddress}</p>

      <table className="w-full text-sm mt-4 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-3 py-2">Oy</th>
            <th className="px-3 py-2">To‘lov miqdori</th>
            <th className="px-3 py-2">Holat</th>
            <th className="px-3 py-2">Keyingi to‘lov sanasi</th>
            <th className="px-3 py-2">Amal</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: order.creditMonths || 0 }).map((_, i) => {
            const monthLabel = FIXED_MONTHS[i];
            const payment = order.payments?.find(p => p.monthIndex === i);
            return (
              <tr key={i} className={payment ? 'bg-green-50' : 'bg-yellow-50'}>
                <td className="px-3 py-2">{monthLabel}</td>
                <td className="px-3 py-2">{monthly.toLocaleString()} so‘m</td>
                <td className="px-3 py-2">{payment ? 'Paid ✓' : 'Pending'}</td>
                <td className="px-3 py-2">{!payment ? order.dueDate?.toLocaleDateString() : ''}</td>
                <td className="px-3 py-2">
                  {!payment ? (
                    <Button
                      size="sm"
                      onClick={() => handlePayMonth(i)}
                      disabled={processingMonth === i}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      To‘landi
                    </Button>
                  ) : (
                    <span className="text-green-700 font-semibold">✓</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}