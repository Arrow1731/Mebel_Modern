// 'use client';

// import { useState, useEffect } from 'react';
// import { collection, onSnapshot } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
// import { Order } from '@/lib/types';
// import { useRouter } from 'next/navigation';

// const OYLAR = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'];

// export default function KreditMijozlar() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
//       const ords = snapshot.docs.map((d) => {
//         const data = d.data();
//         return {
//           id: d.id,
//           ...data,
//           createdAt: data.createdAt?.toDate?.() || new Date(),
//           dueDate: data.dueDate?.toDate?.() || new Date(),
//           payments: data.payments?.map((p: any) => ({
//             ...p,
//             date: p.date?.toDate?.() || new Date(),
//           })) || [],
//         } as Order;
//       });

//       // Faqat bo‘lib to‘layotgan mijozlar
//       const partials = ords.filter(
//         (o) => o.paymentStatus === 'partial' || o.paymentStatus === 'pending'
//       );

//       // Keyingi to‘lov sanasiga qarab tartiblash (yaqin bo‘lganlar yuqoriga)
//       partials.sort((a, b) => {
//         const daysA = kunQolgani(a);
//         const daysB = kunQolgani(b);
//         return daysA - daysB;
//       });

//       setOrders(partials);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const kunQolgani = (order: Order) => {
//     const paidOylar = order.payments?.map((p) => p.monthIndex) || [];
//     const nextMonthIndex = Math.min(order.creditMonths || 0, paidOylar.length);
//     const nextPaymentDate = new Date(order.createdAt);
//     nextPaymentDate.setMonth(nextPaymentDate.getMonth() + nextMonthIndex);
//     const diff = nextPaymentDate.getTime() - new Date().getTime();
//     return Math.ceil(diff / (1000 * 3600 * 24));
//   };

//   if (loading) return <p>Yuklanmoqda…</p>;

//   return (
//     <main className="p-6 min-h-screen bg-gray-50">
//       <h1 className="text-3xl font-bold mb-6 text-amber-900">Bo‘lib to‘layotgan mijozlar</h1>

//       <div className="overflow-auto bg-white shadow rounded-lg">
//         <table className="w-full text-sm border">
//           <thead className="bg-gray-100 border-b">
//             <tr>
//               <th className="px-4 py-3 text-left">Mijoz</th>
//               <th className="px-4 py-3 text-left">Telefon</th>
//               <th className="px-4 py-3 text-left">Mahsulotlar</th>
//               <th className="px-4 py-3 text-left">Jami</th>
//               <th className="px-4 py-3 text-left">To‘langan</th>
//               <th className="px-4 py-3 text-left">Keyingi to‘lov</th>
//               <th className="px-4 py-3 text-left">Oylar</th>
//             </tr>
//           </thead>

//           <tbody>
//             {orders.map((o) => {
//               const daysLeft = kunQolgani(o);
//               const urgent = daysLeft <= 3 && daysLeft >= 0;

//               return (
//                 <tr
//                   key={o.id}
//                   className={`border-b cursor-pointer ${urgent ? 'bg-red-100' : ''} hover:bg-gray-50`}
//                   onClick={() => router.push(`/orders/${o.id}`)}
//                 >
//                   <td className="px-4 py-3 font-semibold">{o.clientName}</td>
//                   <td className="px-4 py-3">{o.clientPhone}</td>
//                   <td className="px-4 py-3">
//                     {o.products?.map((p: any) => `${p.productName} (${p.quantity})`).join(', ')}
//                   </td>
//                   <td className="px-4 py-3">{Number(o.totalAmount).toLocaleString()} so‘m</td>
//                   <td className="px-4 py-3">{Number(o.paidAmount || 0).toLocaleString()} so‘m</td>
//                   <td className="px-4 py-3">
//                     {urgent ? (
//                       <span className="text-red-700 font-semibold">{daysLeft} kun qoldi</span>
//                     ) : (
//                       <span className="text-gray-700">{daysLeft} kun</span>
//                     )}
//                   </td>
//                   <td className="px-4 py-3 flex flex-wrap gap-1">
//                     {Array.from({ length: o.creditMonths || 0 }).map((_, i) => {
//                       const oyLabel = OYLAR[i] || `M${i + 1}`;
//                       const paid = o.payments?.some((p) => p.monthIndex === i);
//                       return (
//                         <span
//                           key={i}
//                           className={`px-2 py-1 text-xs rounded ${
//                             paid ? 'bg-green-200 text-green-800' : 'bg-yellow-100 text-yellow-800'
//                           }`}
//                         >
//                           {oyLabel}
//                         </span>
//                       );
//                     })}
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
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Order } from '@/lib/types';
import { useRouter } from 'next/navigation';

