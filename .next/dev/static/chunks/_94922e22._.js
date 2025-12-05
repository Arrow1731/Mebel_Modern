(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: "AIzaSyDzl9OP8Avxt6qvxI7H91RwA6SMwvEsfjg",
    authDomain: "mebelweb-c3706.firebaseapp.com",
    projectId: "mebelweb-c3706",
    storageBucket: "mebelweb-c3706.firebasestorage.app",
    messagingSenderId: "914008148864",
    appId: "1:914008148864:web:36dbf5a4a738f8b72d8f65"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/credit-payments/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
// import { useState, useEffect } from 'react';
// import { collection, onSnapshot, updateDoc, doc, addDoc } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
// import { Order } from '@/lib/types';
// import { AlertCircle, Download, Check } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// /**
//  * CreditPaymentsPage
//  * - Fixed 5 months: Nov, Dec, Jan, Feb, Mar
//  * - Buttons: Pay for Nov / Pay for Dec / ...
//  * - Success modal after Firestore update completes
//  * - Disabled pill shows when month already paid
//  */
// export default function CreditPaymentsPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [processingId, setProcessingId] = useState<string | null>(null);
//   // Modal state
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalText, setModalText] = useState('');
//   // Fixed months (Option A)
//   const FIXED_MONTHS = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
//   // Load orders live from Firestore
//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
//       const ords = snapshot.docs.map((d) => {
//         const data = d.data();
//         return {
//           id: d.id,
//           ...data,
//           createdAt: data.createdAt?.toDate?.() || new Date(data.createdAt),
//           dueDate: data.dueDate?.toDate?.() || new Date(data.dueDate),
//           payments:
//             data.payments?.map((p: any) => ({
//               ...p,
//               date: p.date?.toDate?.() || new Date(p.date),
//             })) || [],
//         } as Order;
//       });
//       setOrders(ords);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);
//   const fullyPaid = orders.filter((o) => o.paymentStatus === 'fully-paid');
//   const partiallyPaid = orders.filter(
//     (o) =>
//       o.paymentStatus === 'partial' ||
//       (o.paymentStatus === 'pending' && o.creditMonths > 1)
//   );
//   const getDaysUntilDue = (date: Date) => {
//     const now = new Date();
//     const diff = new Date(date).getTime() - now.getTime();
//     return Math.ceil(diff / (1000 * 3600 * 24));
//   };
//   const needsAlert = partiallyPaid.some(
//     (o) => getDaysUntilDue(o.dueDate) <= 3
//   );
//   // Compute monthly payment for order (fallback logic)
//   const computeMonthly = (order: Order) => {
//     if (order.monthlyPayment && Number(order.monthlyPayment) > 0)
//       return Number(order.monthlyPayment);
//     const months = order.creditMonths || 1;
//     const total = Number(order.totalAmount || 0);
//     if (months <= 1) return total;
//     const remaining =
//       order.remainingAmount != null
//         ? Number(order.remainingAmount)
//         : total - (order.paidAmount || 0);
//     const fee = months > 1 ? remaining * 0.05 : 0;
//     // round to whole so'm
//     return Math.round((remaining + fee) / months);
//   };
//   // Pay for a specific month (by index). Shows success modal after save.
//   const handlePayForMonth = async (orderId: string, monthIndex: number) => {
//     setProcessingId(orderId);
//     try {
//       const order = orders.find((o) => o.id === orderId);
//       if (!order) return;
//       // Prevent double-pay if already present
//       const alreadyPaid = (order.payments || []).some(
//         (p: any) => p.monthIndex === monthIndex
//       );
//       if (alreadyPaid) {
//         setModalText(`This month (${FIXED_MONTHS[monthIndex]}) is already paid.`);
//         setModalOpen(true);
//         return;
//       }
//       const monthlyAmount = computeMonthly(order);
//       const paymentRecord = {
//         amount: monthlyAmount,
//         date: new Date(),
//         monthIndex,
//         monthLabel: FIXED_MONTHS[monthIndex] || `Month-${monthIndex + 1}`,
//       };
//       const newPaidAmount = (order.paidAmount || 0) + monthlyAmount;
//       const isFullyPaid = newPaidAmount >= Number(order.totalAmount || 0);
//       // Update Firestore
//       await updateDoc(doc(db, 'orders', orderId), {
//         payments: [...(order.payments || []), paymentRecord],
//         paidAmount: newPaidAmount,
//         paymentStatus: isFullyPaid ? 'fully-paid' : 'pending',
//       });
//       // analytics log
//       await addDoc(collection(db, 'analytics_log'), {
//         type: 'monthly_payment',
//         orderId,
//         clientName: order.clientName,
//         amount: monthlyAmount,
//         monthIndex: paymentRecord.monthIndex,
//         monthLabel: paymentRecord.monthLabel,
//         date: new Date(),
//       });
//       // Show success modal AFTER update succeeded (Option A)
//       setModalText(`Partial Payment for month ${paymentRecord.monthLabel} is successfully paid`);
//       setModalOpen(true);
//     } catch (err) {
//       console.error('Payment error:', err);
//       setModalText('An error occurred while processing payment.');
//       setModalOpen(true);
//     } finally {
//       setProcessingId(null);
//     }
//   };
//   // CSV helper and export
//   const csvEscape = (v: any) => {
//     if (v == null) return '';
//     const s = String(v);
//     if (s.includes(',') || s.includes('"')) return `"${s.replace(/"/g, '""')}"`;
//     return s;
//   };
//   const downloadCSV = (data: Order[], title: string) => {
//     let csv = '\ufeff';
//     const headers = [
//       'Client Name',
//       'Phone',
//       'Phone 2',
//       'Email',
//       'Address',
//       'Products',
//       'Agreed Amount',
//       'Initial Payment',
//       'Remaining',
//       'Credit Months',
//       'Monthly Payment',
//       'Total',
//       'Paid',
//       'Status',
//       'Created At',
//       'Due Date',
//       ...FIXED_MONTHS.map((m) => `${m} (Scheduled)`),
//       ...FIXED_MONTHS.map((m) => `${m} (Paid)`),
//     ];
//     csv += headers.join(',') + '\n';
//     data.forEach((order) => {
//       const productNames =
//         order.products?.map((p: any) => `${p.productName} x${p.quantity}`).join('; ') || '';
//       const monthly = computeMonthly(order);
//       const paidPerMonth = Array(FIXED_MONTHS.length).fill(0);
//       order.payments?.forEach((p: any) => {
//         if (typeof p.monthIndex === 'number' && p.monthIndex >= 0 && p.monthIndex < FIXED_MONTHS.length) {
//           paidPerMonth[p.monthIndex] += Number(p.amount || 0);
//         } else {
//           const firstEmpty = paidPerMonth.findIndex((v) => v === 0);
//           if (firstEmpty >= 0) paidPerMonth[firstEmpty] += Number(p.amount || 0);
//         }
//       });
//       const scheduledPerMonth = FIXED_MONTHS.map((_, i) => ((order.creditMonths || 0) > i ? monthly : ''));
//       const row = [
//         csvEscape(order.clientName),
//         csvEscape(order.clientPhone),
//         csvEscape(order.clientPhone2 || ''),
//         csvEscape(order.clientEmail || ''),
//         csvEscape(order.clientAddress || ''),
//         csvEscape(productNames),
//         order.agreedAmount,
//         order.initialPayment,
//         order.remainingAmount,
//         order.creditMonths,
//         monthly,
//         order.totalAmount,
//         order.paidAmount,
//         order.paymentStatus,
//         order.createdAt?.toLocaleDateString() || '',
//         order.dueDate?.toLocaleDateString() || '',
//         ...scheduledPerMonth,
//         ...paidPerMonth.map((n) => (n === 0 ? '' : n)),
//       ];
//       csv += row.join(',') + '\n';
//     });
//     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${title}.csv`;
//     a.click();
//   };
//   return (
//     <main className="min-h-screen bg-gray-50 py-10 px-6">
//       <h1 className="text-3xl font-bold text-amber-900 mb-8">Kredit To'lovlari</h1>
//       {needsAlert && (
//         <div className="flex items-center gap-2 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-8">
//           <AlertCircle size={20} />
//           <span className="font-semibold">⚠️ Ba'zi mijozlarda muddat yakunlanmoqda!</span>
//         </div>
//       )}
//       {/* Success Modal (appears AFTER successful payment save) */}
//       {modalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-fadeIn">
//             <h3 className="text-xl font-semibold mb-2">Payment Status</h3>
//             <p className="text-gray-700 mb-6">{modalText}</p>
//             <div className="flex justify-end">
//               <Button
//                 onClick={() => setModalOpen(false)}
//                 className="bg-amber-600 hover:bg-amber-700 text-white"
//               >
//                 Close
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//       {loading ? (
//         <p>Loading…</p>
//       ) : (
//         <>
//           {/* Fully Paid */}
//           <section className="mb-14">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-bold text-green-700">To'liq To'langanlar</h2>
//               <Button onClick={() => downloadCSV(fullyPaid, 'Fully-Paid')} className="bg-green-700 text-white">
//                 <Download size={16} className="mr-2" />CSV Yuklab Olish
//               </Button>
//             </div>
//             {fullyPaid.length === 0 ? (
//               <p className="text-gray-500">Hozircha to'liq to'lov qilgan mijozlar yo‘q.</p>
//             ) : (
//               <div className="overflow-auto bg-white shadow rounded-lg">
//                 <table className="w-full text-sm">
//                   <thead className="bg-gray-100 border-b">
//                     <tr>
//                       <th className="px-4 py-3 text-left">Mijoz</th>
//                       <th className="px-4 py-3 text-left">Telefon</th>
//                       <th className="px-4 py-3 text-left">Mahsulotlar</th>
//                       <th className="px-4 py-3 text-left">Summa</th>
//                       <th className="px-4 py-3 text-left">Muddat</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {fullyPaid.map((o) => (
//                       <tr key={o.id} className="border-b">
//                         <td className="px-4 py-3">{o.clientName}</td>
//                         <td className="px-4 py-3">{o.clientPhone}</td>
//                         <td className="px-4 py-3">
//                           {o.products?.map((p: any) => `${p.productName} (${p.quantity} dona)`).join(', ')}
//                         </td>
//                         <td className="px-4 py-3 font-semibold text-green-700">{Number(o.totalAmount).toLocaleString()} so‘m</td>
//                         <td className="px-4 py-3">{o.dueDate?.toLocaleDateString()}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </section>
//           {/* Partial Payment Section */}
//           <section>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-bold text-amber-900">Bo‘lib To‘lash Mijozlar</h2>
//               <Button onClick={() => downloadCSV(partiallyPaid, 'Partially-Paid')} className="bg-amber-700 text-white">
//                 <Download size={16} className="mr-2" />CSV Yuklab Olish
//               </Button>
//             </div>
//             {partiallyPaid.length === 0 ? (
//               <p className="text-gray-500">Bo‘lib to‘lashda bo‘lgan mijozlar yo‘q.</p>
//             ) : (
//               <div className="overflow-auto bg-white shadow rounded-lg">
//                 <table className="w-full text-sm">
//                   <thead className="bg-gray-100">
//                     <tr>
//                       <th className="px-5 py-3 text-left">Mijoz</th>
//                       <th className="px-5 py-3 text-left">Telefon</th>
//                       <th className="px-5 py-3 text-left">Mahsulotlar</th>
//                       <th className="px-5 py-3 text-left">Jami</th>
//                       <th className="px-5 py-3 text-left">To‘langan</th>
//                       <th className="px-5 py-3 text-left">To‘lov Qo‘shish</th>
//                       <th className="px-5 py-3 text-left">Holati</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {partiallyPaid.map((o) => {
//                       const days = getDaysUntilDue(o.dueDate);
//                       const urgent = days <= 3 && days > 0;
//                       const monthly = computeMonthly(o);
//                       // paid month indices (if present)
//                       const paidIndices = (o.payments || [])
//                         .map((p: any) => (typeof p.monthIndex === 'number' ? p.monthIndex : -1))
//                         .filter((n: number) => n >= 0);
//                       return (
//                         <tr key={o.id} className={`border-b ${urgent ? 'bg-red-50' : ''}`}>
//                           <td className="px-5 py-3">{o.clientName}</td>
//                           <td className="px-5 py-3">{o.clientPhone}</td>
//                           <td className="px-5 py-3">{o.products?.map((p: any) => `${p.productName} (${p.quantity})`).join(', ')}</td>
//                           <td className="px-5 py-3 text-amber-700 font-semibold">
//                             {Number(o.totalAmount).toLocaleString()} so‘m
//                           </td>
//                           <td className="px-5 py-3">{Number(o.paidAmount || 0).toLocaleString()} so‘m</td>
//                           <td className="px-5 py-3">
//                             <div className="flex flex-wrap gap-2">
//                               {Array.from({ length: o.creditMonths || 0 }).map((_, i) => {
//                                 const label = FIXED_MONTHS[i] || `M${i + 1}`;
//                                 const already = paidIndices.includes(i);
//                                 return (
//                                   <div key={i}>
//                                     {already ? (
//                                       <button className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-xs" disabled>
//                                         {label} — Paid ✓
//                                       </button>
//                                     ) : (
//                                       <Button
//                                         size="sm"
//                                         onClick={() => handlePayForMonth(o.id, i)}
//                                         disabled={processingId === o.id}
//                                         className="bg-green-600 hover:bg-green-700 text-white text-xs"
//                                       >
//                                         Pay for {label}
//                                       </Button>
//                                     )}
//                                   </div>
//                                 );
//                               })}
//                             </div>
//                           </td>
//                           <td className="px-5 py-3 text-sm">
//                             {urgent ? (
//                               <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full">{days} kun qoldi</span>
//                             ) : (
//                               <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Kutyapti</span>
//                             )}
//                             <div className="mt-2 text-xs text-gray-600">
//                               {FIXED_MONTHS.slice(0, o.creditMonths).map((m, i) => {
//                                 const paid = o.payments?.filter((p: any) => p.monthIndex === i)?.reduce((s: number, p: any) => s + Number(p.amount || 0), 0);
//                                 return (
//                                   <div key={i}>
//                                     {m}: {monthly.toLocaleString()} so‘m{paid ? ` — Paid: ${paid.toLocaleString()} so‘m` : ''}
//                                   </div>
//                                 );
//                               })}
//                             </div>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </section>
//         </>
//       )}
//     </main>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>CreditPaymentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function CreditPaymentsPage() {
    _s();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Fixed months (12 months)
    const FIXED_MONTHS = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    // Load orders live from Firestore
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreditPaymentsPage.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'orders'), {
                "CreditPaymentsPage.useEffect.unsubscribe": (snapshot)=>{
                    const ords = snapshot.docs.map({
                        "CreditPaymentsPage.useEffect.unsubscribe.ords": (d)=>{
                            const data = d.data();
                            return {
                                id: d.id,
                                ...data,
                                createdAt: data.createdAt?.toDate?.() || new Date(data.createdAt),
                                dueDate: data.dueDate?.toDate?.() || new Date(data.dueDate),
                                payments: data.payments?.map({
                                    "CreditPaymentsPage.useEffect.unsubscribe.ords": (p)=>({
                                            ...p,
                                            date: p.date?.toDate?.() || new Date(p.date)
                                        })
                                }["CreditPaymentsPage.useEffect.unsubscribe.ords"]) || []
                            };
                        }
                    }["CreditPaymentsPage.useEffect.unsubscribe.ords"]);
                    setOrders(ords);
                    setLoading(false);
                }
            }["CreditPaymentsPage.useEffect.unsubscribe"]);
            return ({
                "CreditPaymentsPage.useEffect": ()=>unsubscribe()
            })["CreditPaymentsPage.useEffect"];
        }
    }["CreditPaymentsPage.useEffect"], []);
    const fullyPaid = orders.filter((o)=>o.paymentStatus === 'fully-paid');
    const partiallyPaid = orders.filter((o)=>o.paymentStatus === 'partial' || o.paymentStatus === 'pending' && o.creditMonths > 1);
    const getDaysUntilDue = (date)=>{
        const now = new Date();
        const diff = new Date(date).getTime() - now.getTime();
        return Math.ceil(diff / (1000 * 3600 * 24));
    };
    const needsAlert = partiallyPaid.some((o)=>getDaysUntilDue(o.dueDate) <= 3);
    // Compute monthly payment for order (fallback)
    const computeMonthly = (order)=>{
        if (order.monthlyPayment && Number(order.monthlyPayment) > 0) return Number(order.monthlyPayment);
        const months = order.creditMonths || 1;
        const total = Number(order.totalAmount || 0);
        if (months <= 1) return total;
        const remaining = order.remainingAmount != null ? Number(order.remainingAmount) : total - (order.paidAmount || 0);
        const fee = months > 1 ? remaining * 0.05 : 0;
        return Math.round((remaining + fee) / months);
    };
    // CSV helper
    const csvEscape = (v)=>{
        if (v == null) return '';
        const s = String(v);
        if (s.includes(',') || s.includes('"')) return `"${s.replace(/"/g, '""')}"`;
        return s;
    };
    const downloadCSV = (data, title)=>{
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
            ...FIXED_MONTHS.map((m)=>`${m} (Scheduled)`),
            ...FIXED_MONTHS.map((m)=>`${m} (Paid)`)
        ];
        csv += headers.join(',') + '\n';
        data.forEach((order)=>{
            const productNames = order.products?.map((p)=>`${p.productName} x${p.quantity}`).join('; ') || '';
            const monthly = computeMonthly(order);
            const paidPerMonth = Array(FIXED_MONTHS.length).fill(0);
            order.payments?.forEach((p)=>{
                if (typeof p.monthIndex === 'number' && p.monthIndex >= 0 && p.monthIndex < FIXED_MONTHS.length) {
                    paidPerMonth[p.monthIndex] += Number(p.amount || 0);
                } else {
                    const firstEmpty = paidPerMonth.findIndex((v)=>v === 0);
                    if (firstEmpty >= 0) paidPerMonth[firstEmpty] += Number(p.amount || 0);
                }
            });
            const scheduledPerMonth = FIXED_MONTHS.map((_, i)=>(order.creditMonths || 0) > i ? monthly : '');
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
                ...paidPerMonth.map((n)=>n === 0 ? '' : n)
            ];
            csv += row.join(',') + '\n';
        });
        const blob = new Blob([
            csv
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title}.csv`;
        a.click();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50 py-10 px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-amber-900 mb-8",
                children: "Kredit To'lovlari"
            }, void 0, false, {
                fileName: "[project]/app/credit-payments/page.tsx",
                lineNumber: 606,
                columnNumber: 7
            }, this),
            needsAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/app/credit-payments/page.tsx",
                        lineNumber: 610,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: "⚠️ Ba'zi mijozlarda muddat yakunlanmoqda!"
                    }, void 0, false, {
                        fileName: "[project]/app/credit-payments/page.tsx",
                        lineNumber: 611,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/credit-payments/page.tsx",
                lineNumber: 609,
                columnNumber: 9
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/app/credit-payments/page.tsx",
                lineNumber: 616,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-green-700",
                                    children: "To'liq To'langanlar"
                                }, void 0, false, {
                                    fileName: "[project]/app/credit-payments/page.tsx",
                                    lineNumber: 622,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/credit-payments/page.tsx",
                                lineNumber: 621,
                                columnNumber: 13
                            }, this),
                            fullyPaid.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "Hozircha to'liq to'lov qilgan mijozlar yo‘q."
                            }, void 0, false, {
                                fileName: "[project]/app/credit-payments/page.tsx",
                                lineNumber: 629,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-auto bg-white shadow rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-gray-100 border-b",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left",
                                                        children: "Mijoz"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/credit-payments/page.tsx",
                                                        lineNumber: 635,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left",
                                                        children: "Telefon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/credit-payments/page.tsx",
                                                        lineNumber: 636,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left",
                                                        children: "Mahsulotlar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/credit-payments/page.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left",
                                                        children: "Summa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/credit-payments/page.tsx",
                                                        lineNumber: 638,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left",
                                                        children: "Muddat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/credit-payments/page.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/credit-payments/page.tsx",
                                                lineNumber: 634,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/credit-payments/page.tsx",
                                            lineNumber: 633,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: fullyPaid.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3",
                                                            children: o.clientName
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/credit-payments/page.tsx",
                                                            lineNumber: 645,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3",
                                                            children: o.clientPhone
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/credit-payments/page.tsx",
                                                            lineNumber: 646,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3",
                                                            children: o.products?.map((p)=>`${p.productName} (${p.quantity} dona)`).join(', ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/credit-payments/page.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3 font-semibold text-green-700",
                                                            children: [
                                                                Number(o.totalAmount).toLocaleString(),
                                                                " so‘m"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/credit-payments/page.tsx",
                                                            lineNumber: 650,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-3",
                                                            children: o.dueDate?.toLocaleDateString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/credit-payments/page.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, o.id, true, {
                                                    fileName: "[project]/app/credit-payments/page.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/credit-payments/page.tsx",
                                            lineNumber: 642,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/credit-payments/page.tsx",
                                    lineNumber: 632,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/credit-payments/page.tsx",
                                lineNumber: 631,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/credit-payments/page.tsx",
                        lineNumber: 620,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-amber-900",
                                    children: "Bo‘lib To‘lash Mijozlar"
                                }, void 0, false, {
                                    fileName: "[project]/app/credit-payments/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/credit-payments/page.tsx",
                                lineNumber: 662,
                                columnNumber: 13
                            }, this),
                            partiallyPaid.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "Bo‘lib to‘lashda bo‘lgan mijozlar yo‘q."
                            }, void 0, false, {
                                fileName: "[project]/app/credit-payments/page.tsx",
                                lineNumber: 670,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-auto bg-white shadow rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-gray-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-5 py-3 text-left",
                                                        children: "Mijoz"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/credit-payments/page.tsx",
                                                        lineNumber: 676,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-5 py-3 text-left",
                                                        children: "Telefon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/credit-payments/page.tsx",
                                                        lineNumber: 677,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-5 py-3 text-left",
                                                        children: "Mahsulotlar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/credit-payments/page.tsx",
                                                        lineNumber: 678,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-5 py-3 text-left",
                                                        children: "Jami"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/credit-payments/page.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-5 py-3 text-left",
                                                        children: "To‘langan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/credit-payments/page.tsx",
                                                        lineNumber: 680,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-5 py-3 text-left",
                                                        children: "Holati"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/credit-payments/page.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/credit-payments/page.tsx",
                                                lineNumber: 675,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/credit-payments/page.tsx",
                                            lineNumber: 674,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: partiallyPaid.map((o)=>{
                                                const days = getDaysUntilDue(o.dueDate);
                                                const urgent = days <= 3 && days > 0;
                                                const monthly = computeMonthly(o);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: `border-b ${urgent ? 'bg-red-50' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-5 py-3",
                                                            children: o.clientName
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/credit-payments/page.tsx",
                                                            lineNumber: 693,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-5 py-3",
                                                            children: o.clientPhone
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/credit-payments/page.tsx",
                                                            lineNumber: 694,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-5 py-3",
                                                            children: o.products?.map((p)=>`${p.productName} (${p.quantity})`).join(', ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/credit-payments/page.tsx",
                                                            lineNumber: 695,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-5 py-3 text-amber-700 font-semibold",
                                                            children: [
                                                                Number(o.totalAmount).toLocaleString(),
                                                                " so‘m"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/credit-payments/page.tsx",
                                                            lineNumber: 696,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-5 py-3",
                                                            children: [
                                                                Number(o.paidAmount || 0).toLocaleString(),
                                                                " so‘m"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/credit-payments/page.tsx",
                                                            lineNumber: 699,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-5 py-3 text-sm",
                                                            children: [
                                                                urgent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-red-200 text-red-800 px-3 py-1 rounded-full",
                                                                    children: [
                                                                        days,
                                                                        " kun qoldi"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/credit-payments/page.tsx",
                                                                    lineNumber: 702,
                                                                    columnNumber: 31
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full",
                                                                    children: "Kutyapti"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/credit-payments/page.tsx",
                                                                    lineNumber: 704,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 text-xs text-gray-600",
                                                                    children: FIXED_MONTHS.slice(0, o.creditMonths).map((m, i)=>{
                                                                        const paid = o.payments?.filter((p)=>p.monthIndex === i)?.reduce((s, p)=>s + Number(p.amount || 0), 0);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                m,
                                                                                ": ",
                                                                                monthly.toLocaleString(),
                                                                                " so‘m",
                                                                                paid ? ` — Paid: ${paid.toLocaleString()} so‘m` : ''
                                                                            ]
                                                                        }, i, true, {
                                                                            fileName: "[project]/app/credit-payments/page.tsx",
                                                                            lineNumber: 710,
                                                                            columnNumber: 35
                                                                        }, this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/credit-payments/page.tsx",
                                                                    lineNumber: 706,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/credit-payments/page.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, o.id, true, {
                                                    fileName: "[project]/app/credit-payments/page.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/credit-payments/page.tsx",
                                            lineNumber: 685,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/credit-payments/page.tsx",
                                    lineNumber: 673,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/credit-payments/page.tsx",
                                lineNumber: 672,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/credit-payments/page.tsx",
                        lineNumber: 661,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/app/credit-payments/page.tsx",
        lineNumber: 605,
        columnNumber: 5
    }, this);
}
_s(CreditPaymentsPage, "ug8UXigqZ8+/aovEHLbbhGhrhf4=");
_c = CreditPaymentsPage;
var _c;
__turbopack_context__.k.register(_c, "CreditPaymentsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_94922e22._.js.map