// export interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   quantity: number;
//   description: string;
//   images: string[];
//   createdAt: Date;
// }

// export interface Order {
//   id: string;
//   clientName: string;
//   clientPhone: string;
//   clientAddress: string;
//   clientEmail: string;
//   products: OrderItem[];
//   totalAmount: number;
//   agreedAmount: number;
//   creditMonths: number;
//   monthlyPayment: number;
//   paymentStatus: 'fully-paid' | 'partial' | 'pending';
//   paidAmount: number;
//   dueDate: Date;
//   createdAt: Date;
//   payments: Payment[];
// }

// export interface OrderItem {
//   productId: string;
//   productName: string;
//   quantity: number;
//   price: number;
// }

// export interface Payment {
//   amount: number;
//   date: Date;
//   month: number;
// }

// export interface Analytics {
//   date: string;
//   revenue: number;
//   orders: number;
//   units: number;
// }

// export const FURNITURE_CATEGORIES = [
//   // 'Барчаси',
//   'Spalniy Komplekt',
//   'Shikaflar',
//   'Trimolar',
//   'Sandiklar',
//   'Stol - Stullar',
//   'Tapchanlar',
//   'Servant va Panellar',
//   'Prixojkalar',
//   'Oshxona Mebellari',
//   'Bolalar Mebellari'
// ];




















export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  description: string;
  images: string[];
  createdAt: Date;
  status?: string; // YANGI QO‘SHILDI
}

export interface Order {
  id: string;
  clientName: string;
  clientPhone: string;
  clientAddress: string;
  clientEmail: string;
  products: OrderItem[];
  totalAmount: number;
  agreedAmount: number;
  creditMonths: number;
  monthlyPayment: number;
  paymentStatus: 'fully-paid' | 'partial' | 'pending';
  paidAmount: number;
  dueDate: Date;
  createdAt: Date;
  firstPaymentDate?: Date; // YANGI
  payments: Payment[];
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
}

export interface Payment {
  amount: number;
  date: Date;
  monthIndex: number; // YANGI: oldingi 'month' o‘rniga
}

export interface Analytics {
  date: string;
  revenue: number;
  orders: number;
  units: number;
}

export const FURNITURE_CATEGORIES = [
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