// 'use client';

// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import { doc, onSnapshot, updateDoc, arrayUnion } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
// import { Order } from '@/lib/types';
// import { Button } from '@/components/ui/button';

// const FIXED_MONTHS = [
//   'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
//   'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
// ];

// export default function OrderDetailPage() {
//   const { id } = useParams();
//   const [order, setOrder] = useState<Order | null>(null);
//   const [loading, setLoading] = useState(true);

//   // === REALTIME ORDER OLISh ===
//   useEffect(() => {
//     const unsub = onSnapshot(doc(db, 'orders', id as string), snap => {
//       if (!snap.exists()) return;

//       const data = snap.data();

//       setOrder({
//         id: snap.id,
//         ...data,
//         payments:
//           data.payments?.map((p: any) => ({
//             ...p,
//             date: p.date?.toDate?.() || new Date(),
//           })) || [],
//         createdAt: data.createdAt?.toDate?.() || new Date(),
//         firstPaymentDate:
//           data.firstPaymentDate?.toDate?.() ||
//           data.createdAt?.toDate?.() ||
//           new Date(),
//       });

//       setLoading(false);
//     });

//     return () => unsub();
//   }, [id]);


//   if (loading || !order) return <p>Yuklanmoqda...</p>;

//   // === OYLIK TO‘LOV MIQDORI ===
//   const monthlyAmount = Math.round(
//     (Number(order.totalAmount) - Number(order.paidAmount || 0)) /
//     ((order.creditMonths || 1) - (order.payments?.length || 0))
//   );

//   // === TO‘LOVNI YOZIB QO‘YISh ===
//   const markAsPaid = async (monthIndex: number) => {
//     const newPayment = {
//       monthIndex,
//       amount: monthlyAmount,
//       date: new Date(),
//     };

//     await updateDoc(doc(db, 'orders', id as string), {
//       payments: arrayUnion(newPayment),
//       paidAmount: Number(order.paidAmount || 0) + monthlyAmount,
//     });
//   };

//   // === KEYINGI TO‘LOV SANASI ===
//   const getNextPaymentDate = (monthIndex: number) => {
//     const date = new Date(order.firstPaymentDate);
//     date.setMonth(date.getMonth() + monthIndex);
//     return date.toLocaleDateString();
//   };

//   // === SORT: TO‘LANMAGAN OYLAR BOSHIDA ===
//   const rows = Array.from({ length: order.creditMonths || 0 }).map((_, i) => {
//     const payment = order.payments?.find(p => p.monthIndex === i);
//     return { index: i, paid: Boolean(payment), payment };
//   });

//   rows.sort((a, b) => Number(a.paid) - Number(b.paid));

//   return (
//     <main className="oontainer p-4 md:p-6">
//       <h1 className="text-2xl font-bold mb-3">{order.clientName} — To‘lov tafsiloti</h1>

//       <div className="text-sm mb-4">
//         <p>📞 Telefon: <b>{order.clientPhone}</b></p>
//         <p>📍 Manzil: {order.clientAddress}</p>
//       </div>

//       <div className="overflow-auto rounded border">
//         <table className="w-full text-sm min-w-[800px]">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-3 py-2 text-left">Oy</th>
//               <th className="px-3 py-2 text-left">To‘lov miqdori</th>
//               <th className="px-3 py-2 text-left">Holat</th>
//               <th className="px-3 py-2 text-left">To‘lov sanasi</th>
//               <th className="px-3 py-2 text-left">Keyingi to‘lov sanasi</th>
//               <th className="px-3 py-2 text-left">Amal</th>
//             </tr>
//           </thead>

//           <tbody>
//             {rows.map(({ index, paid, payment }) => {
//               const monthLabel = FIXED_MONTHS[index % 12];

//               return (
//                 <tr
//                   key={index}
//                   className={`border-b ${paid ? 'bg-green-50' : 'bg-yellow-50'}`}
//                 >
//                   {/* === 1. Oy === */}
//                   <td className="px-3 py-2">{monthLabel}</td>

//                   {/* === 2. To‘lov miqdori === */}
//                   <td className="px-3 py-2">
//                     {monthlyAmount.toLocaleString()} so‘m
//                   </td>

//                   {/* === 3. Holat === */}
//                   <td className="px-3 py-2">
//                     {paid ? 'To‘langan ✓' : 'Kutilmoqda'}
//                   </td>

//                   {/* === 4. To‘lov sanasi === */}
//                   <td className="px-3 py-2">
//                     {paid ? payment?.date?.toLocaleDateString() : '-'}
//                   </td>

//                   {/* === 5. Keyingi to‘lov sanasi === */}
//                   <td className="px-3 py-2">
//                     {!paid ? getNextPaymentDate(index) : ''}
//                   </td>

