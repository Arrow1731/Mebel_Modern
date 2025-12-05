// 'use client';

// import { useState, useEffect } from 'react';
// import { collection, onSnapshot } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
// import { Order } from '@/lib/types';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { getDailyAnalytics, getMonthlyAnalytics, getYearlyAnalytics } from '@/lib/analytics-utils';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import LoginModal from '@/components/login-modal';
// import { Download } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export default function AnalyticsPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [viewType, setViewType] = useState<'daily' | 'monthly' | 'yearly'>('monthly');
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [analyticsData, setAnalyticsData] = useState<any>(null);
//   const [chartData, setChartData] = useState<any[]>([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // --- LOAD ORDERS ---
//   useEffect(() => {
//     const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     setIsLoggedIn(loggedIn);

//     if (!loggedIn) {
//       setLoading(false);
//       return;
//     }

//     const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
//       const ords = snapshot.docs.map(doc => {
//         const data = doc.data();
//         return {
//           id: doc.id,
//           ...data,
//           createdAt: data.createdAt?.toDate?.() || (data.createdAt ? new Date(data.createdAt) : new Date()),
//           dueDate: data.dueDate?.toDate?.() || (data.dueDate ? new Date(data.dueDate) : new Date()),
//           payments: data.payments?.map((p: any) => ({
//             ...p,
//             date: p.date?.toDate?.() || (p.date ? new Date(p.date) : new Date())
//           })) || []
//         } as Order;
//       });
//       setOrders(ords);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   // --- UPDATE ANALYTICS BASED ON VIEW TYPE ---
//   useEffect(() => {
//     if (orders.length === 0) return;

//     if (viewType === 'daily') {
//       const data = getDailyAnalytics(orders, selectedDate);
//       setAnalyticsData(data);

//       const lastWeek = Array.from({ length: 7 }, (_, i) => {
//         const d = new Date(selectedDate);
//         d.setDate(d.getDate() - (6 - i));
//         return getDailyAnalytics(orders, d);
//       });
//       setChartData(lastWeek);
//     } else if (viewType === 'monthly') {
//       const data = getMonthlyAnalytics(orders, selectedMonth, selectedYear);
//       setAnalyticsData(data);

//       const lastYear = Array.from({ length: 12 }, (_, i) => {
//         const month = ((selectedMonth + i - 1) % 12) + 1;
//         const year = selectedYear - (selectedMonth + i - 1 >= 12 ? 1 : 0);
//         return getMonthlyAnalytics(orders, month, year);
//       }).map((d, i) => ({
//         ...d,
//         date: new Date(selectedYear, i, 1).toLocaleDateString('uz-UZ', { month: 'long' }),
//       }));
//       setChartData(lastYear);
//     } else {
//       const data = getYearlyAnalytics(orders, selectedYear);
//       setAnalyticsData(data);

//       const lastDecade = Array.from({ length: 10 }, (_, i) =>
//         getYearlyAnalytics(orders, selectedYear - (9 - i))
//       );
//       setChartData(lastDecade);
//     }
//   }, [viewType, selectedDate, selectedMonth, selectedYear, orders]);

//   // --- FORMATTER ---
//   const formatMoney = (value: number) => Number(value).toLocaleString('ru-RU');

//   // --- CSV DOWNLOAD ---
//   const downloadCSV = () => {
//     let csv = '';
//     orders.forEach((order, index) => {
//       const dateStr = order.createdAt instanceof Date ? order.createdAt.toLocaleDateString('uz-UZ') : '';
//       const partial = order.paymentStatus === 'partial';
//       if (!partial) {
//         csv += `${index + 1},${order.clientName},${order.clientPhone},${order.productName || 'N/A'},${order.productQuantity || 1},${formatMoney(order.totalAmount)},${order.paymentStatus}\n`;
//       } else {
//         const nextPayment = order.dueDate instanceof Date ? order.dueDate.toLocaleDateString('uz-UZ') : '';
//         const paidDates = order.payments.map(p => p.date instanceof Date ? p.date.toLocaleDateString('uz-UZ') : '').join('; ');
//         csv += `${index + 1},${order.clientName},${order.clientPhone},${order.productName || 'N/A'},${order.productQuantity || 1},${formatMoney(order.totalAmount)},${nextPayment},${paidDates},${order.paymentStatus}\n`;
//       }
//     });

//     // Add BOM for Excel
//     const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `Analytics-${new Date().toISOString().split('T')[0]}.csv`;
//     a.click();
//   };

//   if (!isLoggedIn) {
//     return <LoginModal onLoginSuccess={() => setIsLoggedIn(true)} redirectPath="/analytics" />;
//   }

//   if (loading) return <p className="p-6">Yuklanmoqda…</p>;

