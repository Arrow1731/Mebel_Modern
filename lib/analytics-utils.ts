import { Order, Analytics } from './types';

export const getDailyAnalytics = (orders: Order[], date: Date): Analytics => {
  const dateStr = date.toISOString().split('T')[0];
  const dayOrders = orders.filter(o => new Date(o.createdAt).toISOString().split('T')[0] === dateStr);
  return {
    date: dateStr,
    revenue: dayOrders.reduce((sum, o) => sum + o.totalAmount, 0),
    orders: dayOrders.length,
    units: dayOrders.reduce((sum, o) => sum + o.products.reduce((s, p) => s + p.quantity, 0), 0)
  };
};

export const getMonthlyAnalytics = (orders: Order[], month: number, year: number): Analytics => {
  const monthOrders = orders.filter(o => {
    const date = new Date(o.createdAt);
    return date.getMonth() === month - 1 && date.getFullYear() === year;
  });
  return {
    date: `${year}-${String(month).padStart(2, '0')}`,
    revenue: monthOrders.reduce((sum, o) => sum + o.totalAmount, 0),
    orders: monthOrders.length,
    units: monthOrders.reduce((sum, o) => sum + o.products.reduce((s, p) => s + p.quantity, 0), 0)
  };
};

export const getYearlyAnalytics = (orders: Order[], year: number): Analytics => {
  const yearOrders = orders.filter(o => new Date(o.createdAt).getFullYear() === year);
  return {
    date: String(year),
    revenue: yearOrders.reduce((sum, o) => sum + o.totalAmount, 0),
    orders: yearOrders.length,
    units: yearOrders.reduce((sum, o) => sum + o.products.reduce((s, p) => s + p.quantity, 0), 0)
  };
};
