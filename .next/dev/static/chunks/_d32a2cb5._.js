(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/components/LoginModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LoginModal({ onLoginSuccess }) {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleLogin = ()=>{
        if (username === 'admin' && password === '1111') {
            localStorage.setItem('isLoggedIn', 'true');
            onLoginSuccess();
        } else {
            setError('Username yoki parol xato!');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg w-full max-w-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold mb-4",
                    children: "Admin Kirish"
                }, void 0, false, {
                    fileName: "[project]/components/LoginModal.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-600 mb-2",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/components/LoginModal.tsx",
                    lineNumber: 28,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Username",
                    value: username,
                    onChange: (e)=>setUsername(e.target.value),
                    className: "w-full mb-2 px-3 py-2 border rounded"
                }, void 0, false, {
                    fileName: "[project]/components/LoginModal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    placeholder: "Password",
                    value: password,
                    onChange: (e)=>setPassword(e.target.value),
                    className: "w-full mb-4 px-3 py-2 border rounded"
                }, void 0, false, {
                    fileName: "[project]/components/LoginModal.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleLogin,
                    className: "w-full bg-amber-600 hover:bg-amber-700",
                    children: "Kirish"
                }, void 0, false, {
                    fileName: "[project]/components/LoginModal.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/LoginModal.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/LoginModal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(LoginModal, "lABZ+K3zbnEaFQvlduiFXLNOf5A=");
_c = LoginModal;
var _c;
__turbopack_context__.k.register(_c, "LoginModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/products/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
// import { useState, useEffect } from 'react';
// import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
// import { db } from '@/lib/firebase';
// import { Product, FURNITURE_CATEGORIES } from '@/lib/types';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Trash2, Edit2, Plus } from 'lucide-react';
// import Image from 'next/image';
// import LoginModal from '@/components/login-modal';
// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [imageUrl, setImageUrl] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     category: FURNITURE_CATEGORIES[0],
//     price: 0,
//     quantity: 0,
//     description: ''
//   });
//   useEffect(() => {
//     const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     setIsLoggedIn(loggedIn);
//     if (!loggedIn) {
//       setLoading(false);
//       return;
//     }
//     const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
//       const prods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
//       setProducts(prods);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);
//   const filteredProducts = products.filter(p =>
//     p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     p.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const images = editingId 
//         ? products.find(p => p.id === editingId)?.images || (imageUrl ? [imageUrl] : [])
//         : imageUrl ? [imageUrl] : [];
//       if (editingId) {
//         await updateDoc(doc(db, 'products', editingId), {
//           ...formData,
//           price: parseFloat(formData.price.toString()),
//           quantity: parseInt(formData.quantity.toString()),
//           images: images
//         });
//         setEditingId(null);
//       } else {
//         await addDoc(collection(db, 'products'), {
//           ...formData,
//           price: parseFloat(formData.price.toString()),
//           quantity: parseInt(formData.quantity.toString()),
//           images: images,
//           createdAt: new Date()
//         });
//       }
//       setFormData({ name: '', category: FURNITURE_CATEGORIES[0], price: 0, quantity: 0, description: '' });
//       setImageUrl('');
//       setShowForm(false);
//     } catch (error) {
//       console.error('Mahsulotni saqlashda hatolik yuzberdi:', error);
//     }
//   };
//   const handleDelete = async (id: string) => {
//     if (confirm('Siz rozimisiz?')) {
//       try {
//         await deleteDoc(doc(db, 'products', id));
//       } catch (error) {
//         console.error("Mahsulotni o'chirishda xatollik yuzberdi:", error);
//       }
//     }
//   };
//   const handleEdit = (product: Product) => {
//     setFormData({
//       name: product.name,
//       category: product.category,
//       price: product.price,
//       quantity: product.quantity,
//       description: product.description
//     });
//     setImageUrl(product.images?.[0] || '');
//     setEditingId(product.id);
//     setShowForm(true);
//   };
//   if (!isLoggedIn) {
//     return <LoginModal onLoginSuccess={() => setIsLoggedIn(true)} />;
//   }
//   return (
//     <main className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-amber-900">Mahsulotlar Boshqaruv Paneli</h1>
//           <Button
//             onClick={() => {
//               setShowForm(true);
//               setEditingId(null);
//               setFormData({ name: '', category: FURNITURE_CATEGORIES[0], price: 0, quantity: 0, description: '' });
//               setImageUrl('');
//             }}
//             className="bg-amber-600 hover:bg-amber-700"
//           >
//             <Plus className="mr-2" /> Mahsulot Qo'shish
//           </Button>
//         </div>
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Mahsulotni Nomi yoki Kategoriyasi bo'yich izlash..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//           />
//         </div>
//         {showForm && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <Card className="w-full max-w-2xl max-h-96 overflow-y-auto">
//               <CardHeader>
//                 <CardTitle>{editingId ? 'Tahrirlash' : "Qo'shish"} Mahsulot</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Nomi</label>
//                     <input
//                       type="text"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       className="w-full px-3 py-2 border rounded-lg"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Kategoriyasi</label>
//                     <select
//                       value={formData.category}
//                       onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                       className="w-full px-3 py-2 border rounded-lg"
//                     >
//                       {FURNITURE_CATEGORIES.map(cat => (
//                         <option key={cat} value={cat}>{cat}</option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Narxi (So'm)</label>
//                       <input
//                         type="number"
//                         step="0.01"
//                         value={formData.price}
//                         onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
//                         className="w-full px-3 py-2 border rounded-lg"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Soni</label>
//                       <input
//                         type="number"
//                         value={formData.quantity}
//                         onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
//                         className="w-full px-3 py-2 border rounded-lg"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Surat Manzili (URL)</label>
//                     <input
//                       type="url"
//                       value={imageUrl}
//                       onChange={(e) => setImageUrl(e.target.value)}
//                       placeholder="https://example.com/image.jpg"
//                       className="w-full px-3 py-2 border rounded-lg"
//                     />
//                     {imageUrl && (
//                       <div className="mt-2 relative w-32 h-32">
//                         <Image src={imageUrl || "/placeholder.svg"} alt="Preview" fill className="object-cover rounded" />
//                       </div>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Mahsulot Haqida Ma'lumot</label>
//                     <textarea
//                       value={formData.description}
//                       onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                       className="w-full px-3 py-2 border rounded-lg"
//                       rows={3}
//                     />
//                   </div>
//                   <div className="flex gap-3 pt-4">
//                     <Button type="button" variant="outline" onClick={() => setShowForm(false)} className="flex-1">
//                       Bekor Qilish
//                     </Button>
//                     <Button type="submit" className="flex-1 bg-amber-600 hover:bg-amber-700">
//                       Mahsulotni Saqlash
//                     </Button>
//                   </div>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         )}
//         {loading ? (
//           <div>Yuklanmoqda...</div>
//         ) : (
//           <div className="bg-white rounded-lg shadow overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-100 border-b">
//                 <tr>
//                   <th className="px-4 py-3 text-left font-semibold text-gray-700">Mahsulot Nomi</th>
//                   <th className="px-4 py-3 text-left font-semibold text-gray-700">Kategoriyasi</th>
//                   <th className="px-4 py-3 text-left font-semibold text-gray-700">Narxi (So'm)</th>
//                   <th className="px-4 py-3 text-left font-semibold text-gray-700">Soni</th>
//                   <th className="px-4 py-3 text-left font-semibold text-gray-700">Holati</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredProducts.map(product => (
//                   <tr key={product.id} className="border-b hover:bg-gray-50">
//                     <td className="px-4 py-3">{product.name}</td>
//                     <td className="px-4 py-3">{product.category}</td>
//                     {/* ✅ FORMATTED PRICE HERE */}
//                     <td className="px-4 py-3 font-semibold text-amber-700">
//                       {Number(product.price).toLocaleString('ru-RU')} So'm
//                     </td>
//                     <td className="px-4 py-3">{product.quantity}</td>
//                     <td className="px-4 py-3 flex gap-2">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         onClick={() => handleEdit(product)}
//                         className="text-blue-600"
//                       >
//                         <Edit2 size={16} />
//                       </Button>
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         onClick={() => handleDelete(product.id)}
//                         className="text-red-600"
//                       >
//                         <Trash2 size={16} />
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoginModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoginModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ProductsPage() {
    _s();
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsPage.useEffect": ()=>{
            const logged = localStorage.getItem('isLoggedIn') === 'true';
            setIsLoggedIn(logged);
        }
    }["ProductsPage.useEffect"], []);
    if (!isLoggedIn) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoginModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onLoginSuccess: ()=>setIsLoggedIn(true)
    }, void 0, false, {
        fileName: "[project]/app/products/page.tsx",
        lineNumber: 339,
        columnNumber: 27
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-6 bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-amber-900",
                        children: "Mahsulotlar"
                    }, void 0, false, {
                        fileName: "[project]/app/products/page.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>{
                            localStorage.removeItem('isLoggedIn');
                            setIsLoggedIn(false);
                        },
                        className: "bg-red-600 hover:bg-red-700",
                        children: "Chiqish"
                    }, void 0, false, {
                        fileName: "[project]/app/products/page.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/page.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Products boshqaruv paneli ishlayapti..."
            }, void 0, false, {
                fileName: "[project]/app/products/page.tsx",
                lineNumber: 352,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/products/page.tsx",
        lineNumber: 342,
        columnNumber: 5
    }, this);
}
_s(ProductsPage, "fKLMlyFH2GMrhNeUDpp+0z1yiCo=");
_c = ProductsPage;
var _c;
__turbopack_context__.k.register(_c, "ProductsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d32a2cb5._.js.map