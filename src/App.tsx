import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchCurrentMortgageRate, fetchTreasuryYield } from './utils/api';
import { calculateMonthlyPayment, formatCurrency, formatBPS } from './utils/calculations';
import { 
  Home, 
  TrendingUp, 
  AlertTriangle, 
  Lock, 
  RefreshCw, 
  Info,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  DollarSign,
  BookOpen
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import confetti from 'canvas-confetti';
import About from './components/About';

const steps = [
  { id: 1, title: 'The Buy', icon: Home },
  { id: 2, title: 'The Market', icon: TrendingUp },
  { id: 3, title: 'The Risk', icon: AlertTriangle },
  { id: 4, title: 'The Lock', icon: Lock },
];

function Simulator() {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Inputs
  const [homePrice, setHomePrice] = useState(500000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [monthlyIncome, setMonthlyIncome] = useState(8000);
  
  // Market Data
  const [marketRate, setMarketRate] = useState<number | null>(null);
  const [treasuryYield, setTreasuryYield] = useState<number | null>(null);
  const [isLoadingMarket, setIsLoadingMarket] = useState(false);
  
  // Risk Data
  const [stressBps, setStressBps] = useState(50); // 50 bps default hike
  
  // Computed (The Buy)
  const downPaymentAmt = homePrice * (downPaymentPct / 100);
  const loanAmount = homePrice - downPaymentAmt;
  const ltv = 100 - downPaymentPct;

  // Computed (The Market / The Risk)
  const baseRate = marketRate || 6.87; // fallback
  const projectedRate = baseRate + (stressBps / 100);
  const spread = marketRate && treasuryYield ? marketRate - treasuryYield : 0;
  
  const currentPayment = calculateMonthlyPayment(loanAmount, baseRate);
  const projectedPayment = calculateMonthlyPayment(loanAmount, projectedRate);
  
  const paymentIncrease = projectedPayment - currentPayment;
  const isQualificationRisk = paymentIncrease > (monthlyIncome * 0.10); // Risk if increase > 10% of monthly income
  
  // Computed (The Lock)
  const lifetimeCurrent = currentPayment * 360 - loanAmount;
  const lifetimeProjected = projectedPayment * 360 - loanAmount;
  const lifetimeSavings = lifetimeProjected - lifetimeCurrent;
  
  const fetchMarketData = async () => {
    setIsLoadingMarket(true);
    try {
      const [rate, yield_] = await Promise.all([
        fetchCurrentMortgageRate(),
        fetchTreasuryYield()
      ]);
      setMarketRate(rate);
      setTreasuryYield(yield_);
    } finally {
      setIsLoadingMarket(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  const handleLock = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#059669', '#34d399']
    });
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <>
      <div className="flex justify-between relative mb-12 mt-8">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 -z-10 -translate-y-1/2 rounded-full" />
        <div 
          className="absolute top-1/2 left-0 h-1 bg-emerald-500 -z-10 -translate-y-1/2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
        
        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isPast = currentStep > step.id;
          return (
            <div key={step.id} className="flex flex-col items-center gap-2 bg-gray-950 px-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                isActive ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400' : 
                isPast ? 'border-emerald-500 bg-emerald-500 text-white' : 
                'border-gray-700 bg-gray-900 text-gray-500'
              }`}>
                {isPast ? <CheckCircle2 size={20} /> : <step.icon size={20} />}
              </div>
              <span className={`text-sm font-medium ${isActive ? 'text-emerald-400' : isPast ? 'text-gray-300' : 'text-gray-600'}`}>
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">The Buy</h2>
                    <p className="text-gray-400">Establish your baseline financials and property details.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Home Price (USD)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                          type="number" 
                          value={homePrice}
                          onChange={(e) => setHomePrice(Number(e.target.value))}
                          className="w-full bg-gray-950 border border-gray-800 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Down Payment (%)</label>
                        <input 
                          type="number" 
                          value={downPaymentPct}
                          onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                          className="w-full bg-gray-950 border border-gray-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-emerald-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">LTV Ratio</label>
                        <div className="w-full bg-gray-950/50 border border-gray-800 rounded-lg py-3 px-4 text-gray-400 cursor-not-allowed">
                          {ltv.toFixed(1)}%
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Monthly Income (USD)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                          type="number" 
                          value={monthlyIncome}
                          onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                          className="w-full bg-gray-950 border border-gray-800 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-emerald-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 flex flex-col justify-center">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Calculated Loan Amount</h3>
                  <div className="text-5xl font-bold text-white mb-6">
                    {formatCurrency(loanAmount)}
                  </div>
                  
                  <div className="space-y-3 pt-6 border-t border-gray-800">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Down Payment Amount</span>
                      <span className="text-white font-medium">{formatCurrency(downPaymentAmt)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Monthly Income</span>
                      <span className="text-white font-medium">{formatCurrency(monthlyIncome)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">The Market</h2>
                  <p className="text-gray-400">Live indicators from the Federal Reserve Economic Data (FRED).</p>
                </div>
                <button 
                  onClick={fetchMarketData}
                  disabled={isLoadingMarket}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium text-white transition-colors disabled:opacity-50"
                >
                  <RefreshCw size={16} className={isLoadingMarket ? 'animate-spin' : ''} />
                  Refresh Data
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-950 border border-emerald-500/30 rounded-xl p-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                  <h3 className="text-sm font-medium text-gray-400 mb-2">30-Year Fixed (MORTGAGE30US)</h3>
                  <div className="text-4xl font-bold text-emerald-400">
                    {isLoadingMarket ? '--' : `${baseRate.toFixed(2)}%`}
                  </div>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">10-Year Treasury Yield</h3>
                  <div className="text-4xl font-bold text-white">
                    {isLoadingMarket ? '--' : `${treasuryYield?.toFixed(2)}%`}
                  </div>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">The Spread</h3>
                  <div className="text-4xl font-bold text-white">
                    {isLoadingMarket ? '--' : formatBPS(spread)}
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 flex gap-4">
                <div className="text-emerald-500 mt-1"><Info size={20} /></div>
                <div>
                  <h4 className="text-emerald-400 font-medium mb-1">Industry Insight: The Spread</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Retail banks typically price mortgages at a premium above the 10-Year Treasury yield. Historically, this "spread" averages around 170 basis points (1.7%). When the spread widens, it indicates market volatility or liquidity risks for lenders.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">The Risk</h2>
                <p className="text-gray-400">Stress test your affordability against interest rate hikes.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-4">
                      <label className="text-sm font-medium text-gray-400">Projected Rate Hike (BPS)</label>
                      <span className="text-emerald-400 font-bold">+{stressBps} bps</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="150" 
                      step="10"
                      value={stressBps}
                      onChange={(e) => setStressBps(Number(e.target.value))}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>0 bps</span>
                      <span>+150 bps</span>
                    </div>
                  </div>

                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-gray-400 text-sm">New Interest Rate</h3>
                      <span className="text-xl font-bold text-rose-400">{projectedRate.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                      <h3 className="text-gray-400 text-sm">New Monthly P&I</h3>
                      <span className="text-2xl font-bold text-rose-400">{formatCurrency(projectedPayment)}</span>
                    </div>
                  </div>
                </div>

                <div className={`border rounded-xl p-6 transition-colors duration-300 ${isQualificationRisk ? 'bg-rose-500/10 border-rose-500/30' : 'bg-gray-950 border-gray-800'}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${isQualificationRisk ? 'bg-rose-500/20 text-rose-400' : 'bg-gray-800 text-gray-400'}`}>
                      <AlertTriangle size={24} />
                    </div>
                    <h3 className={`text-lg font-bold ${isQualificationRisk ? 'text-rose-400' : 'text-white'}`}>
                      DTI Risk Assessment
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Payment Increase</span>
                      <span className="text-white font-medium">+{formatCurrency(paymentIncrease)}/mo</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">% of Monthly Income</span>
                      <span className={`font-bold ${isQualificationRisk ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {((paymentIncrease / monthlyIncome) * 100).toFixed(1)}%
                      </span>
                    </div>

                    {isQualificationRisk && (
                      <div className="mt-4 p-4 bg-rose-500/20 border border-rose-500/30 rounded-lg text-rose-300 text-sm leading-relaxed">
                        <strong>Qualification Risk:</strong> The projected rate hike increases your payment by more than 10% of your monthly income. This could push your Debt-to-Income (DTI) ratio beyond acceptable retail banking limits, jeopardizing loan approval.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Lock Your Rate Today</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                  By locking in your rate at <strong>{baseRate.toFixed(2)}%</strong> before the projected {stressBps} bps hike, you protect yourself against significant financial exposure over the life of your loan.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-950 border border-gray-800 rounded-xl p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: 'Current Rate', payment: Math.round(currentPayment) },
                      { name: 'Projected Rate', payment: Math.round(projectedPayment) }
                    ]}>
                      <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val}`} />
                      <Tooltip 
                        cursor={{fill: 'transparent'}}
                        contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#f3f4f6' }}
                        formatter={(value) => [`$${value}`, 'Monthly Payment']}
                      />
                      <Bar dataKey="payment" radius={[4, 4, 0, 0]}>
                        {
                          [0, 1].map((_, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#f43f5e'} />
                          ))
                        }
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-6">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                    <h3 className="text-sm font-medium text-emerald-400 mb-1">Lifetime Interest Savings</h3>
                    <div className="text-5xl font-bold text-emerald-500">
                      {formatCurrency(lifetimeSavings)}
                    </div>
                  </div>

                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-gray-400 text-sm">Monthly Savings</h3>
                      <span className="text-xl font-bold text-emerald-400">{formatCurrency(paymentIncrease)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                      <h3 className="text-gray-400 text-sm">Protected Rate</h3>
                      <span className="text-xl font-bold text-white">{baseRate.toFixed(2)}%</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleLock}
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all flex justify-center items-center gap-2"
                  >
                    <Lock size={20} />
                    Lock Rate Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wizard Controls */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between">
          <button 
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400"
          >
            <ChevronLeft size={18} /> Back
          </button>
          
          {currentStep < steps.length && (
            <button 
              onClick={nextStep}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-gray-950 bg-white hover:bg-gray-200 transition-colors"
            >
              Continue <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [view, setView] = useState<'simulator' | 'about'>('simulator');

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-emerald-500/30">
      
      {/* Navigation Header */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setView('simulator')}
          >
            <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
              <Lock className="text-emerald-500" size={24} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">RateLock<span className="text-gray-500">.sim</span></span>
          </div>

          <div className="flex gap-2 bg-gray-900 p-1 rounded-lg border border-gray-800">
            <button
              onClick={() => setView('simulator')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                view === 'simulator' 
                  ? 'bg-gray-800 text-white shadow-sm' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              Simulator
            </button>
            <button
              onClick={() => setView('about')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                view === 'about' 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              <BookOpen size={16} />
              Industry Context
            </button>
          </div>
        </div>
      </nav>

      <main className="p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          {view === 'simulator' ? <Simulator /> : <About />}
        </div>
      </main>

    </div>
  );
}
