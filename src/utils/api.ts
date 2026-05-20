// Simulating FRED API for MORTGAGE30US
// In a production environment, this would hit a backend proxy that holds the FRED API Key.
export async function fetchCurrentMortgageRate(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Returning a realistic current 30-Year Fixed Rate Mortgage value
      resolve(6.87); 
    }, 1200);
  });
}

// Simulating 10-Year Treasury Yield for 'The Spread' calculation
export async function fetchTreasuryYield(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(4.25);
    }, 1200);
  });
}
