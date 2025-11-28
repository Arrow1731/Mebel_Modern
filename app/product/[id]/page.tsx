'use client';

import { useState, useEffect } from 'react';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [creditMonths, setCreditMonths] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [manualProductSum, setManualProductSum] = useState<number | ''>('');
  const [orderStatus, setOrderStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (!productId) return;

    const getProduct = async () => {
      const docSnap = await getDoc(doc(db, 'products', productId));
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() } as Product);
      }
      setLoading(false);
    };

    getProduct();
  }, [productId]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Yuklanmoqda...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center">Mahsulot Topilmadi</div>;

  const fixedSubtotal = product.price * quantity;
  const agreedSum = manualProductSum !== '' ? manualProductSum : fixedSubtotal;
  const creditFee = creditMonths > 1 ? (agreedSum * 0.05) : 0;
  const total = agreedSum + creditFee;
  const monthlyPayment = creditMonths > 1 ? total / creditMonths : total;

  const handleCheckout = async () => {
    if (!customerName || !customerPhone || !customerAddress) {
      alert("Iltimos Bosh Qolgan Kataklarni To'ldiring");
      return;
    }

    setOrderStatus('loading');
    try {
      const dueDate = new Date();
      dueDate.setMonth(dueDate.getMonth() + creditMonths);

      await addDoc(collection(db, 'orders'), {
        clientName: customerName,
        clientPhone: customerPhone,
        clientAddress: customerAddress,
        clientEmail: '',
        products: [{
          productId: product.id,
          productName: product.name,
          quantity: quantity,
          price: agreedSum / quantity  // Store agreed unit price
        }],
        totalAmount: total,
        agreedAmount: agreedSum,  // Store the agreed sum separately
        creditMonths: creditMonths,
        monthlyPayment: monthlyPayment,
        paymentStatus: creditMonths > 1 ? 'pending' : 'fully-paid',
        paidAmount: 0,
        dueDate: dueDate,
        createdAt: new Date(),
        payments: []
      });

      setOrderStatus('success');
      setTimeout(() => {
        setShowCheckout(false);
        setOrderStatus('idle');
        setCustomerName('');
        setCustomerPhone('');
        setCustomerAddress('');
        setManualProductSum('');
      }, 2000);
    } catch (error) {
      console.error('Error creating order:', error);
      setOrderStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-[1600px] mx-auto px-4">
        <h2 className='text-amber-900 font-bold text-[35px]'>Mahsulot Haqida Ma'lumot</h2> <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              {product.images && product.images.length > 0 ? (
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">Mahsulot Surati Mavjud Emas!</div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-[45px]">
            <div>
              <h1 className="text-3xl text-amber-900 mb-2">Mahsulot Nomi: <b>{product.name}</b></h1>
              <p className="text-gray-600 text-lg mb-4">Mahsulot Kategoriyasi: <b>{product.category}</b></p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">Mahsulot Haqida Ma'lumot: <b>{product.description}</b></p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl text-amber-700">
                  Mahsulot Narxi: <b>{Number(product.price).toLocaleString('ru-RU')} So'm</b>
                </span>
                <span className={`text-sm px-3 py-1 rounded-full text-center ${product.quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  <b>{product.quantity > 0 ? 'Sotuvda Mavjud' : 'Sotuvda Mavjud Emas'}</b>
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="block text-[30px] font-medium text-gray-700">Soni:</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.min(product.quantity, Math.max(1, parseInt(e.target.value) || quantity)))}
                  className="max-w-[35px] w-full text-center border border-gray-300 rounded-sm "
                />
                <button
                  onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>

            <Button
              onClick={() => setShowCheckout(true)}
              disabled={product.quantity === 0}
              className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white py-3 text-lg"
            >
              <ShoppingCart className="mr-2" /> Sotish
            </Button>
          </div>
        </div>

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 bg-[#808080] flex justify-center z-50 p-[30px]">
            <Card className="w-full max-w-[1000px] max-h-[900px] overflow-y-auto">
              <CardHeader>
                <CardTitle className='text-center text-[45px]'>Buyurtmani Rasmiylashtirish</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-b pb-[10px]">
                  <h3 className="font-semibold text-gray-900 mb-3">Mijoz Haqida Ma'lumot</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Ismi</label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        placeholder="FIO Mijoz"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Telefon Raqami</label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        placeholder="+998 XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Yashash Manzili</label>
                      <input
                        type="text"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        placeholder="Manzil"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">{product.name}</span>
                    <span className="font-semibold">{fixedSubtotal.toLocaleString()} So'm</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Soni: {quantity}</span>
                    <span>{product.price.toLocaleString()} x {quantity}</span>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <label className="block text-sm font-medium mb-2">Mijoz Bilan Kelishilgan Narx (Majburiy Emas)</label>
                  <input
                    type="number"
                    value={manualProductSum}
                    onChange={(e) => setManualProductSum(e.target.value ? parseFloat(e.target.value) : '')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Mahsulot Asil Narxida Sotilgan Bo'lsa Ochiq Qoldiring"
                  />
                  {/* <p className="text-xs text-gray-500 mt-1">Bu Narx Mahsulotni Kelishilgan Narxi Xisoblanadi</p> */}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Kredit Muddati (Oy):</label>
                  <select
                    value={creditMonths}
                    onChange={(e) => setCreditMonths(parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="1">Kredit To'lovsiz (To'liq Narx)</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                      <option key={m} value={m}>{m} Oylik</option>
                    ))}
                  </select>
                  {creditMonths > 1 && (
                    <p className="text-sm text-amber-700">+5% Komissiya = {creditFee.toLocaleString()} So'm</p>
                  )}
                </div>

                <div className="space-y-1 border-t pt-4">
                  {/* <div className="flex justify-between text-sm">
                    <span>Подитог:</span>
                    <span>{agreedSum.toLocaleString()} сум</span>
                  </div> */}
                  {creditMonths > 1 && (
                    <div className="flex justify-between text-sm text-amber-700">
                      <span>Kredit Komissiyasi (5%):</span>
                      <span>{creditFee.toLocaleString()} So'm</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg text-amber-900 pt-2">
                    <span>Jami:</span>
                    <span>{total.toLocaleString()} So'm</span>
                  </div>
                  {creditMonths > 1 && (
                    <div className="flex justify-between text-sm text-gray-600 pt-2 border-t">
                      <span>Oylik To'lov Summasi:</span>
                      <span>{monthlyPayment.toLocaleString()} So'm</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => setShowCheckout(false)}
                    variant="outline"
                    className="flex-1"
                    disabled={orderStatus === 'loading'}
                  >
                    Bekor Qilish
                  </Button>
                  <Button
                    onClick={handleCheckout}
                    className="flex-1 bg-amber-600 hover:bg-amber-700"
                    disabled={orderStatus === 'loading'}
                  >
                    {orderStatus === 'loading' && 'Yuklanmoqda...'}
                    {orderStatus === 'success' && 'Buyurtma Yaratildi!'}
                    {orderStatus === 'error' && 'Xatolik Yuz Berdi'}
                    {orderStatus === 'idle' && 'Buyurtma Berish'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

      </div>
    </main>
  );
}
