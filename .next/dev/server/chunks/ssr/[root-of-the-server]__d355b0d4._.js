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
"[project]/Mebel_Modern/lib/firebase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/firebase/storage/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/@firebase/storage/dist/node-esm/index.node.esm.js [app-ssr] (ecmascript)");
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
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStorage"])(app);
}),
"[project]/Mebel_Modern/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Mebel_Modern/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Mebel_Modern/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Mebel_Modern/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Mebel_Modern/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Mebel_Modern/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Mebel_Modern/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Mebel_Modern/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Mebel_Modern/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Mebel_Modern/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Mebel_Modern/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Mebel_Modern/app/product/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
//   const [initialPayment, setInitialPayment] = useState<number>(0); // NEW
//   const [orderStatus, setOrderStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
//   const [customerPhone2, setCustomerPhone2] = useState('');
//   const [nextPaymentDateInput, setNextPaymentDateInput] = useState<string>(() => {
//     const today = new Date();
//     return today.toISOString().split('T')[0]; // default to today
//   });
//   const dueDate = new Date(nextPaymentDateInput);
//   dueDate.setMonth(dueDate.getMonth() + creditMonths);
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
//   // Calculations
//   const fixedSubtotal = product.price * quantity;
//   const agreedSum = manualProductSum !== '' ? manualProductSum : fixedSubtotal;
//   // Remaining after deposit
//   const remainingAmount = Math.max(0, agreedSum - initialPayment);
//   // Credit fee (5%) applies if creditMonths > 1
//   const creditFee = creditMonths > 1 ? remainingAmount * 0.05 : 0;
//   const totalToFinance = remainingAmount + creditFee;
//   const monthlyPayment = creditMonths > 1 ? totalToFinance / creditMonths : totalToFinance;
//   // Next payment date (1 month after today)
//   const nextPaymentDate = new Date();
//   nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
//   const handleCheckout = async () => {
//     if (!customerName || !customerPhone || !customerAddress) {
//       alert("Iltimos Bosh Qolgan Kataklarni To'ldiring");
//       return;
//     }
//     if (initialPayment > agreedSum) {
//       alert("Oldindan to'lov Mahsulot narxidan katta bo'lishi mumkin emas!");
//       return;
//     }
//     setOrderStatus('loading');
//     try {
//       const dueDate = new Date();
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
//                       {/* Required phone number */}
//                       <div>
//                         <label className="block text-sm font-medium mb-1">Telefon Raqami (Majburiy)</label>
//                         <input
//                           type="tel"
//                           value={customerPhone}
//                           onChange={(e) => {
//                             let val = e.target.value;
//                             // Force +998 prefix
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
//                       {/* Optional 2nd phone number */}
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
//                 {/* Product Summary */}
//                 <div className="border-b pb-4">
//                   <div className="flex justify-between mb-2">
//                     <span className="font-semibold">{product.name}</span>
//                     <span className="font-semibold">{fixedSubtotal.toLocaleString()} So'm</span>
//                   </div>
//                   <div className="flex justify-between text-sm text-gray-600">
//                     <span>Soni: {quantity}</span>
//                     <span>{product.price.toLocaleString()} x {quantity}</span>
//                   </div>
//                 </div>
//                 {/* Agreed Price + Initial Payment */}
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
//                 {/* Credit Selection */}
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
//                   {/* New Date Input for the first payment */}
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
//                           // Start date: agar mijoz oldindan to'lov qilgan bo'lsa, u sanani ishlatish
//                           const startDate = nextPaymentDateInput ? new Date(nextPaymentDateInput) : new Date();
//                           // Har bir oy uchun yangi sana yaratamiz
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
//                 {/* Payment Summary */}
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
//                       <span>{nextPaymentDate.toLocaleDateString()}</span>
//                     </div>
//                   )}
//                   {initialPayment > 0 && (
//                     <div className="flex justify-between text-sm text-gray-600 pt-1">
//                       <span>Oldindan To'lov:</span>
//                       <span>{initialPayment.toLocaleString()} So'm</span>
//                     </div>
//                   )}
//                 </div>
//                 {/* Buttons */}
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
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Mebel_Modern/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function ProductPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const productId = params.id;
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [showCheckout, setShowCheckout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [creditMonths, setCreditMonths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [customerName, setCustomerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [customerPhone, setCustomerPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [customerAddress, setCustomerAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [manualProductSum, setManualProductSum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [initialPayment, setInitialPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [orderStatus, setOrderStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [customerPhone2, setCustomerPhone2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Bu yerda mijoz buyurtma qilgan sanani default qilamiz
    const [nextPaymentDateInput, setNextPaymentDateInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const today = new Date();
        return today.toISOString().split('T')[0]; // yyyy-mm-dd format
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!productId) return;
        const getProduct = async ()=>{
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'products', productId));
            if (docSnap.exists()) {
                setProduct({
                    id: docSnap.id,
                    ...docSnap.data()
                });
            }
            setLoading(false);
        };
        getProduct();
    }, [
        productId
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center",
        children: "Yuklanmoqda..."
    }, void 0, false, {
        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
        lineNumber: 496,
        columnNumber: 23
    }, this);
    if (!product) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center",
        children: "Mahsulot Topilmadi"
    }, void 0, false, {
        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
        lineNumber: 497,
        columnNumber: 24
    }, this);
    // Kalkulyatsiyalar
    const fixedSubtotal = product.price * quantity;
    const agreedSum = manualProductSum !== '' ? manualProductSum : fixedSubtotal;
    const remainingAmount = Math.max(0, agreedSum - initialPayment);
    const creditFee = creditMonths > 1 ? remainingAmount * 0.05 : 0;
    const totalToFinance = remainingAmount + creditFee;
    const monthlyPayment = creditMonths > 1 ? totalToFinance / creditMonths : totalToFinance;
    const handleCheckout = async ()=>{
        if (!customerName || !customerPhone || !customerAddress) {
            alert("Iltimos barcha maydonlarni to'ldiring!");
            return;
        }
        if (initialPayment > agreedSum) {
            alert("Oldindan to'lov mahsulot narxidan katta bo'lishi mumkin emas!");
            return;
        }
        setOrderStatus('loading');
        try {
            const dueDate = new Date(nextPaymentDateInput);
            dueDate.setMonth(dueDate.getMonth() + creditMonths);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'orders'), {
                clientName: customerName,
                clientPhone: customerPhone,
                clientAddress: customerAddress,
                clientEmail: '',
                products: [
                    {
                        productId: product.id,
                        productName: product.name,
                        quantity: quantity,
                        price: agreedSum / quantity
                    }
                ],
                totalAmount: totalToFinance + initialPayment,
                agreedAmount: agreedSum,
                initialPayment: initialPayment,
                remainingAmount: remainingAmount,
                creditMonths: creditMonths,
                monthlyPayment: monthlyPayment,
                paymentStatus: creditMonths > 1 ? 'pending' : 'fully-paid',
                paidAmount: initialPayment,
                dueDate: dueDate,
                payments: []
            });
            setOrderStatus('success');
            setTimeout(()=>{
                setShowCheckout(false);
                setOrderStatus('idle');
                setCustomerName('');
                setCustomerPhone('');
                setCustomerAddress('');
                setManualProductSum('');
                setInitialPayment(0);
            }, 2000);
        } catch (error) {
            console.error('Error creating order:', error);
            setOrderStatus('error');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1600px] mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-amber-900 font-bold text-[35px]",
                    children: "Mahsulot Haqida Ma'lumot"
                }, void 0, false, {
                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                    lineNumber: 565,
                    columnNumber: 9
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                    lineNumber: 565,
                    columnNumber: 92
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden",
                                children: product.images && product.images.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: product.images[0] || "/placeholder.svg",
                                    alt: product.name,
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                    lineNumber: 571,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center h-full text-gray-400",
                                    children: "Mahsulot Surati Mavjud Emas!"
                                }, void 0, false, {
                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                    lineNumber: 578,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                lineNumber: 569,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                            lineNumber: 568,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-[45px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl text-amber-900 mb-2",
                                            children: [
                                                "Mahsulot Nomi: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 75
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                            lineNumber: 586,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-lg mb-4",
                                            children: [
                                                "Mahsulot Kategoriyasi: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: product.category
                                                }, void 0, false, {
                                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 80
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                            lineNumber: 587,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 text-base leading-relaxed mb-4",
                                            children: [
                                                "Mahsulot Haqida Ma'lumot: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: product.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 101
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                            lineNumber: 588,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-4xl text-amber-700",
                                                    children: [
                                                        "Mahsulot Narxi: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: [
                                                                Number(product.price).toLocaleString('ru-RU'),
                                                                " So'm"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                            lineNumber: 592,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-sm px-3 py-1 rounded-full text-center ${product.quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: product.quantity > 0 ? 'Sotuvda Mavjud' : 'Sotuvda Mavjud Emas'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                            lineNumber: 590,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                    lineNumber: 585,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[30px] font-medium text-gray-700",
                                            children: "Soni:"
                                        }, void 0, false, {
                                            fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                            lineNumber: 602,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setQuantity(Math.max(1, quantity - 1)),
                                                    className: "px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg",
                                                    children: "−"
                                                }, void 0, false, {
                                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                    lineNumber: 604,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: quantity,
                                                    onChange: (e)=>setQuantity(Math.min(product.quantity, Math.max(1, parseInt(e.target.value) || quantity))),
                                                    className: "max-w-[35px] w-full text-center border border-gray-300 rounded-sm "
                                                }, void 0, false, {
                                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setQuantity(Math.min(product.quantity, quantity + 1)),
                                                    className: "px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                            lineNumber: 603,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                    lineNumber: 601,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setShowCheckout(true),
                                    disabled: product.quantity === 0,
                                    className: "w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white py-3 text-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                            lineNumber: 630,
                                            columnNumber: 15
                                        }, this),
                                        " Sotish"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                            lineNumber: 584,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                    lineNumber: 566,
                    columnNumber: 9
                }, this),
                showCheckout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-[#808080]/80 flex justify-center z-80 p-[20px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "w-full max-w-[1000px] max-h-[1500px] overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-center text-[45px]",
                                    children: "Buyurtmani Rasmiylashtirish"
                                }, void 0, false, {
                                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                    lineNumber: 640,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                lineNumber: 639,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b pb-[10px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900 mb-3",
                                                children: "Mijoz Haqida Ma'lumot"
                                            }, void 0, false, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 645,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium mb-1",
                                                                children: "Ismi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                lineNumber: 648,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: customerName,
                                                                onChange: (e)=>setCustomerName(e.target.value),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg",
                                                                placeholder: "FIO Mijoz"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                lineNumber: 649,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 647,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium mb-1",
                                                                        children: "Telefon Raqami (Majburiy)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                        lineNumber: 659,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "tel",
                                                                        value: customerPhone,
                                                                        onChange: (e)=>{
                                                                            let val = e.target.value;
                                                                            if (!val.startsWith('+998')) {
                                                                                val = '+998' + val.replace(/\D/g, '');
                                                                            }
                                                                            setCustomerPhone(val);
                                                                        },
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg",
                                                                        placeholder: "+998 XX XXX XX XX",
                                                                        required: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                        lineNumber: 660,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                lineNumber: 658,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium mb-1",
                                                                        children: "Qo'shimcha Telefon Raqami (Ixtiyoriy)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                        lineNumber: 677,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "tel",
                                                                        value: customerPhone2,
                                                                        onChange: (e)=>{
                                                                            let val = e.target.value;
                                                                            if (!val.startsWith('+998') && val !== '') {
                                                                                val = '+998' + val.replace(/\D/g, '');
                                                                            }
                                                                            setCustomerPhone2(val);
                                                                        },
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg",
                                                                        placeholder: "+998 XX XXX XX XX"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                        lineNumber: 678,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                lineNumber: 676,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 657,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium mb-1",
                                                                children: "Yashash Manzili"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: customerAddress,
                                                                onChange: (e)=>setCustomerAddress(e.target.value),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg",
                                                                placeholder: "Manzil"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                lineNumber: 696,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 694,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 646,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                        lineNumber: 644,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b pb-4 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Mijoz Bilan Kelishilgan Narx"
                                            }, void 0, false, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 709,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: manualProductSum,
                                                onChange: (e)=>setManualProductSum(e.target.value ? parseFloat(e.target.value) : ''),
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg",
                                                placeholder: "Kelishilgan Narx"
                                            }, void 0, false, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 710,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-1",
                                                children: "Oldindan To'lov (Deposit)"
                                            }, void 0, false, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 717,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: initialPayment,
                                                onChange: (e)=>setInitialPayment(Math.min(Number(e.target.value), agreedSum)),
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg",
                                                placeholder: "Masalan: 3 000 000"
                                            }, void 0, false, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 718,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                        lineNumber: 708,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700",
                                                children: "Kredit Muddati (Oy):"
                                            }, void 0, false, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 729,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: creditMonths,
                                                onChange: (e)=>setCreditMonths(parseInt(e.target.value)),
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "1",
                                                        children: "Kredit To'lovsiz (To'liq Narx)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 735,
                                                        columnNumber: 21
                                                    }, this),
                                                    Array.from({
                                                        length: 12
                                                    }, (_, i)=>i + 1).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: m,
                                                            children: [
                                                                m,
                                                                " Oylik"
                                                            ]
                                                        }, m, true, {
                                                            fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                            lineNumber: 737,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 730,
                                                columnNumber: 19
                                            }, this),
                                            creditMonths > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-amber-700",
                                                children: [
                                                    "+5% Komissiya = ",
                                                    creditFee.toLocaleString(),
                                                    " So'm"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 741,
                                                columnNumber: 21
                                            }, this),
                                            creditMonths > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Birinchi To'lov Sanasi:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 746,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: nextPaymentDateInput,
                                                        onChange: (e)=>setNextPaymentDateInput(e.target.value),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 747,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 745,
                                                columnNumber: 21
                                            }, this),
                                            creditMonths > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-gray-700 mb-2",
                                                        children: "To'lov Jadvali:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 759,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-inside space-y-1",
                                                        children: Array.from({
                                                            length: creditMonths
                                                        }, (_, i)=>{
                                                            const startDate = nextPaymentDateInput ? new Date(nextPaymentDateInput) : new Date();
                                                            const monthDate = new Date(startDate);
                                                            monthDate.setMonth(startDate.getMonth() + i);
                                                            const monthName = monthDate.toLocaleString('default', {
                                                                month: 'short'
                                                            });
                                                            const formattedDate = monthDate.toLocaleDateString();
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-sm text-gray-600 flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            monthName,
                                                                            " (",
                                                                            i + 1,
                                                                            " oy): ",
                                                                            monthlyPayment.toLocaleString(),
                                                                            " So'm"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                        lineNumber: 771,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-500",
                                                                        children: [
                                                                            "To'lov Sanasi: ",
                                                                            formattedDate
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                        lineNumber: 772,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                                lineNumber: 770,
                                                                columnNumber: 29
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 758,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                        lineNumber: 728,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1 border-t pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm text-gray-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Qolgan To'lov:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 784,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            remainingAmount.toLocaleString(),
                                                            " So'm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 785,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 783,
                                                columnNumber: 19
                                            }, this),
                                            creditMonths > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm text-amber-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Kredit Komissiyasi (5%):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 789,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            creditFee.toLocaleString(),
                                                            " So'm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 788,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between font-bold text-lg text-amber-900 pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Jami To'lov:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 794,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            totalToFinance.toLocaleString(),
                                                            " So'm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 795,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 793,
                                                columnNumber: 19
                                            }, this),
                                            creditMonths > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm text-gray-600 pt-2 border-t",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Oylik To'lov:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 799,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            monthlyPayment.toLocaleString(),
                                                            " So'm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 800,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 798,
                                                columnNumber: 21
                                            }, this),
                                            creditMonths > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm text-gray-600 pt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Keyingi To'lov Sanasi:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 805,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: new Date(nextPaymentDateInput).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 804,
                                                columnNumber: 21
                                            }, this),
                                            initialPayment > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm text-gray-600 pt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Oldindan To'lov:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 811,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            initialPayment.toLocaleString(),
                                                            " So'm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                        lineNumber: 812,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 810,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                        lineNumber: 782,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: ()=>setShowCheckout(false),
                                                variant: "outline",
                                                className: "flex-1",
                                                disabled: orderStatus === 'loading',
                                                children: "Bekor Qilish"
                                            }, void 0, false, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 818,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Mebel_Modern$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: handleCheckout,
                                                className: "flex-1 bg-amber-600 hover:bg-amber-700",
                                                disabled: orderStatus === 'loading',
                                                children: [
                                                    orderStatus === 'loading' && 'Yuklanmoqda...',
                                                    orderStatus === 'success' && 'Buyurtma Yaratildi!',
                                                    orderStatus === 'error' && 'Xatolik Yuz Berdi',
                                                    orderStatus === 'idle' && 'Buyurtma Berish'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                                lineNumber: 826,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                                lineNumber: 642,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                        lineNumber: 638,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
                    lineNumber: 637,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
            lineNumber: 564,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Mebel_Modern/app/product/[id]/page.tsx",
        lineNumber: 563,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d355b0d4._.js.map