// 12 OYLIK TARTIB
const FIXED_MONTHS = [
  'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
  'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
];

export default function CreditCustomersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
      const ords = snapshot.docs.map((d) => {
        const data = d.data();
        return {
          id: d.id,
          ...data,
          createdAt: data.createdAt?.toDate?.() || new Date(),
          payments: data.payments?.map((p: any) => ({
            ...p,
            date: p.date?.toDate?.() || new Date(),
          })) || [],
        } as Order;
      });

      // Faqat bo‘lib to‘layotganlar
      const partials = ords.filter(o =>
        o.paymentStatus === 'partial' ||
        o.paymentStatus === 'pending'
      );

      setOrders(partials);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // === KEYINGI TO‘LOV SANASINI HISOBLASH (CUSTOMER FIRST PAYMENT DATE BO‘YICHA) ===
  const getDaysUntilNextPayment = (order: Order) => {
    const paidMonthsCount = order.payments?.length || 0;

    // Mijoz tanlagan boshlanish sanasi — AGAR YO‘Q BO‘LSA createdAt OLADI
    const baseDate = order.firstPaymentDate
      ? order.firstPaymentDate.toDate?.() || new Date(order.firstPaymentDate)
      : order.createdAt;

    const nextPaymentDate = new Date(baseDate);
    nextPaymentDate.setMonth(nextPaymentDate.getMonth() + paidMonthsCount);

    const diff = nextPaymentDate.getTime() - new Date().getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  // === QIZIL BELGI — YAQIN TO‘LOV (3 KUNDAN KAM QOLGAN) ===
  const sortedOrders = [...orders].sort((a, b) => {
    const A = getDaysUntilNextPayment(a);
    const B = getDaysUntilNextPayment(b);

    // ATIGI 3–0 KUN QOLGANLAR BIRINCHI BO‘LIB CHIQADI
    const Aurgent = A <= 3 ? 1 : 0;
    const Burgent = B <= 3 ? 1 : 0;

    if (Aurgent !== Burgent) return Burgent - Aurgent;
    return A - B;
  });

  if (loading) return <p>Yuklanmoqda…</p>;

  return (
    <main className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-amber-900">
        Bo‘lib To‘lovdagi Mijozlar
      </h1>

      <div className="overflow-auto bg-white shadow rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 text-left">Mijoz</th>
              <th className="px-4 py-3 text-left">Telefon</th>
              <th className="px-4 py-3 text-left">Mahsulotlar</th>
              <th className="px-4 py-3 text-left">Jami</th>
              <th className="px-4 py-3 text-left">To‘langan</th>
              <th className="px-4 py-3 text-left">Keyingi to‘lov</th>
            </tr>
          </thead>

          <tbody>
            {sortedOrders.map((o) => {
              const daysLeft = getDaysUntilNextPayment(o);
              const urgent = daysLeft <= 3 && daysLeft >= 0;

              return (
                <tr
                  key={o.id}
                  className={`border-b cursor-pointer ${
                    urgent ? 'bg-red-200' : ''
                  } hover:bg-gray-50`}
                  onClick={() => router.push(`/orders/${o.id}`)}
                >
                  <td className="px-4 py-3 font-medium">{o.clientName}</td>
                  <td className="px-4 py-3">{o.clientPhone}</td>

                  <td className="px-4 py-3">
                    {o.products
                      ?.map((p: any) => `${p.productName} (${p.quantity} dona)`)
                      .join(', ')}
                  </td>

                  <td className="px-4 py-3">
                    {Number(o.totalAmount).toLocaleString()} so‘m
                  </td>

                  <td className="px-4 py-3">
                    {Number(o.paidAmount || 0).toLocaleString()} so‘m
                  </td>

                  <td className="px-4 py-3">
                    {urgent ? (
                      <span className="text-red-800 font-bold">
                        {daysLeft} kun qoldi
                      </span>
                    ) : (
                      <span className="text-gray-700">{daysLeft} kun</span>
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