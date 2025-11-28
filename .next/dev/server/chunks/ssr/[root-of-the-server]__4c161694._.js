module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/catalog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // 'use client';
// // import { useState, useEffect } from 'react';
// // import { collection, onSnapshot } from 'firebase/firestore';
// // import { db } from '@/lib/firebase';
// // import { Product, FURNITURE_CATEGORIES } from '@/lib/types';
// // import { Card, CardContent } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // export default function CatalogPage() {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [selectedCategory, setSelectedCategory] = useState('Barchasi');
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [loading, setLoading] = useState(true);
// //   useEffect(() => {
// //     const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
// //       const prods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
// //       setProducts(prods);
// //       setLoading(false);
// //     });
// //     return () => unsubscribe();
// //   }, []);
// //   const filteredProducts = products.filter(p => {
// //     const matchCategory = selectedCategory === 'Barchasi' || p.category === selectedCategory;
// //     const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
// //     return matchCategory && matchSearch;
// //   });
// //   return (
// //     <main className="min-h-screen bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-4 py-8">
// //         <h1 className="text-4xl font-bold text-amber-900 mb-8">Mahsulotlar Katalogi</h1>
// //         {/* Search */}
// //         <div className="mb-6">
// //           <input
// //             type="text"
// //             placeholder="Mahsulotni Qidirish..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
// //           />
// //         </div>
// //         {/* Categories */}
// //         <div className="mb-6 flex flex-wrap gap-2">
// //           <button
// //             onClick={() => setSelectedCategory('Barchasi')}
// //             className={`px-4 py-2 rounded-lg font-medium transition ${selectedCategory === 'Barchasi'
// //               ? 'bg-amber-600 text-white'
// //               : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
// //               }`}
// //           >
// //             Barchasi
// //           </button>
// //           {FURNITURE_CATEGORIES.map(cat => (
// //             <button
// //               key={cat}
// //               onClick={() => setSelectedCategory(cat)}
// //               className={`px-4 py-2 rounded-lg font-medium transition ${selectedCategory === cat
// //                 ? 'bg-amber-600 text-white'
// //                 : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
// //                 }`}
// //             >
// //               {cat}
// //             </button>
// //           ))}
// //         </div>
// //         {/* Products Grid */}
// //         {loading ? (
// //           <div className='text-center text-[45px] mt-[250px]'>Yuklanmoqda...</div>
// //         ) : filteredProducts.length === 0 ? (
// //           <div className='text-center'>
// //             <p className="text-gray-500 text-[40px] mt-[250px]">Mahsulotlar Topilmadi.</p>
// //             <span className='font-bold text-[32px] mt-[250px]'>Mahsulotlarni Ko'rish Uchun Yuqoridagi <span className='text-amber-800'>Kategoriyalardan</span> Birini Tanlang!</span>
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {filteredProducts.map(product => (
// //               <Card key={product.id} className="overflow-hidden hover:shadow-lg transition group">
// //                 <div className="relative w-full h-[250px] bg-gray-200">
// //                   {product.images && product.images[0] ? (
// //                     <Image
// //                       src={product.images[0] || "/placeholder.svg"}
// //                       alt={product.name}
// //                       fill
// //                       className="object-cover group-hover:scale-105 transition"
// //                     />
// //                   ) : (
// //                     <div className="flex items-center justify-center h-full text-gray-400">Mahsulot Surati Mavjud Emas!</div>
// //                   )}
// //                 </div>
// //                 <CardContent className="pt-4">
// //                   <h3 className="font-bold text-amber-900 mb-1 line-clamp-2">{product.name}</h3>
// //                   <p className="text-sm text-gray-600 mb-2">{product.category}</p>
// //                   <p className="text-sm text-gray-700 mb-3 line-clamp-2">{product.description}</p>
// //                   <div className="flex justify-between items-center mb-3">
// //                     <span className="text-lg font-bold text-amber-700">{product.price} So'm</span>
// //                     <span className={`text-sm text-center px-2 py-1 rounded ${product.quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
// //                       {product.quantity > 0 ? 'Sotuvda Mavjud' : 'Sotuvda Mavjud Emas'}
// //                     </span>
// //                   </div>
// //                   <Button className="w-full bg-amber-600 hover:bg-amber-700">
// //                     <a href={`/product/${product.id}`}>Mahsulot Haqida...</a>
// //                   </Button>
// //                 </CardContent>
// //               </Card>
// //             ))}
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
// import Link from 'next/link';
// export default function CatalogPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState('Barchasi');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
//       const prods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
//       setProducts(prods);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);
//   const filteredProducts = products.filter(p => {
//     const matchCategory = selectedCategory === 'Barchasi' || p.category === selectedCategory;
//     const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchCategory && matchSearch;
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
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
//           />
//         </div>
//         {/* Categories */}
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
//           {FURNITURE_CATEGORIES.map(cat => (
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
//         {/* Products Grid */}
//         {loading ? (
//           <div className='text-center text-[45px] mt-[250px]'>Yuklanmoqda...</div>
//         ) : filteredProducts.length === 0 ? (
//           <div className='text-center'>
//             <p className="text-gray-500 text-[40px] mt-[250px]">Mahsulotlar Topilmadi.</p>
//             <span className='font-bold text-[32px] mt-[250px]'>
//               Mahsulotlarni Ko'rish Uchun Yuqoridagi <span className='text-amber-800'>Kategoriyalardan</span> Birini Tanlang!
//             </span>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filteredProducts.map(product => (
//               <Card key={product.id} className="overflow-hidden hover:shadow-lg transition group">
//                 {/* Image */}
//                 <div className="relative w-full h-[250px] bg-gray-200">
//                   {product.images && product.images[0] ? (
//                     <Image
//                       src={product.images[0] || "/placeholder.svg"}
//                       alt={product.name}
//                       fill
//                       className="object-cover group-hover:scale-105 transition"
//                     />
//                   ) : (
//                     <div className="flex items-center justify-center h-full text-gray-400">
//                       Mahsulot Surati Mavjud Emas!
//                     </div>
//                   )}
//                 </div>
//                 <CardContent className="pt-4">
//                   <h3 className="font-bold text-amber-900 mb-1 line-clamp-2">{product.name}</h3>
//                   <p className="text-sm text-gray-600 mb-2">{product.category}</p>
//                   <p className="text-sm text-gray-700 mb-3 line-clamp-2">{product.description}</p>
//                   <div className="flex justify-between items-center mb-3">
//                     {/* ✅ PRICE FORMATTED */}
//                     <span className="text-lg font-bold text-amber-700">
//                       {Number(product.price).toLocaleString('ru-RU')} So'm
//                     </span>
//                     <span className={`text-sm text-center px-2 py-1 rounded ${product.quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                       {product.quantity > 0 ? 'Sotuvda Mavjud' : 'Sotuvda Mavjud Emas'}
//                     </span>
//                   </div>
//                   <Button className="w-full bg-amber-600 hover:bg-amber-700">
//                     <a href={`/product/${product.id}`}>Mahsulot Haqida...</a>
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
}),
"[project]/app/catalog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/catalog/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4c161694._.js.map