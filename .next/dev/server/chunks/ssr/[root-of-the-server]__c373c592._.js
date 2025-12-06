module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/credit-customers/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 'use client';
// import { useState, useEffect } from 'react';
// import { collection, onSnapshot } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
// import { Order } from '@/lib/types';
// import { useRouter } from 'next/navigation';
// import LoginModal from '@/components/login-user'; // Make sure your LoginModal is correct
// // 12 OYLIK TARTIB
// const FIXED_MONTHS = [
//   'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
//   'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
// ];
// export default function CreditCustomersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();
//   // Check login from localStorage
//   useEffect(() => {
//     const logged = localStorage.getItem('isLoggedIn') === 'true';
//     setIsLoggedIn(logged);
//   }, []);
//   useEffect(() => {
//     if (!isLoggedIn) return; // Don't fetch if not logged in
//     const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
//       const ords = snapshot.docs.map((d) => {
//         const data = d.data();
//         return {
//           id: d.id,
//           ...data,
//           createdAt: data.createdAt?.toDate?.() || new Date(),
//           payments: data.payments?.map((p: any) => ({
//             ...p,
//             date: p.date?.toDate?.() || new Date(),
//           })) || [],
//         } as Order;
//       });
//       setOrders(ords);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, [isLoggedIn]);
//   // === KEYINGI TO‘LOV SANASINI HISOBLASH ===
//   const getDaysUntilNextPayment = (order: Order) => {
//     const paidMonthsCount = order.payments?.length || 0;
//     const baseDate = order.firstPaymentDate
//       ? order.firstPaymentDate.toDate?.() || new Date(order.firstPaymentDate)
//       : order.createdAt;
//     const nextPaymentDate = new Date(baseDate);
//     nextPaymentDate.setMonth(nextPaymentDate.getMonth() + paidMonthsCount);
//     const diff = nextPaymentDate.getTime() - new Date().getTime();
//     return Math.ceil(diff / (1000 * 3600 * 24));
//   };
//   if (!isLoggedIn) {
//     return <LoginModal onLoginSuccess={() => setIsLoggedIn(true)} />;
//   }
//   if (loading) return <p>Yuklanmoqda…</p>;
//   // Split partial and fully paid customers
//   const partialOrders = orders.filter(
//     o => o.paymentStatus === 'partial' || o.paymentStatus === 'pending'
//   );
//   const fullyPaidOrders = orders.filter(
//     o => o.paymentStatus === 'paid'
//   );
//   // Sort partial by urgency
//   const sortedPartialOrders = [...partialOrders].sort((a, b) => {
//     const A = getDaysUntilNextPayment(a);
//     const B = getDaysUntilNextPayment(b);
//     const Aurgent = A <= 3 ? 1 : 0;
//     const Burgent = B <= 3 ? 1 : 0;
//     if (Aurgent !== Burgent) return Burgent - Aurgent;
//     return A - B;
//   });
//   return (
//     <main className="p-6 min-h-screen bg-gray-50">
//       <h1 className="text-3xl font-bold mb-6 text-amber-900">
//         Bo‘lib To‘lovdagi Mijozlar
//       </h1>
//       {/* Partial / Pending Customers */}
//       <div className="overflow-auto bg-white shadow rounded-lg mb-8">
//         <table className="w-full text-sm">
//           <thead className="bg-gray-100 border-b">
//             <tr>
//               <th className="px-4 py-3 text-left">Mijoz</th>
//               <th className="px-4 py-3 text-left">Telefon</th>
//               <th className="px-4 py-3 text-left">Mahsulotlar</th>
//               <th className="px-4 py-3 text-left">Jami</th>
//               <th className="px-4 py-3 text-left">To‘langan</th>
//               <th className="px-4 py-3 text-left">Keyingi to‘lov</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedPartialOrders.map((o) => {
//               const daysLeft = getDaysUntilNextPayment(o);
//               const urgent = daysLeft <= 3 && daysLeft >= 0;
//               return (
//                 <tr
//                   key={o.id}
//                   className={`border-b cursor-pointer ${
//                     urgent ? 'bg-red-200' : ''
//                   } hover:bg-gray-50`}
//                   onClick={() => router.push(`/orders/${o.id}`)}
//                 >
//                   <td className="px-4 py-3 font-medium">{o.clientName}</td>
//                   <td className="px-4 py-3">{o.clientPhone}</td>
//                   <td className="px-4 py-3">
//                     {o.products
//                       ?.map((p: any) => `${p.productName} (${p.quantity} dona)`)
//                       .join(', ')}
//                   </td>
//                   <td className="px-4 py-3">{Number(o.totalAmount).toLocaleString()} so‘m</td>
//                   <td className="px-4 py-3">{Number(o.paidAmount || 0).toLocaleString()} so‘m</td>
//                   <td className="px-4 py-3">
//                     {urgent ? (
//                       <span className="text-red-800 font-bold">{daysLeft} kun qoldi</span>
//                     ) : (
//                       <span className="text-gray-700">{daysLeft} kun</span>
//                     )}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       {/* Fully Paid Customers Section */}
//       {fullyPaidOrders.length > 0 && (
//         <>
//           <h1 className="text-3xl font-bold mb-6 text-green-800">
//             To‘liq To‘langan Mijozlar
//           </h1>
//           <div className="overflow-auto bg-white shadow rounded-lg">
//             <table className="w-full text-sm">
//               <thead className="bg-gray-100 border-b">
//                 <tr>
//                   <th className="px-4 py-3 text-left">Mijoz</th>
//                   <th className="px-4 py-3 text-left">Telefon</th>
//                   <th className="px-4 py-3 text-left">Mahsulotlar</th>
//                   <th className="px-4 py-3 text-left">Jami</th>
//                   <th className="px-4 py-3 text-left">To‘langan</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {fullyPaidOrders.map((o) => (
//                   <tr
//                     key={o.id}
//                     className="border-b cursor-pointer hover:bg-gray-50"
//                     onClick={() => router.push(`/orders/${o.id}`)}
//                   >
//                     <td className="px-4 py-3 font-medium">{o.clientName}</td>
//                     <td className="px-4 py-3">{o.clientPhone}</td>
//                     <td className="px-4 py-3">
//                       {o.products?.map((p: any) => `${p.productName} (${p.quantity} dona)`).join(', ')}
//                     </td>
//                     <td className="px-4 py-3">{Number(o.totalAmount).toLocaleString()} so‘m</td>
//                     <td className="px-4 py-3">{Number(o.paidAmount || 0).toLocaleString()} so‘m</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </main>
//   );
// }
}),
"[project]/app/credit-customers/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/credit-customers/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c373c592._.js.map