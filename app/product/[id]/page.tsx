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
  const [customerPhone2, setCustomerPhone2] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [manualProductSum, setManualProductSum] = useState<number | ''>('');
  const [initialPayment, setInitialPayment] = useState<number>(0);
  const [orderStatus, setOrderStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // DEFAULT DATE (today)
  const [nextPaymentDateInput, setNextPaymentDateInput] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

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

  // PRICE CALCS
  const fixedSubtotal = product.price * quantity;
  const agreedSum = manualProductSum !== '' ? manualProductSum : fixedSubtotal;
  const remainingAmount = Math.max(0, agreedSum - initialPayment);
  const creditFee = creditMonths > 1 ? remainingAmount * 0.05 : 0;
  const totalToFinance = remainingAmount + creditFee;
  const monthlyPayment = creditMonths > 1 ? totalToFinance / creditMonths : totalToFinance;

  const handleCheckout = async () => {
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
      const startDate = new Date(nextPaymentDateInput);

      // oxirgi to‘lov sanasi
      const finalDueDate = new Date(startDate);
      finalDueDate.setMonth(finalDueDate.getMonth() + creditMonths - 1);

      await addDoc(collection(db, 'orders'), {
        clientName: customerName,
        clientPhone: customerPhone,
        clientPhone2: customerPhone2,
        clientAddress: customerAddress,
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
        paidAmount: initialPayment,
        paymentStatus: creditMonths > 1 ? 'pending' : 'fully-paid',
        firstPaymentDate: startDate,
        dueDate: finalDueDate,
        payments: []
      });

      setOrderStatus('success');
      setTimeout(() => {
        setShowCheckout(false);
        setOrderStatus('idle');
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

          {/* IMAGES */}
          <div className="space-y-4">
            <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              {product.images?.length > 0 ? (
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  Mahsulot Surati Mavjud Emas!
                </div>
              )}
            </div>
          </div>

          {/* INFORMATION */}
          <div className="space-y-[45px]">
            <div>
              <h1 className="text-3xl text-amber-900 mb-2">Mahsulot Nomi: <b>{product.name}</b></h1>
              <p className="text-gray-600 text-lg mb-4">Kategoriya: <b>{product.category}</b></p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl text-amber-700">
                  Narxi: <b>{Number(product.price).toLocaleString('ru-RU')} So'm</b>
                </span>
                <span className={`text-sm px-3 py-1 rounded-full ${product.quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  <b>{product.quantity > 0 ? 'Bor' : 'Yo‘q'}</b>
                </span>
              </div>
            </div>

            {/* QUANTITY */}
            <div className="space-y-2">
              <label className="block text-[30px] font-medium text-gray-700">Soni:</label>
              <div className="flex items-center gap-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 bg-gray-200">−</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.min(product.quantity, Math.max(1, parseInt(e.target.value))))}
                  className="max-w-[40px] w-full text-center border border-gray-300 rounded-sm"
                />
                <button onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))} className="px-4 py-2 bg-gray-200">+</button>
              </div>
            </div>

            {/* CHECKOUT */}
            <Button
              onClick={() => setShowCheckout(true)}
              disabled={product.quantity === 0}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
            >
              <ShoppingCart className="mr-2" /> Sotish
            </Button>
          </div>
        </div>

        {/* CHECKOUT MODAL */}
        {showCheckout && (
          <div className="fixed inset-0 bg-[#808080]/80 flex justify-center z-80 p-5">
            <Card className="w-full max-w-[1000px] max-h-[1500px] overflow-y-auto">
              <CardHeader>
                <CardTitle className='text-center text-[45px]'>Buyurtmani Rasmiylashtirish</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">

                {/* CUSTOMER INFO */}
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Mijoz Maʼlumotlari</h3>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Ismi</label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>

                    {/* REQUIRED PHONE */}
                    <div>
                      <label className="block text-sm font-medium mb-1">Telefon Raqami <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => {
                          let val = e.target.value.replace(/\D/g, ''); // numbers only
                          if (val.startsWith('998')) val = val.slice(3); // remove duplicate country code
                          val = val.slice(0, 9); // max 9 digits after +998
                          setCustomerPhone('+998' + val);
                        }}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="+998901234567"
                        required
                      />
                    </div>

                    {/* OPTIONAL PHONE */}
                    <div>
                      <label className="block text-sm font-medium mb-1">Qo‘shimcha Telefon</label>
                      <input
                        type="tel"
                        value={customerPhone2}
                        onChange={(e) => {
                          let val = e.target.value.replace(/\D/g, '');
                          val = val.slice(0, 9); // max 9 digits after +998
                          setCustomerPhone2(val ? '+998' + val : '');
                        }}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="+998901234567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Manzil</label>
                      <input
                        type="text"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>


                {/* PRICE & CREDIT */}
                <div className="space-y-3 border-b pb-4">
                  <label className="block text-sm font-medium">Kelishilgan narx</label>
                  <input
                    type="number"
                    value={manualProductSum}
                    onChange={(e) => setManualProductSum(e.target.value ? parseFloat(e.target.value) : '')}
                    className="w-full px-3 py-2 border rounded-lg"
                  />

                  <label className="block text-sm font-medium">Oldindan To‘lov</label>
                  <input
                    type="number"
                    value={initialPayment}
                    onChange={(e) => setInitialPayment(Math.min(Number(e.target.value), agreedSum))}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                {/* CREDIT OPTIONS */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium">Kredit muddati (oy)</label>

                  <select
                    value={creditMonths}
                    onChange={(e) => setCreditMonths(Number(e.target.value))}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <option value="1">To‘liq narx</option>
                    {Array.from({ length: 12 }, (_, i) => i + 2).map((m) => (
                      <option key={m} value={m}>{m} oy</option>
                    ))}
                  </select>

                  {creditMonths > 1 && (
                    <>
                      <p className="text-sm text-amber-700">Kredit komissiyasi (5%): {creditFee.toLocaleString()} so‘m</p>

                      <label className="block text-sm font-medium">Birinchi to‘lov sanasi</label>
                      <input
                        type="date"
                        value={nextPaymentDateInput}
                        onChange={(e) => setNextPaymentDateInput(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />

                      {/* PAYMENT SCHEDULE */}
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-2">To‘lov jadvali:</h4>

                        <ul className="space-y-1">
                          {Array.from({ length: creditMonths }).map((_, i) => {
                            const start = new Date(nextPaymentDateInput);
                            start.setMonth(start.getMonth() + i);

                            return (
                              <li key={i} className="text-sm flex justify-between">
                                <span>{start.toLocaleDateString()} — {monthlyPayment.toLocaleString()} so‘m</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  )}
                </div>

                {/* SUMMARY */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Qolgan to‘lov:</span>
                    <span>{remainingAmount.toLocaleString()} so‘m</span>
                  </div>

                  {creditMonths > 1 && (
                    <div className="flex justify-between">
                      <span>Oylik to‘lov:</span>
                      <span>{monthlyPayment.toLocaleString()} so‘m</span>
                    </div>
                  )}

                  {creditMonths > 1 && (
                    <div className="flex justify-between">
                      <span>Birinchi to‘lov sanasi:</span>
                      <span>{new Date(nextPaymentDateInput).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">
                  <Button onClick={() => setShowCheckout(false)} variant="outline" className="flex-1">
                    Bekor qilish
                  </Button>

                  <Button onClick={handleCheckout} className="flex-1 bg-amber-600 hover:bg-amber-700">
                    {orderStatus === 'loading' && 'Yuklanmoqda...'}
                    {orderStatus === 'success' && 'Yaratildi!'}
                    {orderStatus === 'error' && 'Xatolik!'}
                    {orderStatus === 'idle' && 'Buyurtma berish'}
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