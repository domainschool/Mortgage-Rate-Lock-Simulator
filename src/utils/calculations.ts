export function calculateMonthlyPayment(principal: number, annualRate: number, years: number = 30): number {
  if (principal <= 0 || annualRate <= 0) return 0;
  
  const monthlyRate = (annualRate / 100) / 12;
  const numPayments = years * 12;
  
  // M = P [ i(1 + i)^n ] / [ (1 + i)^n - 1 ]
  const payment = principal * 
    ((monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
    (Math.pow(1 + monthlyRate, numPayments) - 1));
    
  return payment;
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatBPS(rateDiff: number): string {
  const bps = Math.round(rateDiff * 100);
  return `${bps > 0 ? '+' : ''}${bps} bps`;
}
