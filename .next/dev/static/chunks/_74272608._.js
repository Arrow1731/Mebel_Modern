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
"[project]/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FURNITURE_CATEGORIES",
    ()=>FURNITURE_CATEGORIES
]);
const FURNITURE_CATEGORIES = [
    // 'Барчаси',
    'Spalniy Komplekt',
    'Shikaflar',
    'Trimolar',
    'Sandiklar',
    'Stol - Stullar',
    'Tapchanlar',
    'Servant va Panellar',
    'Prixojkalar',
    'Oshxona Mebellari',
    'Bolalar Mebellari'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/product/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // 'use client';
// // import { useState, useEffect } from 'react';
// // import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
// // import { db } from '@/lib/firebase';
// // import { Product } from '@/lib/types';
// // import { Button } from '@/components/ui/button';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import Image from 'next/image';
// // import { ShoppingCart } from 'lucide-react';
// // import { useParams } from 'next/navigation';
// // export default function ProductPage() {
// //   const params = useParams();
// //   const productId = params.id as string;
// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [quantity, setQuantity] = useState(1);
// //   const [showCheckout, setShowCheckout] = useState(false);
// //   const [creditMonths, setCreditMonths] = useState(1);
// //   const [customerName, setCustomerName] = useState('');
// //   const [customerPhone, setCustomerPhone] = useState('');
// //   const [customerAddress, setCustomerAddress] = useState('');
// //   const [manualProductSum, setManualProductSum] = useState<number | ''>('');
// //   const [orderStatus, setOrderStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
// //   useEffect(() => {
// //     if (!productId) return;
// //     const getProduct = async () => {
// //       const docSnap = await getDoc(doc(db, 'products', productId));
// //       if (docSnap.exists()) {
// //         setProduct({ id: docSnap.id, ...docSnap.data() } as Product);
// //       }
// //       setLoading(false);
// //     };
// //     getProduct();
// //   }, [productId]);
// //   if (loading) return <div className="min-h-screen flex items-center justify-center">Yuklanmoqda...</div>;
// //   if (!product) return <div className="min-h-screen flex items-center justify-center">Mahsulot Topilmadi</div>;
// //   const fixedSubtotal = product.price * quantity;
// //   const agreedSum = manualProductSum !== '' ? manualProductSum : fixedSubtotal;
// //   const creditFee = creditMonths > 1 ? (agreedSum * 0.05) : 0;
// //   const total = agreedSum + creditFee;
// //   const monthlyPayment = creditMonths > 1 ? total / creditMonths : total;
// //   const handleCheckout = async () => {
// //     if (!customerName || !customerPhone || !customerAddress) {
// //       alert("Iltimos Bosh Qolgan Kataklarni To'ldiring");
// //       return;
// //     }
// //     setOrderStatus('loading');
// //     try {
// //       const dueDate = new Date();
// //       dueDate.setMonth(dueDate.getMonth() + creditMonths);
// //       await addDoc(collection(db, 'orders'), {
// //         clientName: customerName,
// //         clientPhone: customerPhone,
// //         clientAddress: customerAddress,
// //         clientEmail: '',
// //         products: [{
// //           productId: product.id,
// //           productName: product.name,
// //           quantity: quantity,
// //           price: agreedSum / quantity  // Store agreed unit price
// //         }],
// //         totalAmount: total,
// //         agreedAmount: agreedSum,  // Store the agreed sum separately
// //         creditMonths: creditMonths,
// //         monthlyPayment: monthlyPayment,
// //         paymentStatus: creditMonths > 1 ? 'pending' : 'fully-paid',
// //         paidAmount: 0,
// //         dueDate: dueDate,
// //         createdAt: new Date(),
// //         payments: []
// //       });
// //       setOrderStatus('success');
// //       setTimeout(() => {
// //         setShowCheckout(false);
// //         setOrderStatus('idle');
// //         setCustomerName('');
// //         setCustomerPhone('');
// //         setCustomerAddress('');
// //         setManualProductSum('');
// //       }, 2000);
// //     } catch (error) {
// //       console.error('Error creating order:', error);
// //       setOrderStatus('error');
// //     }
// //   };
// //   return (
// //     <main className="min-h-screen bg-gray-50 py-8">
// //       <div className="max-w-[1600px] mx-auto px-4">
// //         <h2 className='text-amber-900 font-bold text-[35px]'>Mahsulot Haqida Ma'lumot</h2> <br />
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
// //           {/* Images */}
// //           <div className="space-y-4">
// //             <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
// //               {product.images && product.images.length > 0 ? (
// //                 <Image
// //                   src={product.images[0] || "/placeholder.svg"}
// //                   alt={product.name}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               ) : (
// //                 <div className="flex items-center justify-center h-full text-gray-400">Mahsulot Surati Mavjud Emas!</div>
// //               )}
// //             </div>
// //           </div>
// //           {/* Product Info */}
// //           <div className="space-y-[45px]">
// //             <div>
// //               <h1 className="text-3xl text-amber-900 mb-2">Mahsulot Nomi: <b>{product.name}</b></h1>
// //               <p className="text-gray-600 text-lg mb-4">Mahsulot Kategoriyasi: <b>{product.category}</b></p>
// //               <p className="text-gray-700 text-base leading-relaxed mb-4">Mahsulot Haqida Ma'lumot: <b>{product.description}</b></p>
// //               <div className="flex items-baseline gap-2 mb-4">
// //                 <span className="text-4xl text-amber-700">
// //                   Mahsulot Narxi: <b>{Number(product.price).toLocaleString('ru-RU')} So'm</b>
// //                 </span>
// //                 <span className={`text-sm px-3 py-1 rounded-full text-center ${product.quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
// //                   <b>{product.quantity > 0 ? 'Sotuvda Mavjud' : 'Sotuvda Mavjud Emas'}</b>
// //                 </span>
// //               </div>
// //             </div>
// //             {/* Quantity Selector */}
// //             <div className="space-y-2">
// //               <label className="block text-[30px] font-medium text-gray-700">Soni:</label>
// //               <div className="flex items-center gap-2">
// //                 <button
// //                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
// //                   className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
// //                 >
// //                   −
// //                 </button>
// //                 <input
// //                   type="number"
// //                   value={quantity}
// //                   onChange={(e) => setQuantity(Math.min(product.quantity, Math.max(1, parseInt(e.target.value) || quantity)))}
// //                   className="max-w-[35px] w-full text-center border border-gray-300 rounded-sm "
// //                 />
// //                 <button
// //                   onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))}
// //                   className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
// //                 >
// //                   +
// //                 </button>
// //               </div>
// //             </div>
// //             <Button
// //               onClick={() => setShowCheckout(true)}
// //               disabled={product.quantity === 0}
// //               className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white py-3 text-lg"
// //             >
// //               <ShoppingCart className="mr-2" /> Sotish
// //             </Button>
// //           </div>
// //         </div>
// //         {/* Checkout Modal */}
// //         {showCheckout && (
// //           <div className="fixed inset-0 bg-[#808080] flex justify-center z-50 p-[30px]">
// //             <Card className="w-full max-w-[1000px] max-h-[900px] overflow-y-auto">
// //               <CardHeader>
// //                 <CardTitle className='text-center text-[45px]'>Buyurtmani Rasmiylashtirish</CardTitle>
// //               </CardHeader>
// //               <CardContent className="space-y-6">
// //                 <div className="border-b pb-[10px]">
// //                   <h3 className="font-semibold text-gray-900 mb-3">Mijoz Haqida Ma'lumot</h3>
// //                   <div className="space-y-3">
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">Ismi</label>
// //                       <input
// //                         type="text"
// //                         value={customerName}
// //                         onChange={(e) => setCustomerName(e.target.value)}
// //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg"
// //                         placeholder="FIO Mijoz"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">Telefon Raqami</label>
// //                       <input
// //                         type="tel"
// //                         value={customerPhone}
// //                         onChange={(e) => setCustomerPhone(e.target.value)}
// //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg"
// //                         placeholder="+998 XX XXX XX XX"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium mb-1">Yashash Manzili</label>
// //                       <input
// //                         type="text"
// //                         value={customerAddress}
// //                         onChange={(e) => setCustomerAddress(e.target.value)}
// //                         className="w-full px-3 py-2 border border-gray-300 rounded-lg"
// //                         placeholder="Manzil"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="border-b pb-4">
// //                   <div className="flex justify-between mb-2">
// //                     <span className="text-gray-700">{product.name}</span>
// //                     <span className="font-semibold">{fixedSubtotal.toLocaleString()} So'm</span>
// //                   </div>
// //                   <div className="flex justify-between text-sm text-gray-600">
// //                     <span>Soni: {quantity}</span>
// //                     <span>{product.price.toLocaleString()} x {quantity}</span>
// //                   </div>
// //                 </div>
// //                 <div className="border-b pb-4">
// //                   <label className="block text-sm font-medium mb-2">Mijoz Bilan Kelishilgan Narx</label>
// //                   <input
// //                     type="number"
// //                     value={manualProductSum}
// //                     onChange={(e) => setManualProductSum(e.target.value ? parseFloat(e.target.value) : '')}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg"
// //                     placeholder="Mahsulot Asil Narxida Sotilgan Bo'lsa Ochiq Qoldiring"
// //                   />
// //                   {/* <p className="text-xs text-gray-500 mt-1">Bu Narx Mahsulotni Kelishilgan Narxi Xisoblanadi</p> */}
// //                 </div>
// //                 <div className="space-y-2">
// //                   <label className="block text-sm font-medium text-gray-700">Kredit Muddati (Oy):</label>
// //                   <select
// //                     value={creditMonths}
// //                     onChange={(e) => setCreditMonths(parseInt(e.target.value))}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg"
// //                   >
// //                     <option value="1">Kredit To'lovsiz (To'liq Narx)</option>
// //                     {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
// //                       <option key={m} value={m}>{m} Oylik</option>
// //                     ))}
// //                   </select>
// //                   {creditMonths > 1 && (
// //                     <p className="text-sm text-amber-700">+5% Komissiya = {creditFee.toLocaleString()} So'm</p>
// //                   )}
// //                 </div>
// //                 <div className="space-y-1 border-t pt-4">
// //                   {/* <div className="flex justify-between text-sm">
// //                     <span>Подитог:</span>
// //                     <span>{agreedSum.toLocaleString()} сум</span>
// //                   </div> */}
// //                   {creditMonths > 1 && (
// //                     <div className="flex justify-between text-sm text-amber-700">
// //                       <span>Kredit Komissiyasi (5%):</span>
// //                       <span>{creditFee.toLocaleString()} So'm</span>
// //                     </div>
// //                   )}
// //                   <div className="flex justify-between font-bold text-lg text-amber-900 pt-2">
// //                     <span>Jami:</span>
// //                     <span>{total.toLocaleString()} So'm</span>
// //                   </div>
// //                   {creditMonths > 1 && (
// //                     <div className="flex justify-between text-sm text-gray-600 pt-2 border-t">
// //                       <span>Oylik To'lov Summasi:</span>
// //                       <span>{monthlyPayment.toLocaleString()} So'm</span>
// //                     </div>
// //                   )}
// //                 </div>
// //                 <div className="flex gap-3">
// //                   <Button
// //                     onClick={() => setShowCheckout(false)}
// //                     variant="outline"
// //                     className="flex-1"
// //                     disabled={orderStatus === 'loading'}
// //                   >
// //                     Bekor Qilish
// //                   </Button>
// //                   <Button
// //                     onClick={handleCheckout}
// //                     className="flex-1 bg-amber-600 hover:bg-amber-700"
// //                     disabled={orderStatus === 'loading'}
// //                   >
// //                     {orderStatus === 'loading' && 'Yuklanmoqda...'}
// //                     {orderStatus === 'success' && 'Buyurtma Yaratildi!'}
// //                     {orderStatus === 'error' && 'Xatolik Yuz Berdi'}
// //                     {orderStatus === 'idle' && 'Buyurtma Berish'}
// //                   </Button>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         )}
// //       </div>
// //     </main>
// //   );
// // }
// 'use client';
// import { useState, useEffect } from 'react';
// import { collection, onSnapshot } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
// import { Product, FURNITURE_CATEGORIES } from '@/lib/types';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// export default function CatalogPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState('Barchasi');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   // Load products live
//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
//       const prods = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       } as Product));
//       setProducts(prods);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);
//   // FIXED FILTER — always matches category correctly
//   const filteredProducts = products.filter((p) => {
//     const productCategory = (p.category || "").trim().toLowerCase();
//     const selected = selectedCategory.trim().toLowerCase();
//     const categoryMatch =
//       selectedCategory === 'Barchasi' || productCategory === selected;
//     const searchMatch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
//     return categoryMatch && searchMatch;
//   });
//   return (
//     <main className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold text-amber-900 mb-8">Mahsulotlar Katalogi</h1>
//         {/* Search */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Mahsulotni Qidirish..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
//           />
//         </div>
//         {/* Category Buttons */}
//         <div className="mb-6 flex flex-wrap gap-2">
//           <button
//             onClick={() => setSelectedCategory('Barchasi')}
//             className={`px-4 py-2 rounded-lg font-medium transition ${
//               selectedCategory === 'Barchasi'
//                 ? 'bg-amber-600 text-white'
//                 : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
//             }`}
//           >
//             Barchasi
//           </button>
//           {FURNITURE_CATEGORIES.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-2 rounded-lg font-medium transition ${
//                 selectedCategory === cat
//                   ? 'bg-amber-600 text-white'
//                   : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//         {/* Products */}
//         {loading ? (
//           <div className="text-center text-[40px] mt-[150px]">Yuklanmoqda...</div>
//         ) : filteredProducts.length === 0 ? (
//           <div className="text-center">
//             <p className="text-gray-500 text-[32px] mt-[150px]">
//               Mahsulotlar topilmadi.
//             </p>
//             <span className="font-bold text-[24px]">
//               Kategoriyalardan birini tanlang!
//             </span>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filteredProducts.map((product) => (
//               <Card key={product.id} className="overflow-hidden hover:shadow-lg transition group">
//                 <div className="relative w-full h-[250px] bg-gray-200">
//                   {product.images?.[0] ? (
//                     <Image
//                       src={product.images[0]}
//                       alt={product.name}
//                       fill
//                       className="object-cover group-hover:scale-105 transition"
//                     />
//                   ) : (
//                     <div className="flex items-center justify-center h-full text-gray-400">
//                       Rasm mavjud emas
//                     </div>
//                   )}
//                 </div>
//                 <CardContent className="pt-4">
//                   <h3 className="font-bold text-amber-900 mb-1 line-clamp-2">
//                     {product.name}
//                   </h3>
//                   <p className="text-sm text-gray-600 mb-2">{product.category}</p>
//                   <p className="text-sm text-gray-700 mb-3 line-clamp-2">
//                     {product.description}
//                   </p>
//                   <div className="flex justify-between items-center mb-3">
//                     <span className="text-lg font-bold text-amber-700">
//                       {product.price} so'm
//                     </span>
//                     <span
//                       className={`text-sm px-2 py-1 rounded ${
//                         product.quantity > 0
//                           ? 'bg-green-100 text-green-700'
//                           : 'bg-red-100 text-red-700'
//                       }`}
//                     >
//                       {product.quantity > 0
//                         ? 'Sotuvda mavjud'
//                         : 'Mavjud emas'}
//                     </span>
//                   </div>
//                   <Button className="w-full bg-amber-600 hover:bg-amber-700">
//                     <a href={`/product/${product.id}`}>Mahsulot haqida...</a>
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>CatalogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function CatalogPage() {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Barchasi');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Live product loading from Firestore
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CatalogPage.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'products'), {
                "CatalogPage.useEffect.unsubscribe": (snapshot)=>{
                    const prods = snapshot.docs.map({
                        "CatalogPage.useEffect.unsubscribe.prods": (doc)=>({
                                id: doc.id,
                                ...doc.data()
                            })
                    }["CatalogPage.useEffect.unsubscribe.prods"]);
                    setProducts(prods);
                    setLoading(false);
                }
            }["CatalogPage.useEffect.unsubscribe"]);
            return ({
                "CatalogPage.useEffect": ()=>unsubscribe()
            })["CatalogPage.useEffect"];
        }
    }["CatalogPage.useEffect"], []);
    // FIXED FILTERING (always works)
    const filteredProducts = products.filter((p)=>{
        const productCategory = (p.category || "").trim().toLowerCase();
        const selected = selectedCategory.trim().toLowerCase();
        const categoryMatch = selectedCategory === 'Barchasi' || productCategory === selected;
        const searchMatch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-amber-900 mb-8",
                    children: "Mahsulotlar Katalogi"
                }, void 0, false, {
                    fileName: "[project]/app/product/[id]/page.tsx",
                    lineNumber: 561,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Mahsulotni Qidirish...",
                        value: searchTerm,
                        onChange: (e)=>setSearchTerm(e.target.value),
                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600"
                    }, void 0, false, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 567,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/product/[id]/page.tsx",
                    lineNumber: 566,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex flex-wrap gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedCategory('Barchasi'),
                            className: `px-4 py-2 rounded-lg font-medium transition ${selectedCategory === 'Barchasi' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`,
                            children: "Barchasi"
                        }, void 0, false, {
                            fileName: "[project]/app/product/[id]/page.tsx",
                            lineNumber: 578,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FURNITURE_CATEGORIES"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedCategory(cat),
                                className: `px-4 py-2 rounded-lg font-medium transition ${selectedCategory === cat ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`,
                                children: cat
                            }, cat, false, {
                                fileName: "[project]/app/product/[id]/page.tsx",
                                lineNumber: 590,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/product/[id]/page.tsx",
                    lineNumber: 577,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-[40px] mt-[150px]",
                    children: "Yuklanmoqda..."
                }, void 0, false, {
                    fileName: "[project]/app/product/[id]/page.tsx",
                    lineNumber: 606,
                    columnNumber: 11
                }, this) : filteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-[120px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-[32px]",
                            children: "Mahsulotlar topilmadi."
                        }, void 0, false, {
                            fileName: "[project]/app/product/[id]/page.tsx",
                            lineNumber: 611,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-[24px]",
                            children: "Kategoriyalardan birini tanlang!"
                        }, void 0, false, {
                            fileName: "[project]/app/product/[id]/page.tsx",
                            lineNumber: 614,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/product/[id]/page.tsx",
                    lineNumber: 610,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "overflow-hidden hover:shadow-lg transition group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-[250px] bg-gray-200",
                                    children: product.images?.[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: product.images[0],
                                        alt: product.name,
                                        fill: true,
                                        className: "object-cover group-hover:scale-105 transition"
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 628,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center h-full text-gray-400",
                                        children: "Rasm mavjud emas"
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 635,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 626,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-amber-900 mb-1 line-clamp-2",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 642,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-2",
                                            children: product.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-700 mb-3 line-clamp-2",
                                            children: product.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 650,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-bold text-amber-700",
                                                    children: [
                                                        Number(product.price).toLocaleString("ru-RU"),
                                                        " so'm"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-sm px-2 py-1 rounded ${product.quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`,
                                                    children: product.quantity > 0 ? 'Sotuvda mavjud' : 'Mavjud emas'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 654,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/product/${product.id}`,
                                            className: "w-full block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full bg-amber-600 hover:bg-amber-700",
                                                children: "Mahsulot haqida..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 672,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 671,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/product/[id]/page.tsx",
                                    lineNumber: 641,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, product.id, true, {
                            fileName: "[project]/app/product/[id]/page.tsx",
                            lineNumber: 621,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/product/[id]/page.tsx",
                    lineNumber: 619,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/product/[id]/page.tsx",
            lineNumber: 560,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/product/[id]/page.tsx",
        lineNumber: 559,
        columnNumber: 5
    }, this);
}
_s(CatalogPage, "lUgmI8y6OOjt6uW1hKJFCVSnlaw=");
_c = CatalogPage;
var _c;
__turbopack_context__.k.register(_c, "CatalogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_74272608._.js.map