//   return (
//     <main className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* HEADER */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-amber-900">Analitika</h1>
//           {/* <Button onClick={downloadCSV} className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
//             <Download size={16} /> CSV Yuklab Olish
//           </Button> */}
//         </div>

//         {/* VIEW TYPE */}
//         <div className="flex gap-2 mb-6">
//           <button onClick={() => setViewType('daily')} className={`px-4 py-2 rounded-lg font-medium ${viewType === 'daily' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 border'}`}>
//             Kunlik
//           </button>
//           <button onClick={() => setViewType('monthly')} className={`px-4 py-2 rounded-lg font-medium ${viewType === 'monthly' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 border'}`}>
//             Oylik
//           </button>
//           <button onClick={() => setViewType('yearly')} className={`px-4 py-2 rounded-lg font-medium ${viewType === 'yearly' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 border'}`}>
//             Yillik
//           </button>
//         </div>

//         {/* DATE PICKERS */}
//         {viewType === 'daily' && (
//           <div className="mb-6">
//             <input
//               type="date"
//               value={selectedDate.toISOString().split('T')[0]}
//               onChange={(e) => setSelectedDate(new Date(e.target.value))}
//               className="px-4 py-2 border rounded-lg"
//             />
//           </div>
//         )}

//         {viewType === 'monthly' && (
//           <div className="mb-6 flex gap-4">
//             <select
//               value={selectedMonth}
//               onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
//               className="px-4 py-2 border rounded-lg"
//             >
//               {Array.from({ length: 12 }, (_, i) => (
//                 <option key={i} value={i + 1}>
//                   {new Date(2024, i).toLocaleDateString('uz-UZ', { month: 'long' })}
//                 </option>
//               ))}
//             </select>

//             <input
//               type="number"
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(parseInt(e.target.value))}
//               className="px-4 py-2 border rounded-lg w-24"
//             />
//           </div>
//         )}

//         {viewType === 'yearly' && (
//           <div className="mb-6">
//             <input
//               type="number"
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(parseInt(e.target.value))}
//               className="px-4 py-2 border rounded-lg w-24"
//             />
//           </div>
//         )}

//         {/* STATS CARDS */}
//         {analyticsData && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//             <Card className="bg-white border-amber-200">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-[20px] font-medium text-gray-600">Foyda</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-3xl font-bold text-amber-900">
//                   {formatMoney(analyticsData.revenue)} So'm
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-white border-amber-200">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-[20px] font-medium text-gray-600">Buyurmalar</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-3xl font-bold text-amber-900">
//                   {analyticsData.orders} ta
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-white border-amber-200">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-[20px] font-medium text-gray-600">Soni</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-3xl font-bold text-amber-900">
//                   {analyticsData.units} ta
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}

//         {/* CHART */}
//         <Card className="bg-white">
//           <CardContent className="pt-6">
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="revenue" fill="#b45309" name="Foyda (So'm)" />
//                 <Bar dataKey="orders" fill="#a16207" name="Buyurtmalar" />
//               </BarChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//       </div>
//     </main>
//   );
// }




















