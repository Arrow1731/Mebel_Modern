module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/lib/firebase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/node-esm/index.node.esm.js [app-ssr] (ecmascript)");
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
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStorage"])(app);
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/product/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
// import { useState, useEffect } from 'react';
// import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
// import { Product } from '@/lib/types';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import Image from 'next/image';
// import { ShoppingCart } from 'lucide-react';
// import { useParams } from 'next/navigation';
// export default function ProductPage() {
//   const params = useParams();
//   const productId = params.id as string;
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [creditMonths, setCreditMonths] = useState(1);
//   const [customerName, setCustomerName] = useState('');
//   const [customerPhone, setCustomerPhone] = useState('');
//   const [customerAddress, setCustomerAddress] = useState('');
//   const [manualProductSum, setManualProductSum] = useState<number | ''>('');
//   const [initialPayment, setInitialPayment] = useState<number>(0);
//   const [orderStatus, setOrderStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
//   const [customerPhone2, setCustomerPhone2] = useState('');
//   // Bu yerda mijoz buyurtma qilgan sanani default qilamiz
//   const [nextPaymentDateInput, setNextPaymentDateInput] = useState<string>(() => {
//     const today = new Date();
//     return today.toISOString().split('T')[0]; // yyyy-mm-dd format
//   });
//   useEffect(() => {
//     if (!productId) return;
//     const getProduct = async () => {
//       const docSnap = await getDoc(doc(db, 'products', productId));
//       if (docSnap.exists()) {
//         setProduct({ id: docSnap.id, ...docSnap.data() } as Product);
//       }
//       setLoading(false);
//     };
//     getProduct();
//   }, [productId]);
//   if (loading) return <div className="min-h-screen flex items-center justify-center">Yuklanmoqda...</div>;
//   if (!product) return <div className="min-h-screen flex items-center justify-center">Mahsulot Topilmadi</div>;
//   // Kalkulyatsiyalar
//   const fixedSubtotal = product.price * quantity;
//   const agreedSum = manualProductSum !== '' ? manualProductSum : fixedSubtotal;
//   const remainingAmount = Math.max(0, agreedSum - initialPayment);
//   const creditFee = creditMonths > 1 ? remainingAmount * 0.05 : 0;
//   const totalToFinance = remainingAmount + creditFee;
//   const monthlyPayment = creditMonths > 1 ? totalToFinance / creditMonths : totalToFinance;
//   const handleCheckout = async () => {
//     if (!customerName || !customerPhone || !customerAddress) {
//       alert("Iltimos barcha maydonlarni to'ldiring!");
//       return;
//     }
//     if (initialPayment > agreedSum) {
//       alert("Oldindan to'lov mahsulot narxidan katta bo'lishi mumkin emas!");
//       return;
//     }
//     setOrderStatus('loading');
//     try {
//       const dueDate = new Date(nextPaymentDateInput);
//       dueDate.setMonth(dueDate.getMonth() + creditMonths);
//       await addDoc(collection(db, 'orders'), {
//         clientName: customerName,
//         clientPhone: customerPhone,
//         clientAddress: customerAddress,
//         clientEmail: '',
//         products: [{
//           productId: product.id,
//           productName: product.name,
//           quantity: quantity,
//           price: agreedSum / quantity
//         }],
//         totalAmount: totalToFinance + initialPayment,
//         agreedAmount: agreedSum,
//         initialPayment: initialPayment,
//         remainingAmount: remainingAmount,
//         creditMonths: creditMonths,
//         monthlyPayment: monthlyPayment,
//         paymentStatus: creditMonths > 1 ? 'pending' : 'fully-paid',
//         paidAmount: initialPayment,
//         dueDate: dueDate,
//         payments: []
//       });
//       setOrderStatus('success');
//       setTimeout(() => {
//         setShowCheckout(false);
//         setOrderStatus('idle');
//         setCustomerName('');
//         setCustomerPhone('');
//         setCustomerAddress('');
//         setManualProductSum('');
//         setInitialPayment(0);
//       }, 2000);
//     } catch (error) {
//       console.error('Error creating order:', error);
//       setOrderStatus('error');
//     }
//   };
//   return (
//     <main className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-[1600px] mx-auto px-4">
//         <h2 className='text-amber-900 font-bold text-[35px]'>Mahsulot Haqida Ma'lumot</h2> <br />
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           {/* Images */}
//           <div className="space-y-4">
//             <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
//               {product.images && product.images.length > 0 ? (
//                 <Image
//                   src={product.images[0] || "/placeholder.svg"}
//                   alt={product.name}
//                   fill
//                   className="object-cover"
//                 />
//               ) : (
//                 <div className="flex items-center justify-center h-full text-gray-400">Mahsulot Surati Mavjud Emas!</div>
//               )}
//             </div>
//           </div>
//           {/* Product Info */}
//           <div className="space-y-[45px]">
//             <div>
//               <h1 className="text-3xl text-amber-900 mb-2">Mahsulot Nomi: <b>{product.name}</b></h1>
//               <p className="text-gray-600 text-lg mb-4">Mahsulot Kategoriyasi: <b>{product.category}</b></p>
//               <p className="text-gray-700 text-base leading-relaxed mb-4">Mahsulot Haqida Ma'lumot: <b>{product.description}</b></p>
//               <div className="flex items-baseline gap-2 mb-4">
//                 <span className="text-4xl text-amber-700">
//                   Mahsulot Narxi: <b>{Number(product.price).toLocaleString('ru-RU')} So'm</b>
//                 </span>
//                 <span className={`text-sm px-3 py-1 rounded-full text-center ${product.quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                   <b>{product.quantity > 0 ? 'Sotuvda Mavjud' : 'Sotuvda Mavjud Emas'}</b>
//                 </span>
//               </div>
//             </div>
//             {/* Quantity Selector */}
//             <div className="space-y-2">
//               <label className="block text-[30px] font-medium text-gray-700">Soni:</label>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
//                 >
//                   −
//                 </button>
//                 <input
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => setQuantity(Math.min(product.quantity, Math.max(1, parseInt(e.target.value) || quantity)))}
//                   className="max-w-[35px] w-full text-center border border-gray-300 rounded-sm "
//                 />
//                 <button
//                   onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))}
//                   className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <Button
//               onClick={() => setShowCheckout(true)}
//               disabled={product.quantity === 0}
//               className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white py-3 text-lg"
//             >
//               <ShoppingCart className="mr-2" /> Sotish
//             </Button>
//           </div>
//         </div>
//         {/* Checkout Modal */}
//         {showCheckout && (
//           <div className="fixed inset-0 bg-[#808080]/80 flex justify-center z-80 p-[20px]">
//             <Card className="w-full max-w-[1000px] max-h-[1500px] overflow-y-auto">
//               <CardHeader>
//                 <CardTitle className='text-center text-[45px]'>Buyurtmani Rasmiylashtirish</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 {/* Customer Info */}
//                 <div className="border-b pb-[10px]">
//                   <h3 className="font-semibold text-gray-900 mb-3">Mijoz Haqida Ma'lumot</h3>
//                   <div className="space-y-3">
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Ismi</label>
//                       <input
//                         type="text"
//                         value={customerName}
//                         onChange={(e) => setCustomerName(e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                         placeholder="FIO Mijoz"
//                       />
//                     </div>
//                     <div className="space-y-3">
//                       <div>
//                         <label className="block text-sm font-medium mb-1">Telefon Raqami (Majburiy)</label>
//                         <input
//                           type="tel"
//                           value={customerPhone}
//                           onChange={(e) => {
//                             let val = e.target.value;
//                             if (!val.startsWith('+998')) {
//                               val = '+998' + val.replace(/\D/g, '');
//                             }
//                             setCustomerPhone(val);
//                           }}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                           placeholder="+998 XX XXX XX XX"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium mb-1">Qo'shimcha Telefon Raqami (Ixtiyoriy)</label>
//                         <input
//                           type="tel"
//                           value={customerPhone2}
//                           onChange={(e) => {
//                             let val = e.target.value;
//                             if (!val.startsWith('+998') && val !== '') {
//                               val = '+998' + val.replace(/\D/g, '');
//                             }
//                             setCustomerPhone2(val);
//                           }}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                           placeholder="+998 XX XXX XX XX"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Yashash Manzili</label>
//                       <input
//                         type="text"
//                         value={customerAddress}
//                         onChange={(e) => setCustomerAddress(e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                         placeholder="Manzil"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* Product + Payments */}
//                 <div className="border-b pb-4 space-y-2">
//                   <label className="block text-sm font-medium mb-1">Mijoz Bilan Kelishilgan Narx</label>
//                   <input
//                     type="number"
//                     value={manualProductSum}
//                     onChange={(e) => setManualProductSum(e.target.value ? parseFloat(e.target.value) : '')}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                     placeholder="Kelishilgan Narx"
//                   />
//                   <label className="block text-sm font-medium mb-1">Oldindan To'lov (Deposit)</label>
//                   <input
//                     type="number"
//                     value={initialPayment}
//                     onChange={(e) => setInitialPayment(Math.min(Number(e.target.value), agreedSum))}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                     placeholder="Masalan: 3 000 000"
//                   />
//                 </div>
//                 {/* Credit */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">Kredit Muddati (Oy):</label>
//                   <select
//                     value={creditMonths}
//                     onChange={(e) => setCreditMonths(parseInt(e.target.value))}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                   >
//                     <option value="1">Kredit To'lovsiz (To'liq Narx)</option>
//                     {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
//                       <option key={m} value={m}>{m} Oylik</option>
//                     ))}
//                   </select>
//                   {creditMonths > 1 && (
//                     <p className="text-sm text-amber-700">+5% Komissiya = {creditFee.toLocaleString()} So'm</p>
//                   )}
//                   {creditMonths > 1 && (
//                     <div className="pt-2">
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Birinchi To'lov Sanasi:</label>
//                       <input
//                         type="date"
//                         value={nextPaymentDateInput}
//                         onChange={(e) => setNextPaymentDateInput(e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                       />
//                     </div>
//                   )}
//                   {/* Payment Schedule */}
//                   {creditMonths > 1 && (
//                     <div className="border-t pt-4">
//                       <h4 className="font-semibold text-gray-700 mb-2">To'lov Jadvali:</h4>
//                       <ul className="list-disc list-inside space-y-1">
//                         {Array.from({ length: creditMonths }, (_, i) => {
//                           const startDate = nextPaymentDateInput ? new Date(nextPaymentDateInput) : new Date();
//                           const monthDate = new Date(startDate);
//                           monthDate.setMonth(startDate.getMonth() + i);
//                           const monthName = monthDate.toLocaleString('default', { month: 'short' });
//                           const formattedDate = monthDate.toLocaleDateString();
//                           return (
//                             <li key={i} className="text-sm text-gray-600 flex justify-between">
//                               <span>{monthName} ({i + 1} oy): {monthlyPayment.toLocaleString()} So'm</span>
//                               <span className="text-gray-500">To'lov Sanasi: {formattedDate}</span>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//                 {/* Summary + Buttons */}
//                 <div className="space-y-1 border-t pt-4">
//                   <div className="flex justify-between text-sm text-gray-600">
//                     <span>Qolgan To'lov:</span>
//                     <span>{remainingAmount.toLocaleString()} So'm</span>
//                   </div>
//                   {creditMonths > 1 && (
//                     <div className="flex justify-between text-sm text-amber-700">
//                       <span>Kredit Komissiyasi (5%):</span>
//                       <span>{creditFee.toLocaleString()} So'm</span>
//                     </div>
//                   )}
//                   <div className="flex justify-between font-bold text-lg text-amber-900 pt-2">
//                     <span>Jami To'lov:</span>
//                     <span>{totalToFinance.toLocaleString()} So'm</span>
//                   </div>
//                   {creditMonths > 1 && (
//                     <div className="flex justify-between text-sm text-gray-600 pt-2 border-t">
//                       <span>Oylik To'lov:</span>
//                       <span>{monthlyPayment.toLocaleString()} So'm</span>
//                     </div>
//                   )}
//                   {creditMonths > 1 && (
//                     <div className="flex justify-between text-sm text-gray-600 pt-1">
//                       <span>Keyingi To'lov Sanasi:</span>
//                       <span>{new Date(nextPaymentDateInput).toLocaleDateString()}</span>
//                     </div>
//                   )}
//                   {initialPayment > 0 && (
//                     <div className="flex justify-between text-sm text-gray-600 pt-1">
//                       <span>Oldindan To'lov:</span>
//                       <span>{initialPayment.toLocaleString()} So'm</span>
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex gap-3">
//                   <Button
//                     onClick={() => setShowCheckout(false)}
//                     variant="outline"
//                     className="flex-1"
//                     disabled={orderStatus === 'loading'}
//                   >
//                     Bekor Qilish
//                   </Button>
//                   <Button
//                     onClick={handleCheckout}
//                     className="flex-1 bg-amber-600 hover:bg-amber-700"
//                     disabled={orderStatus === 'loading'}
//                   >
//                     {orderStatus === 'loading' && 'Yuklanmoqda...'}
//                     {orderStatus === 'success' && 'Buyurtma Yaratildi!'}
//                     {orderStatus === 'error' && 'Xatolik Yuz Berdi'}
//                     {orderStatus === 'idle' && 'Buyurtma Berish'}
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>ProductDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function ProductDetailPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const productId = params.id;
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // === REAL-TIME PRODUCT LISTEN ===
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'products', productId), (snap)=>{
            if (snap.exists()) {
                setProduct({
                    id: snap.id,
                    ...snap.data()
                });
            }
            setLoading(false);
        });
        return ()=>unsub();
    }, [
        productId
    ]);
    const updateProduct = async ()=>{
        if (!product) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'products', productId), {
            name: product.name,
            price: Number(product.price),
            quantity: Number(product.quantity),
            description: product.description,
            status: product.status,
            image: product.image
        });
        alert("Mahsulot yangilandi!");
    };
    const deleteProduct = async ()=>{
        const yes = confirm("Rostan ham ushbu mahsulotni o‘chirmoqchimisiz?");
        if (!yes) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'products', productId));
        alert("Mahsulot o‘chirildi!");
        router.push('/product');
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "p-4",
        children: "Yuklanmoqda..."
    }, void 0, false, {
        fileName: "[project]/app/product/[id]/page.tsx",
        lineNumber: 465,
        columnNumber: 23
    }, this);
    if (!product) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "p-4",
        children: "Mahsulot topilmadi."
    }, void 0, false, {
        fileName: "[project]/app/product/[id]/page.tsx",
        lineNumber: 466,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-2xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Mahsulot tafsiloti"
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            product.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: product.image,
                alt: "Mahsulot",
                className: "w-full h-64 object-cover rounded-lg border mb-4"
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 474,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block font-medium mb-1",
                children: "Mahsulot nomi"
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 482,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: product.name,
                onChange: (e)=>setProduct({
                        ...product,
                        name: e.target.value
                    }),
                className: "border rounded w-full px-3 py-2 mb-4"
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block font-medium mb-1",
                children: "Narxi (so'm)"
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                value: product.price,
                onChange: (e)=>setProduct({
                        ...product,
                        price: e.target.value
                    }),
                className: "border rounded w-full px-3 py-2 mb-4"
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 492,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block font-medium mb-1",
                children: "Soni"
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                value: product.quantity,
                onChange: (e)=>setProduct({
                        ...product,
                        quantity: e.target.value
                    }),
                className: "border rounded w-full px-3 py-2 mb-4"
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 501,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block font-medium mb-1",
                children: "Holati"
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 509,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: product.status,
                onChange: (e)=>setProduct({
                        ...product,
                        status: e.target.value
                    }),
                className: "border rounded w-full px-3 py-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "active",
                        children: "Faol"
                    }, void 0, false, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "archived",
                        children: "Arxivlangan"
                    }, void 0, false, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block font-medium mb-1",
                children: "Tavsif"
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: product.description,
                onChange: (e)=>setProduct({
                        ...product,
                        description: e.target.value
                    }),
                className: "border rounded w-full px-3 py-2 mb-4"
            }, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 521,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        className: "bg-green-600 hover:bg-green-700 text-white",
                        onClick: updateProduct,
                        children: "Yangilash"
                    }, void 0, false, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 529,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        className: "bg-red-600 hover:bg-red-700 text-white",
                        onClick: deleteProduct,
                        children: "O‘chirish"
                    }, void 0, false, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 536,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 528,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/product/[id]/page.tsx",
        lineNumber: 469,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6f8f36b6._.js.map