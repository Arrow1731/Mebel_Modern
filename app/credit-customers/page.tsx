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


















'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Order } from '@/lib/types';
import LoginModal from '@/components/login-user';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

// 12 OYLIK TARTIB
const FIXED_MONTHS = [
  'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
  'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
];

export default function CreditCustomersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Order | null>(null);

  const router = useRouter();

  // Login check
  useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(logged);
  }, []);

  // Firestore listener
  useEffect(() => {
    if (!isLoggedIn) return;

    const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
      const ords = snapshot.docs.map((d) => {
        const data = d.data();
        return {
          id: d.id,
          ...data,
          createdAt: data.createdAt?.toDate?.() || new Date(),
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
  }, [isLoggedIn]);

  const getDaysUntilNextPayment = (order: Order) => {
    const paidMonthsCount = order.payments?.length || 0;

    const baseDate = order.firstPaymentDate
      ? order.firstPaymentDate.toDate?.() || new Date(order.firstPaymentDate)
      : order.createdAt;

    const nextPaymentDate = new Date(baseDate);
    nextPaymentDate.setMonth(nextPaymentDate.getMonth() + paidMonthsCount);

    const diff = nextPaymentDate.getTime() - new Date().getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) return <LoginModal onLoginSuccess={() => setIsLoggedIn(true)} />;
  if (loading) return <p>Yuklanmoqda…</p>;

  // Split orders
  const partialOrders = orders.filter(
    (o) => o.paymentStatus === 'partial' || o.paymentStatus === 'pending'
  );
  const fullyPaidOrders = orders.filter((o) => o.paymentStatus === 'paid');

  // Sort partial by urgency
  const sortedPartialOrders = [...partialOrders].sort((a, b) => {
    const A = getDaysUntilNextPayment(a);
    const B = getDaysUntilNextPayment(b);

    const Aurgent = A <= 3 ? 1 : 0;
    const Burgent = B <= 3 ? 1 : 0;

    if (Aurgent !== Burgent) return Burgent - Aurgent;
    return A - B;
  });

  // ---------- Page UI ----------
  return (
    <main className="p-6 min-h-screen bg-gray-50">
      {/* Logout button */}
      <div className="flex justify-end mb-4">
        <Button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          Chiqish
        </Button>
      </div>

      {/* Partial / Pending Customers */}
      <h1 className="text-3xl font-bold mb-6 text-amber-900">
        Bo‘lib To‘lovdagi Mijozlar
      </h1>
      <div className="overflow-auto bg-white shadow rounded-lg mb-8">
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
            {sortedPartialOrders.map((o) => {
              const daysLeft = getDaysUntilNextPayment(o);
              const urgent = daysLeft <= 3 && daysLeft >= 0;

              return (
                <tr
                  key={o.id}
                  className={`border-b cursor-pointer ${urgent ? 'bg-red-200' : ''} hover:bg-gray-50`}
                  onClick={() => router.push(`/orders/${o.id}`)} // Partial customers redirect
                >
                  <td className="px-4 py-3 font-medium">{o.clientName}</td>
                  <td className="px-4 py-3">{o.clientPhone}</td>
                  <td className="px-4 py-3">
                    {o.products?.map((p: any) => `${p.productName} (${p.quantity} dona)`).join(', ')}
                  </td>
                  <td className="px-4 py-3">{Number(o.totalAmount).toLocaleString()} so‘m</td>
                  <td className="px-4 py-3">{Number(o.paidAmount || 0).toLocaleString()} so‘m</td>
                  <td className="px-4 py-3">
                    {urgent ? (
                      <span className="text-red-800 font-bold">{daysLeft} kun qoldi</span>
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

      {/* Fully Paid Customers */}
      {fullyPaidOrders.length > 0 && (
        <>
          <h1 className="text-3xl font-bold mb-6 text-green-800">
            To‘liq To‘langan Mijozlar
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
                </tr>
              </thead>
              <tbody>
                {fullyPaidOrders.map((o) => (
                  <tr
                    key={o.id}
                    className="border-b cursor-pointer hover:bg-gray-50"
                    onClick={() => setSelectedCustomer(o)} // Fully paid → modal
                  >
                    <td className="px-4 py-3 font-medium">{o.clientName}</td>
                    <td className="px-4 py-3">{o.clientPhone}</td>
                    <td className="px-4 py-3">
                      {o.products?.map((p: any) => `${p.productName} (${p.quantity} dona)`).join(', ')}
                    </td>
                    <td className="px-4 py-3">{Number(o.totalAmount).toLocaleString()} so‘m</td>
                    <td className="px-4 py-3">{Number(o.paidAmount || 0).toLocaleString()} so‘m</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Customer Payment History Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-[#808080] bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-xl p-6 relative">
            <h2 className="text-2xl font-bold mb-4">{selectedCustomer.clientName} – To‘lov Tarixi</h2>

            <button
              className="absolute top-4 right-4 text-red-600 font-bold"
              onClick={() => setSelectedCustomer(null)}
            >
              ✖
            </button>

            <table className="w-full text-sm border">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-2 text-left">Sana</th>
                  <th className="px-4 py-2 text-left">Summa</th>
                </tr>
              </thead>
              <tbody>
                {selectedCustomer.payments?.map((p: any, i: number) => (
                  <tr key={i} className="border-b">
                    <td className="px-4 py-2">{new Date(p.date).toLocaleDateString()}</td>
                    <td className="px-4 py-2">{Number(p.amount).toLocaleString()} so‘m</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}