'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Order } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDailyAnalytics, getMonthlyAnalytics, getYearlyAnalytics } from '@/lib/analytics-utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import LoginModal from '@/components/login-modal';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AnalyticsPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [viewType, setViewType] = useState<'daily' | 'monthly' | 'yearly'>('monthly');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [chartData, setChartData] = useState<any[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login state
  const [loading, setLoading] = useState(true);

  // --- CHECK LOGIN ---
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);

    if (!loggedIn) {
      setLoading(false);
      return;
    }

    // --- LOAD ORDERS ---
    const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
      const ords = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate?.() || (data.createdAt ? new Date(data.createdAt) : new Date()),
          dueDate: data.dueDate?.toDate?.() || (data.dueDate ? new Date(data.dueDate) : new Date()),
          payments: data.payments?.map((p: any) => ({
            ...p,
            date: p.date?.toDate?.() || (p.date ? new Date(p.date) : new Date())
          })) || []
        } as Order;
      });
      setOrders(ords);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // --- UPDATE ANALYTICS BASED ON VIEW TYPE ---
  useEffect(() => {
    if (orders.length === 0) return;

    if (viewType === 'daily') {
      const data = getDailyAnalytics(orders, selectedDate);
      setAnalyticsData(data);

      const lastWeek = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(selectedDate);
        d.setDate(d.getDate() - (6 - i));
        return getDailyAnalytics(orders, d);
      });
      setChartData(lastWeek);
    } else if (viewType === 'monthly') {
      const data = getMonthlyAnalytics(orders, selectedMonth, selectedYear);
      setAnalyticsData(data);

      const lastYear = Array.from({ length: 12 }, (_, i) => {
        const month = ((selectedMonth + i - 1) % 12) + 1;
        const year = selectedYear - (selectedMonth + i - 1 >= 12 ? 1 : 0);
        return getMonthlyAnalytics(orders, month, year);
      }).map((d, i) => ({
        ...d,
        date: new Date(selectedYear, i, 1).toLocaleDateString('uz-UZ', { month: 'long' }),
      }));
      setChartData(lastYear);
    } else {
      const data = getYearlyAnalytics(orders, selectedYear);
      setAnalyticsData(data);

      const lastDecade = Array.from({ length: 10 }, (_, i) =>
        getYearlyAnalytics(orders, selectedYear - (9 - i))
      );
      setChartData(lastDecade);
    }
  }, [viewType, selectedDate, selectedMonth, selectedYear, orders]);

  // --- FORMATTER ---
  const formatMoney = (value: number) => Number(value).toLocaleString('ru-RU');

  // --- CSV DOWNLOAD ---
  const downloadCSV = () => {
    let csv = '';
    orders.forEach((order, index) => {
      const dateStr = order.createdAt instanceof Date ? order.createdAt.toLocaleDateString('uz-UZ') : '';
      const partial = order.paymentStatus === 'partial';
      if (!partial) {
        csv += `${index + 1},${order.clientName},${order.clientPhone},${order.productName || 'N/A'},${order.productQuantity || 1},${formatMoney(order.totalAmount)},${order.paymentStatus}\n`;
      } else {
        const nextPayment = order.dueDate instanceof Date ? order.dueDate.toLocaleDateString('uz-UZ') : '';
        const paidDates = order.payments.map(p => p.date instanceof Date ? p.date.toLocaleDateString('uz-UZ') : '').join('; ');
        csv += `${index + 1},${order.clientName},${order.clientPhone},${order.productName || 'N/A'},${order.productQuantity || 1},${formatMoney(order.totalAmount)},${nextPayment},${paidDates},${order.paymentStatus}\n`;
      }
    });

    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Analytics-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  // --- IF NOT LOGGED IN SHOW LOGIN MODAL ---
  if (!isLoggedIn) {
    return <LoginModal onLoginSuccess={() => setIsLoggedIn(true)} redirectPath="/analytics" />;
  }

  if (loading) return <p className="p-6">Yuklanmoqda…</p>;

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-amber-900">Analitika</h1>
          <Button
            onClick={() => { localStorage.removeItem('isLoggedIn'); setIsLoggedIn(false); }}
            className="bg-red-600 hover:bg-red-700"
          >
            Chiqish
          </Button>
        </div>

        {/* VIEW TYPE */}
        <div className="flex gap-2 mb-6">
          <button onClick={() => setViewType('daily')} className={`px-4 py-2 rounded-lg font-medium ${viewType === 'daily' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 border'}`}>
            Kunlik
          </button>
          <button onClick={() => setViewType('monthly')} className={`px-4 py-2 rounded-lg font-medium ${viewType === 'monthly' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 border'}`}>
            Oylik
          </button>
          <button onClick={() => setViewType('yearly')} className={`px-4 py-2 rounded-lg font-medium ${viewType === 'yearly' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 border'}`}>
            Yillik
          </button>
        </div>

        {/* DATE PICKERS */}
        {viewType === 'daily' && (
          <div className="mb-6">
            <input
              type="date"
              value={selectedDate.toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              className="px-4 py-2 border rounded-lg"
            />
          </div>
        )}

        {viewType === 'monthly' && (
          <div className="mb-6 flex gap-4">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="px-4 py-2 border rounded-lg"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {new Date(2024, i).toLocaleDateString('uz-UZ', { month: 'long' })}
                </option>
              ))}
            </select>

            <input
              type="number"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="px-4 py-2 border rounded-lg w-24"
            />
          </div>
        )}

        {viewType === 'yearly' && (
          <div className="mb-6">
            <input
              type="number"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="px-4 py-2 border rounded-lg w-24"
            />
          </div>
        )}

        {/* STATS CARDS */}
        {analyticsData && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-white border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-[20px] font-medium text-gray-600">Foyda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-900">
                  {formatMoney(analyticsData.revenue)} So'm
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-[20px] font-medium text-gray-600">Buyurmalar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-900">
                  {analyticsData.orders} ta
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-[20px] font-medium text-gray-600">Soni</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-900">
                  {analyticsData.units} ta
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CHART */}
        <Card className="bg-white">
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#b45309" name="Foyda (So'm)" />
                <Bar dataKey="orders" fill="#a16207" name="Buyurtmalar" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>
    </main>
  );
}