//                   {/* === 6. Amal === */}
//                   <td className="px-3 py-2">
//                     {!paid && (
//                       <Button
//                         className="bg-green-600 hover:bg-green-700 text-white"
//                         onClick={() => markAsPaid(index)}
//                       >
//                         To‘landi
//                       </Button>
//                     )}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

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

const FIXED_MONTHS = [
  'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
  'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
];

export default function OrderDetailPage() {
  const { id } = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  // realtime yuklash
  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'orders', id as string), snap => {
      if (!snap.exists()) return;

      const data = snap.data();

      setOrder({
        id: snap.id,
        ...data,
        payments:
          data.payments?.map((p: any) => ({
            ...p,
            date: p.date?.toDate?.() || new Date(),
          })) || [],
        createdAt: data.createdAt?.toDate?.() || new Date(),
        firstPaymentDate:
          data.firstPaymentDate?.toDate?.() ||
          data.createdAt?.toDate?.() ||
          new Date(),
      });

      setLoading(false);
    });

    return () => unsub();
  }, [id]);

  if (loading || !order) return <p>Yuklanmoqda...</p>;

  // To‘liq to‘landi deb tekshirish
  const fullyPaid = Number(order.paidAmount || 0) >= Number(order.totalAmount);

  // Bitta oylik to‘lov
  const monthlyAmount = Math.round(
    (Number(order.totalAmount) - Number(order.paidAmount || 0)) /
      ((order.creditMonths || 1) - (order.payments?.length || 0))
  );

  // To‘lash tugmasi
  const markAsPaid = async (monthIndex: number) => {
    const newPayment = {
      monthIndex,
      amount: monthlyAmount,
      date: new Date(),
    };

    const totalPaid = Number(order.paidAmount || 0) + monthlyAmount;
    const isFully = totalPaid >= Number(order.totalAmount);

    await updateDoc(doc(db, 'orders', id as string), {
      payments: arrayUnion(newPayment),
      paidAmount: totalPaid,
      paymentStatus: isFully ? 'paid' : order.paymentStatus,
    });
  };

  // Keyingi to‘lov sanasi
  const getNextPaymentDate = (monthIndex: number) => {
    const date = new Date(order.firstPaymentDate);
    date.setMonth(date.getMonth() + monthIndex);
    return date.toLocaleDateString();
  };

  // Barcha oylar ro‘yxati
  const rows = Array.from({ length: order.creditMonths || 0 }).map((_, i) => {
    const payment = order.payments?.find(p => p.monthIndex === i);
    return { index: i, paid: Boolean(payment), payment };
  });

  rows.sort((a, b) => Number(a.paid) - Number(b.paid));

  // === AGAR TO‘LIQ TO‘LANGAN BO‘LSA — JADVAL KO‘RINMAYDI ===
  if (order.paymentStatus === 'paid' || fullyPaid) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-3">{order.clientName}</h1>

        <p className="p-4 bg-green-100 border border-green-400 text-green-800 rounded">
          ✅ Ushbu mijoz barcha bo‘lib-to‘lovlarni to‘liq to‘ladi.
        </p>
      </main>
    );
  }

  return (
    <main className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-3">
        {order.clientName} — To‘lov tafsiloti
      </h1>

      <div className="text-sm mb-4">
        <p>📞 Telefon: <b>{order.clientPhone}</b></p>
        <p>📍 Manzil: {order.clientAddress}</p>
      </div>

      <div className="overflow-auto rounded border">
        <table className="w-full text-sm min-w-[800px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left">Oy</th>
              <th className="px-3 py-2 text-left">To‘lov miqdori</th>
              <th className="px-3 py-2 text-left">Holat</th>
              <th className="px-3 py-2 text-left">To‘lov sanasi</th>
              <th className="px-3 py-2 text-left">Keyingi to‘lov</th>
              <th className="px-3 py-2 text-left">Amal</th>
            </tr>
          </thead>

          <tbody>
            {rows.map(({ index, paid, payment }) => {
              const monthLabel = FIXED_MONTHS[index % 12];

              return (
                <tr
                  key={index}
                  className={`border-b ${paid ? 'bg-green-50' : 'bg-yellow-50'}`}
                >
                  <td className="px-3 py-2">{monthLabel}</td>

                  <td className="px-3 py-2">
                    {monthlyAmount.toLocaleString()} so‘m
                  </td>

                  <td className="px-3 py-2">
                    {paid ? 'To‘langan ✓' : 'Kutilmoqda'}
                  </td>

                  <td className="px-3 py-2">
                    {paid ? payment?.date?.toLocaleDateString() : '-'}
                  </td>

                  <td className="px-3 py-2">
                    {!paid ? getNextPaymentDate(index) : ''}
                  </td>

                  <td className="px-3 py-2">
                    {!paid && (
                      <Button
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => markAsPaid(index)}
                      >
                        To‘landi
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}