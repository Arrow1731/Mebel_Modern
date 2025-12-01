module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Mebel_Modern/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Mebel_Modern/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Mebel_Modern/app/orders/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
"[project]/Mebel_Modern/app/orders/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Mebel_Modern/app/orders/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6a8afe4a._.js.map