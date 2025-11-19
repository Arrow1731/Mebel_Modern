'use client';

import { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Product, FURNITURE_CATEGORIES } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Edit2, Plus } from 'lucide-react';
import Image from 'next/image';
import LoginModal from '@/components/login-modal';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    category: FURNITURE_CATEGORIES[0],
    price: 0,
    quantity: 0,
    description: ''
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);

    if (!loggedIn) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
      const prods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
      setProducts(prods);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const images = editingId 
        ? products.find(p => p.id === editingId)?.images || (imageUrl ? [imageUrl] : [])
        : imageUrl ? [imageUrl] : [];

      if (editingId) {
        await updateDoc(doc(db, 'products', editingId), {
          ...formData,
          price: parseFloat(formData.price.toString()),
          quantity: parseInt(formData.quantity.toString()),
          images: images
        });
        setEditingId(null);
      } else {
        await addDoc(collection(db, 'products'), {
          ...formData,
          price: parseFloat(formData.price.toString()),
          quantity: parseInt(formData.quantity.toString()),
          images: images,
          createdAt: new Date()
        });
      }
      setFormData({ name: '', category: FURNITURE_CATEGORIES[0], price: 0, quantity: 0, description: '' });
      setImageUrl('');
      setShowForm(false);
    } catch (error) {
      console.error('Mahsulotni saqlashda hatolik yuzberdi:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Siz rozimisiz?')) {
      try {
        await deleteDoc(doc(db, 'products', id));
      } catch (error) {
        console.error("Mahsulotni o'chirishda xatollik yuzberdi:", error);
      }
    }
  };

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      description: product.description
    });
    setImageUrl(product.images?.[0] || '');
    setEditingId(product.id);
    setShowForm(true);
  };

  if (!isLoggedIn) {
    return <LoginModal onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-amber-900">Mahsulotlar Boshqaruv Paneli</h1>
          <Button
            onClick={() => { setShowForm(true); setEditingId(null); setFormData({ name: '', category: FURNITURE_CATEGORIES[0], price: 0, quantity: 0, description: '' }); setImageUrl(''); }}
            className="bg-amber-600 hover:bg-amber-700"
          >
            <Plus className="mr-2" /> Mahsulot Qo'shish
          </Button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Mahsulotni Nomi yoki Kategoriyasi bo'yich izlash..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl max-h-96 overflow-y-auto">
              <CardHeader>
                <CardTitle>{editingId ? 'Tahrirlash' : "Qo'shish"} Mahsulot</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nomi</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Kategoriyasi</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg"
                    >
                      {FURNITURE_CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Narxi (So'm)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Soni</label>
                      <input
                        type="number"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Surat Manzili (URL)</label>
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    {imageUrl && (
                      <div className="mt-2 relative w-32 h-32">
                        <Image src={imageUrl || "/placeholder.svg"} alt="Preview" fill className="object-cover rounded" />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Mahsulot Haqida Ma'lumot</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg"
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button type="button" variant="outline" onClick={() => setShowForm(false)} className="flex-1">
                      Bekor Qilish
                    </Button>
                    <Button type="submit" className="flex-1 bg-amber-600 hover:bg-amber-700">
                      Mahsulotni Saqlash
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Products Table */}
        {loading ? (
          <div>Yuklanmoqda...</div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Mahsulot Nomi</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Kategoriyasi</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Narxi (So'm)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Soni</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Holati </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(product => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{product.name}</td>
                    <td className="px-4 py-3">{product.category}</td>
                    <td className="px-4 py-3 font-semibold text-amber-700">{product.price} So'm</td>
                    <td className="px-4 py-3">{product.quantity}</td>
                    <td className="px-4 py-3 flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(product)}
                        className="text-blue-600"
                      >
                        <Edit2 size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
