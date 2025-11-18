'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Product } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalProducts: 0, totalValue: 0, lowStock: 0 });

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
      const prods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
      setProducts(prods);
      
      const totalValue = prods.reduce((sum, p) => sum + (p.price * p.quantity), 0);
      const lowStockCount = prods.filter(p => p.quantity < 5).length;
      
      setStats({
        totalProducts: prods.length,
        totalValue,
        lowStock: lowStockCount
      });
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">Склад Мебели</h1>
        <p className="text-gray-600 mb-8">Управляйте вашим инвентарем мебельной фабрики</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-white border-amber-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Всего продуктов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-900">{stats.totalProducts}</div>
            </CardContent>
          </Card>

          <Card className="bg-white border-amber-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Общая стоимость</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-900">{stats.totalValue.toLocaleString()} сум</div>
            </CardContent>
          </Card>

          <Card className="bg-white border-amber-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Низкий запас</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">{stats.lowStock}</div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div>
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Все продукты</h2>
          {loading ? (
            <div className="text-center py-8">Загрузка...</div>
          ) : products.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Нет продуктов. <Link href="/products" className="text-amber-600 hover:underline">Добавить продукт</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.map(product => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition">
                  <div className="relative w-full h-48 bg-gray-200">
                    {product.images && product.images[0] ? (
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">Нет изображения</div>
                    )}
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-amber-900 truncate">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-lg font-bold text-amber-700">{product.price} сум</span>
                      <span className="text-sm bg-amber-100 text-amber-900 px-2 py-1 rounded">
                        {product.quantity} шт
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
