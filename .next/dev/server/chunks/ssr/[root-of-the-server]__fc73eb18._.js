module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Mebel_Modern/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Mebel_Modern/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Mebel_Modern/app/credit-customers/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 'use client';
// import { useState, useEffect } from 'react';
// import { collection, onSnapshot } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
// import { Order } from '@/lib/types';
// import { useRouter } from 'next/navigation';
// const FIXED_MONTHS = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
// export default function CreditCustomersPage() {
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
//       // Faqat partial payment mijozlar
//       const partials = ords.filter(o => o.paymentStatus === 'partial' || o.paymentStatus === 'pending');
//       setOrders(partials);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);
//   const getDaysUntilNextPayment = (order: Order) => {
//     const paidMonths = order.payments?.map(p => p.monthIndex) || [];
//     const nextMonthIndex = Math.min(order.creditMonths || 0, paidMonths.length);
//     const nextPaymentDate = new Date(order.createdAt);
//     nextPaymentDate.setMonth(nextPaymentDate.getMonth() + nextMonthIndex);
//     const diff = nextPaymentDate.getTime() - new Date().getTime();
//     return Math.ceil(diff / (1000 * 3600 * 24));
//   };
//   if (loading) return <p>Loading…</p>;
//   return (
//     <main className="p-6 min-h-screen bg-gray-50">
//       <h1 className="text-3xl font-bold mb-6 text-amber-900">Bo‘lib To‘lash Mijozlar</h1>
//       <div className="overflow-auto bg-white shadow rounded-lg">
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
//             {orders.map((o) => {
//               const daysLeft = getDaysUntilNextPayment(o);
//               const urgent = daysLeft <= 3 && daysLeft >= 0;
//               return (
//                 <tr
//                   key={o.id}
//                   className={`border-b cursor-pointer ${urgent ? 'bg-red-100' : ''} hover:bg-gray-50`}
//                   onClick={() => router.push(`/orders/${o.id}`)}
//                 >
//                   <td className="px-4 py-3">{o.clientName}</td>
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
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </main>
//   );
// }
}),
"[project]/Mebel_Modern/app/credit-customers/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Mebel_Modern/app/credit-customers/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fc73eb18._.js.map