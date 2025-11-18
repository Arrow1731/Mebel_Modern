import { Order } from './types';

export function generateExcelFile(data: any[], fileName: string, headers: string[]) {
  // Create CSV content with proper formatting
  let csv = headers.join(',') + '\n';
  
  data.forEach(row => {
    const values = headers.map(header => {
      const value = row[header.toLowerCase().replace(/\s+/g, '')] || '';
      // Escape quotes and wrap in quotes if contains comma
      const escaped = String(value).replace(/"/g, '""');
      return escaped.includes(',') ? `"${escaped}"` : escaped;
    });
    csv += values.join(',') + '\n';
  });

  // Create blob and download
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = `${fileName}_${new Date().toISOString().split('T')[0]}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export function generateMonthlyAnalyticsReport(orders: Order[]) {
  const monthlyData = orders
    .filter(o => o.creditMonths === 1 && o.paymentStatus === 'fully-paid')
    .map(o => ({
      'Имя клиента': o.clientName,
      'Телефон': o.clientPhone,
      'Адрес': o.clientAddress,
      'Сумма': o.totalAmount,
      'Дата платежа': new Date(o.createdAt).toLocaleDateString('uz-UZ'),
      'Статус': 'Оплачено'
    }));

  const headers = ['Имя клиента', 'Телефон', 'Адрес', 'Сумма', 'Дата платежа', 'Статус'];
  return { data: monthlyData, headers };
}

export function generateCampaignAnalyticsReport(orders: Order[]) {
  const campaignData = orders.map(o => ({
    'Дата': new Date(o.createdAt).toLocaleDateString('uz-UZ'),
    'Кредит месяцев': o.creditMonths,
    'Сумма': o.totalAmount,
    'Статус': o.paymentStatus,
    'Доход': o.totalAmount
  }));

  const headers = ['Дата', 'Кредит месяцев', 'Сумма', 'Статус', 'Доход'];
  return { data: campaignData, headers };
}
