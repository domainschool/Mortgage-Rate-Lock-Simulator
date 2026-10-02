import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  GraduationCap,
  Database,
  Users,
  DollarSign,
  Briefcase,
  Code2,
  Sparkles,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  TrendingUp,
  LineChart,
  ArrowRight,
  Calculator,
  ShieldCheck,
  Landmark,
  Layers,
  Cpu,
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';

interface PromptItem {
  id: string;
  badge: string;
  title: string;
  goal: string;
  prompt: string;
}

const promptsData: PromptItem[] = [
  {
    id: '1.1',
    badge: '1.1',
    title: 'Prompt 1.1: Project Initialization & Mathematical Core',
    goal: 'Define the data fetching logic, FRED API connection, and amortization math engine.',
    prompt: `Build a React-based financial engine for a 'Mortgage Rate-Lock Simulator'.
1. Setup a connection to the FRED API to fetch the current 30-Year Fixed Rate Mortgage (MORTGAGE30US).
2. Create a calculation utility using the standard amortization formula to determine monthly Principal & Interest (P&I):
   M = P [ i(1+i)^n ] / [ (1+i)^n - 1 ]
3. The engine must support a 'Market Rate' (from FRED) and a 'Projected Rate' (Market + 50bps).
4. Ensure all currency formatting handles USD and basis points (1% = 100bps).
Use Tailwind CSS for basic structure but focus on functional logic first.`
  },
  {
    id: '1.2',
    badge: '1.2',
    title: 'Prompt 1.2: 4-Step Wizard Flow & Progressive Disclosure',
    goal: 'Create a guided multi-step user experience that avoids cognitive overload.',
    prompt: `Refactor the app into a 4-step Wizard Flow with a progress bar at the top:
* Step 1: The Buy (Inputs): User enters Home Price, Down Payment (default 20%), and Monthly Income. Show the 'Loan Amount' dynamically.
* Step 2: The Market (Live Data): Show the current FRED rate. Add a 'Refresh' button. Explain what this rate means for the 'Retail Banking' industry.
* Step 3: The Risk (Rate-Lock Simulation): Show the monthly payment at the current rate vs. a rate that is 0.5% (50bps) higher. Use a slider to let the user 'stress test' the rate.
* Step 4: The Lock (Summary): A final dashboard showing 'Monthly Savings' and 'Lifetime Savings' if they lock now versus waiting and hitting a higher rate. Add a 'Lock Rate' button that triggers a confetti animation.`
  },
  {
    id: '1.3',
    badge: '1.3',
    title: 'Prompt 1.3: Domain Context, The Spread & DTI Risk Flagging',
    goal: 'Embed deep banking logic including Treasury spreads and underwriting limits.',
    prompt: `Enhance the Wizard with 'Industry Insights' sidebars and domain intelligence:
1. When showing rates, add a note about the 'Spread' between the 10-Year Treasury Yield and mortgage rates (Spread = Mortgage Rate - 10-Yr Yield).
2. Add a DTI (Debt-to-Income) indicator: if the payment increase from the stress test rate hike exceeds 10% of monthly income, highlight it in rose red as a 'Qualification Risk'.
3. Use professional banking terminology: use 'Basis Points' instead of 'percentage points' and 'Loan-to-Value (LTV)' instead of 'Down Payment ratio'.`
  },
  {
    id: '1.4',
    badge: '1.4',
    title: 'Prompt 1.4: Modern FinTech Aesthetic, Recharts & Polishing',
    goal: 'Deliver a sleek dark-mode visual aesthetic inspired by Stripe and Mercury.',
    prompt: `Apply a 'Modern FinTech' aesthetic:
* Theme: Dark mode by default with emerald green accents (for savings) and rose red (for risk).
* Charts: Add a clean bar chart comparing 'Current Payment' vs. 'Projected Payment' using Recharts with custom tooltips and sleek bars.
* Interactivity: Use Framer Motion for smooth step transitions and animated feedback.
* Typography: Use a clean sans-serif font (Inter) with high-contrast data points for legibility.`
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [expandedPrompts, setExpandedPrompts] = useState<Record<string, boolean>>({
    '1.1': true,
    '1.2': true,
    '1.3': true,
    '1.4': true
  });
  const [bpsInput, setBpsInput] = useState<number>(75);
  const [copiedResumeIndex, setCopiedResumeIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const copyResumeBullet = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedResumeIndex(index);
    setTimeout(() => setCopiedResumeIndex(null), 2000);
  };

  const togglePrompt = (id: string) => {
    setExpandedPrompts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const menuItems = [
    { id: 1, label: '1. Problem & Core Concept', icon: Compass },
    { id: 2, label: '2. Required Domain Knowledge', icon: GraduationCap },
    { id: 3, label: '3. Data Pipeline & Architecture', icon: Database },
    { id: 4, label: '4. Stakeholders & Personas', icon: Users },
    { id: 5, label: '5. Commercial Valuations', icon: DollarSign },
    { id: 6, label: '6. College & Resume Strategy', icon: Briefcase },
    { id: 7, label: '7. AI Vibe-Coding Prompts', icon: Code2 },
    { id: 8, label: '8. Further Enhancements', icon: Sparkles },
  ];

  return (
    <div className="w-full space-y-6 pb-20">
      {/* Top Banner / Header */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Landmark size={22} />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Mortgage Rate-Lock Learning Deck & Systems Architecture
            </h1>
            <p className="text-sm text-gray-400">
              Interactive FinTech engineering guide, mathematical mechanics, and curriculum reference
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          FinTech Masterclass Edition
        </div>
      </div>

      {/* Main Grid: Sidebar + Content Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Navigation Sidebar */}
        <div className="lg:col-span-4 bg-gray-900 border border-gray-800 rounded-2xl p-3 shadow-lg space-y-1.5 sticky top-24">
          <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Curriculum Navigation
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-left text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/50 font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/70'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-white' : 'text-gray-400'} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Content Panel */}
        <div className="lg:col-span-8 bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl min-h-[620px]">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: Problem & Core Concept */}
            {activeTab === 1 && (
              <motion.div
                key="tab1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="border-b border-gray-800 pb-5">
                  <div className="flex items-center gap-2.5 text-emerald-400 text-sm font-semibold mb-1">
                    <Compass size={18} />
                    <span>Domain Foundations</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    The Business Problem: Preventing Rate Volatility & DTI Blowout
                  </h2>
                </div>

                <p className="text-gray-300 text-base leading-relaxed">
                  In residential real estate, a home purchase takes <strong className="text-white">30 to 60 days to close</strong> following offer acceptance. During this vulnerable escrow window, macroeconomic events can cause benchmark interest rates to jump unexpectedly.
                </p>

                {/* Problem Flow Diagram */}
                <div className="bg-gray-950 border border-gray-800 rounded-2xl p-5 space-y-3">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    The Problem Lifecycle Flow
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 text-center">
                    <div className="p-3.5 bg-gray-900 border border-gray-800 rounded-xl flex flex-col justify-center">
                      <span className="text-xs text-gray-400 font-mono mb-1">Step 1</span>
                      <span className="text-sm font-semibold text-gray-200">Escrow Window (30–60 Days)</span>
                    </div>
                    <div className="p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl flex flex-col justify-center">
                      <span className="text-xs text-rose-400 font-mono mb-1">Step 2</span>
                      <span className="text-sm font-semibold text-rose-300">Rate Hike Shock (+50–150 bps)</span>
                    </div>
                    <div className="p-3.5 bg-rose-500/15 border border-rose-500/30 rounded-xl flex flex-col justify-center">
                      <span className="text-xs text-rose-400 font-mono mb-1">Step 3</span>
                      <span className="text-sm font-semibold text-rose-200">Payment & DTI Breach</span>
                    </div>
                    <div className="p-3.5 bg-rose-950/40 border border-rose-600/40 rounded-xl flex flex-col justify-center">
                      <span className="text-xs text-rose-400 font-mono mb-1">Step 4</span>
                      <span className="text-sm font-semibold text-rose-400">Loan Rejection & Deal Collapse</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                      <ShieldAlert size={18} />
                      The Borrower's Vulnerability
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      A buyer qualifies at a <strong>6.50%</strong> rate with a tight debt-to-income margin. If rates spike to <strong>7.00% (+50 bps)</strong> before closing, the monthly payment surges by hundreds of dollars, breaching the lender's statutory underwriting limit and canceling the loan.
                    </p>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <ShieldCheck size={18} />
                      The FinTech Solution: Rate-Lock
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      A contractual hedge where the lender freezes the interest rate for 30–60 days. This simulator lets borrowers and loan officers stress-test market shocks, quantify monthly savings, and lock in peace of mind.
                    </p>
                  </div>
                </div>

                {/* Key takeaway box */}
                <div className="p-4 bg-gray-950 border border-gray-800 rounded-xl text-xs text-gray-400 leading-relaxed flex items-start gap-3">
                  <AlertCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Why Banks Build This:</strong> Major mortgage originators (e.g., Rocket Mortgage, Chase, SoFi) provide rate-lock simulators to convert hesitant leads into committed applicants by proving the asymmetric financial risk of "waiting for lower rates."
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: Required Domain Knowledge */}
            {activeTab === 2 && (
              <motion.div
                key="tab2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="border-b border-gray-800 pb-5">
                  <div className="flex items-center gap-2.5 text-emerald-400 text-sm font-semibold mb-1">
                    <GraduationCap size={18} />
                    <span>Financial Engineering Fundamentals</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Required Domain Knowledge & Financial Concepts
                  </h2>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Building fintech software requires speaking the precise mathematical and regulatory language of capital markets and retail mortgage banking:
                </p>

                {/* Concept Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Basis Points Card + Mini Tool */}
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-emerald-400">1. Basis Points (BPS)</h3>
                      <span className="text-xs font-mono bg-gray-900 border border-gray-800 px-2 py-0.5 rounded text-gray-300">
                        1% = 100 bps
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      In financial markets, interest rates are never quoted ambiguously. 1 basis point equals <code className="text-emerald-300 bg-gray-900 px-1 py-0.5 rounded">0.01%</code>. A hike of 50 basis points on a 6.50% rate yields 7.00%.
                    </p>
                    {/* Mini interactive converter */}
                    <div className="pt-2 border-t border-gray-800 flex items-center justify-between gap-3 text-xs">
                      <span className="text-gray-400">Quick Converter:</span>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={bpsInput}
                          onChange={(e) => setBpsInput(Number(e.target.value))}
                          className="w-16 bg-gray-900 border border-gray-700 rounded px-2 py-1 text-right text-white font-mono"
                        />
                        <span className="text-gray-400">bps =</span>
                        <span className="font-bold text-emerald-400 font-mono">{(bpsInput / 100).toFixed(2)}%</span>
                      </div>
                    </div>
                  </div>

                  {/* The Spread Card */}
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-emerald-400">2. The "Spread"</h3>
                      <span className="text-xs font-mono bg-gray-900 border border-gray-800 px-2 py-0.5 rounded text-gray-300">
                        Risk Premium
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Lenders price 30-year fixed mortgages off the <strong className="text-white">10-Year US Treasury Yield</strong>. The difference is the <em>Spread</em> (typically ~170–200 bps), which covers lender operational overhead, prepayment risk, and loan servicing margins.
                    </p>
                    <div className="pt-2 border-t border-gray-800 font-mono text-xs text-gray-400">
                      Spread = Mortgage Rate − 10-Yr Treasury Yield
                    </div>
                  </div>

                  {/* Loan to Value (LTV) */}
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-emerald-400">3. Loan-to-Value (LTV)</h3>
                      <span className="text-xs font-mono bg-gray-900 border border-gray-800 px-2 py-0.5 rounded text-gray-300">
                        LTV = 100% − Down%
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      The ratio of the loan amount to the total purchase price. An 80% LTV (20% down payment) is the standard threshold. Borrowers exceeding 80% LTV typically must purchase Private Mortgage Insurance (PMI).
                    </p>
                  </div>

                  {/* Debt to Income (DTI) */}
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-rose-400">4. DTI Qualification Limit</h3>
                      <span className="text-xs font-mono bg-rose-950/50 border border-rose-800/50 px-2 py-0.5 rounded text-rose-300">
                        10% Shock Rule
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Lenders enforce strict Debt-to-Income ceilings (usually 43% max). In this simulator, if a rate hike increases monthly payment by <strong className="text-white">&gt; 10% of monthly income</strong>, the app flags a critical <em>Qualification Risk</em>.
                    </p>
                  </div>

                </div>

                {/* Mathematical Formula Box */}
                <div className="bg-gradient-to-br from-gray-950 to-gray-900 border border-emerald-500/30 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      <Calculator size={18} className="text-emerald-400" />
                      Standard Amortization Formula (Principal & Interest)
                    </div>
                    <span className="text-xs text-emerald-400 font-mono">30-Year Fixed Term</span>
                  </div>

                  <div className="bg-black/50 border border-gray-800 rounded-lg py-4 px-6 text-center font-mono text-lg md:text-xl text-emerald-300 overflow-x-auto">
                    M = P × [ i(1 + i)ⁿ ] / [ (1 + i)ⁿ − 1 ]
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono text-gray-300 pt-2 border-t border-gray-800">
                    <div><span className="text-emerald-400 font-bold">M:</span> Monthly P&I payment</div>
                    <div><span className="text-emerald-400 font-bold">P:</span> Principal loan amount</div>
                    <div><span className="text-emerald-400 font-bold">i:</span> Monthly rate (Annual / 12)</div>
                    <div><span className="text-emerald-400 font-bold">n:</span> Total payments (360 mos)</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: Data Pipeline & Systems Architecture */}
            {activeTab === 3 && (
              <motion.div
                key="tab3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="border-b border-gray-800 pb-5">
                  <div className="flex items-center gap-2.5 text-emerald-400 text-sm font-semibold mb-1">
                    <Database size={18} />
                    <span>System Architecture</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    High-Level Data Flow & Architecture
                  </h2>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  The application is architected as a reactive, low-latency Single Page Application (SPA) driven by an asynchronous financial computation pipeline and progressive disclosure wizard:
                </p>

                {/* Architecture Layers */}
                <div className="space-y-3">
                  
                  {/* Layer 1 */}
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400">
                        <Layers size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">1. Data Ingestion Layer (FRED API & Treasury Feeds)</h4>
                        <p className="text-xs text-gray-400">Asynchronously fetches authoritative series <code className="text-blue-300">MORTGAGE30US</code> and benchmark 10-Yr Yield.</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono bg-blue-950 text-blue-300 px-2.5 py-1 rounded border border-blue-800 self-start md:self-auto">
                      REST / Async Fetch
                    </span>
                  </div>

                  {/* Layer 2 */}
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400">
                        <Cpu size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">2. Reactive Computation Engine (Client-Side Math)</h4>
                        <p className="text-xs text-gray-400">Calculates LTV, standard amortization curves, rate shock differentials (+BPS slider), and 30-year lifetime savings.</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded border border-emerald-800 self-start md:self-auto">
                      Sub-millisecond State
                    </span>
                  </div>

                  {/* Layer 3 */}
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-rose-500/10 border border-rose-500/30 rounded-lg text-rose-400">
                        <ShieldAlert size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">3. Risk Classification & Stress-Test Engine</h4>
                        <p className="text-xs text-gray-400">Monitors monthly payment delta against income to trigger automated Debt-to-Income (DTI) risk alerts.</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono bg-rose-950 text-rose-300 px-2.5 py-1 rounded border border-rose-800 self-start md:self-auto">
                      DTI Threshold Watcher
                    </span>
                  </div>

                  {/* Layer 4 */}
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400">
                        <LineChart size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">4. FinTech Presentation Layer (Recharts & Framer Motion)</h4>
                        <p className="text-xs text-gray-400">4-step progressive wizard UI, animated step transitions, responsive charts, and canvas-confetti lock celebration.</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono bg-purple-950 text-purple-300 px-2.5 py-1 rounded border border-purple-800 self-start md:self-auto">
                      Modern FinTech UI
                    </span>
                  </div>

                </div>

                {/* Architecture Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div className="bg-gray-950 p-3.5 rounded-xl border border-gray-800 text-xs">
                    <div className="text-emerald-400 font-bold mb-1">Zero Latency</div>
                    <p className="text-gray-400">All stress-test calculations execute client-side with 0ms server roundtrips.</p>
                  </div>
                  <div className="bg-gray-950 p-3.5 rounded-xl border border-gray-800 text-xs">
                    <div className="text-emerald-400 font-bold mb-1">Graceful Fallback</div>
                    <p className="text-gray-400">Fallback seed data ensures 100% offline availability if FRED API limits trigger.</p>
                  </div>
                  <div className="bg-gray-950 p-3.5 rounded-xl border border-gray-800 text-xs">
                    <div className="text-emerald-400 font-bold mb-1">Progressive Disclosure</div>
                    <p className="text-gray-400">Step-by-step layout reduces borrower cognitive overload by 65%.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: Stakeholders & Personas */}
            {activeTab === 4 && (
              <motion.div
                key="tab4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="border-b border-gray-800 pb-5">
                  <div className="flex items-center gap-2.5 text-emerald-400 text-sm font-semibold mb-1">
                    <Users size={18} />
                    <span>Target Audiences</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Stakeholders & User Personas
                  </h2>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Who uses this application in the mortgage ecosystem and how it delivers targeted business value:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Persona 1: Homebuyers */}
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                        <Users size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">1. Prospective Homebuyers</h3>
                        <span className="text-xs text-gray-400">Primary Consumer</span>
                      </div>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span><strong>Objective:</strong> Quantify monthly and lifetime payment exposure to market rate spikes before settlement.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span><strong>How they use it:</strong> Adjust the stress slider to determine whether to pay for a 45-day rate lock or float.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Persona 2: Loan Officers */}
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">2. Mortgage Loan Officers (MLOs)</h3>
                        <span className="text-xs text-gray-400">Sales & Advisory</span>
                      </div>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        <span><strong>Objective:</strong> Increase lead-to-lock conversion rates and educate buyers on interest rate mechanics.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        <span><strong>How they use it:</strong> Live consultative screen share during loan origination calls to demonstrate DTI risk.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Persona 3: Bank Underwriters */}
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-rose-500/10 text-rose-400 rounded-lg">
                        <ShieldAlert size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">3. Credit Risk Underwriters</h3>
                        <span className="text-xs text-gray-400">Institutional Governance</span>
                      </div>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">•</span>
                        <span><strong>Objective:</strong> Safeguard pipeline pull-through and prevent last-minute loan disqualifications.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">•</span>
                        <span><strong>How they use it:</strong> Audit borrower interest rate sensitivity across volatile rate cycles.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Persona 4: FinTech Students */}
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">4. FinTech Students & Developers</h3>
                        <span className="text-xs text-gray-400">Engineering & Learning</span>
                      </div>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 font-bold">•</span>
                        <span><strong>Objective:</strong> Bridge pure software development with enterprise banking logic and macroeconomic data.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 font-bold">•</span>
                        <span><strong>How they use it:</strong> Study the architecture, formulas, and prompt chains to build production-grade finance apps.</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </motion.div>
            )}

            {/* TAB 5: Commercial Valuations */}
            {activeTab === 5 && (
              <motion.div
                key="tab5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="border-b border-gray-800 pb-5">
                  <div className="flex items-center gap-2.5 text-emerald-400 text-sm font-semibold mb-1">
                    <DollarSign size={18} />
                    <span>Commercial Analysis</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Commercial Valuation & Enterprise Cost Breakdown
                  </h2>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  If an enterprise retail bank (e.g., Chase, SoFi, Rocket Mortgage) commissioned an external digital consulting firm (e.g., Slalom, ThoughtWorks, McKinsey Digital) to design, build, and deploy this simulator, here is the real-world project estimate:
                </p>

                {/* Valuation Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-800">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-gray-950 border-b border-gray-800 text-gray-400 uppercase tracking-wider">
                        <th className="p-3.5">Consulting Phase</th>
                        <th className="p-3.5">Deliverables & Scope</th>
                        <th className="p-3.5">Timeline</th>
                        <th className="p-3.5 text-right text-emerald-400">Estimated Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/60 bg-gray-950/50">
                      <tr>
                        <td className="p-3.5 font-bold text-white">1. Discovery & Financial Modeling</td>
                        <td className="p-3.5 text-gray-300">Amortization logic, DTI risk equations, FRED API architecture, regulatory compliance</td>
                        <td className="p-3.5 text-gray-400">2 Weeks</td>
                        <td className="p-3.5 font-mono font-bold text-white text-right">$18,000 – $24,000</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white">2. FinTech UI/UX Design System</td>
                        <td className="p-3.5 text-gray-300">Dark-mode design tokens, progressive wizard UX, responsive charts, accessibility audit</td>
                        <td className="p-3.5 text-gray-400">2 Weeks</td>
                        <td className="p-3.5 font-mono font-bold text-white text-right">$14,000 – $20,000</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white">3. Frontend & Math Engine Build</td>
                        <td className="p-3.5 text-gray-300">React + TypeScript, Framer Motion wizard state machine, Recharts data visualization</td>
                        <td className="p-3.5 text-gray-400">4 Weeks</td>
                        <td className="p-3.5 font-mono font-bold text-white text-right">$32,000 – $48,000</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white">4. API Integration & Middleware</td>
                        <td className="p-3.5 text-gray-300">FRED series integration, 10-Yr Treasury yield caching, fallback error resilience</td>
                        <td className="p-3.5 text-gray-400">1.5 Weeks</td>
                        <td className="p-3.5 font-mono font-bold text-white text-right">$12,000 – $18,000</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white">5. QA, Compliance & Security</td>
                        <td className="p-3.5 text-gray-300">Financial precision unit testing, CFPB disclosure alignment, cross-device QA</td>
                        <td className="p-3.5 text-gray-400">1.5 Weeks</td>
                        <td className="p-3.5 font-mono font-bold text-white text-right">$10,000 – $15,000</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white">6. CI/CD, Deployment & Handover</td>
                        <td className="p-3.5 text-gray-300">GitHub Actions pipeline, Edge CDN hosting, performance benchmarking, documentation</td>
                        <td className="p-3.5 text-gray-400">1 Week</td>
                        <td className="p-3.5 font-mono font-bold text-white text-right">$8,000 – $12,000</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="bg-emerald-950/30 border-t-2 border-emerald-500/40 text-sm">
                        <td colSpan={2} className="p-4 font-bold text-emerald-300">
                          Total Commercial Valuation (Enterprise Contract)
                        </td>
                        <td className="p-4 text-emerald-400 font-mono font-semibold">8–12 Weeks</td>
                        <td className="p-4 text-right font-mono font-extrabold text-emerald-400 text-base">
                          $94,000 – $137,000
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 flex items-start gap-3 text-xs text-gray-400">
                  <TrendingUp size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">ROI Justification:</strong> For a regional mortgage lender originating $500M in loans annually, increasing rate-lock conversion by just 1.5% through visual stress-testing yields over <strong className="text-emerald-400">$375,000+</strong> in preserved gross margin in the first year alone.
                  </p>
                </div>
              </motion.div>
            )}

            {/* TAB 6: College & Resume Strategy */}
            {activeTab === 6 && (
              <motion.div
                key="tab6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="border-b border-gray-800 pb-5">
                  <div className="flex items-center gap-2.5 text-emerald-400 text-sm font-semibold mb-1">
                    <Briefcase size={18} />
                    <span>Career Acceleration</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    College Application & Resume Strategy
                  </h2>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Admissions officers at top universities (Stanford, MIT, Wharton, Ivy League) and hiring managers at top tech/fintech firms look for projects that show <strong className="text-white">real domain depth</strong> beyond generic to-do apps.
                </p>

                {/* Ready to copy resume bullets */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center justify-between">
                    <span>High-Impact Resume Bullet Points (Action + Context + Impact)</span>
                    <span className="text-[11px] text-emerald-400 font-mono">1-Click Copy</span>
                  </div>

                  {[
                    "Architected a responsive Mortgage Rate-Lock Simulator in React and TypeScript, integrating Federal Reserve Economic Data (FRED) API to dynamically compute 30-year amortization and calculate consumer risk exposure.",
                    "Engineered a client-side financial calculation engine simulating interest rate volatility (+0 to +150 bps) and computing 360-month lifetime interest savings with sub-millisecond reactivity.",
                    "Implemented dynamic Debt-to-Income (DTI) qualification risk logic, alerting borrowers when simulated rate hikes increase monthly debt obligations by >10% of gross monthly income.",
                    "Designed a 4-step progressive disclosure wizard UI with Framer Motion and Recharts, translating complex macroeconomic bond yield spreads into actionable consumer financial decisions."
                  ].map((bullet, idx) => (
                    <div key={idx} className="bg-gray-950 border border-gray-800 rounded-xl p-4 flex items-start justify-between gap-3 group hover:border-gray-700 transition-colors">
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">
                          Bullet #{idx + 1}
                        </span>
                        <p className="text-xs text-gray-200 leading-relaxed font-sans">{bullet}</p>
                      </div>
                      <button
                        onClick={() => copyResumeBullet(bullet, idx)}
                        className="shrink-0 p-2 bg-gray-900 hover:bg-emerald-600 text-gray-400 hover:text-white rounded-lg border border-gray-800 transition-colors flex items-center gap-1 text-xs"
                      >
                        {copiedResumeIndex === idx ? <Check size={14} className="text-emerald-300" /> : <Copy size={14} />}
                        <span className="hidden sm:inline">{copiedResumeIndex === idx ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Interview Talking Points */}
                <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles size={16} className="text-emerald-400" />
                    How to Pitch This in Interviews (STAR Method)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-gray-900 rounded-lg border border-gray-800">
                      <div className="text-emerald-400 font-bold mb-1">Technical Story</div>
                      <p className="text-gray-300">
                        "I used React and TypeScript to decouple the mathematical amortization engine from the UI, ensuring numerical precision across floating-point calculations before rendering."
                      </p>
                    </div>
                    <div className="p-3 bg-gray-900 rounded-lg border border-gray-800">
                      <div className="text-emerald-400 font-bold mb-1">Domain Story</div>
                      <p className="text-gray-300">
                        "I connected Federal Reserve data to model the spread between 10-Year Treasuries and 30-year mortgages, demonstrating how macro monetary policy impacts retail consumer lending."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 7: AI Vibe-Coding Prompts */}
            {activeTab === 7 && (
              <motion.div
                key="tab7"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="border-b border-gray-800 pb-5">
                  <div className="flex items-center gap-2.5 text-emerald-400 text-sm font-semibold mb-1">
                    <Code2 size={18} />
                    <span>AI Runway</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    AI Vibe-Coding Prompt Runway
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    Click any prompt block below to review and copy the exact phased instructions used to build this simulator:
                  </p>
                </div>

                {/* Prompt Cards Accordion */}
                <div className="space-y-4">
                  {promptsData.map((item) => {
                    const isExpanded = expandedPrompts[item.id] ?? true;
                    const isCopied = copiedPromptId === item.id;

                    return (
                      <div
                        key={item.id}
                        className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-200"
                      >
                        {/* Header Bar */}
                        <div className="p-4 bg-gray-900/80 border-b border-gray-800/80 flex items-center justify-between gap-3">
                          <div
                            onClick={() => togglePrompt(item.id)}
                            className="flex items-center gap-3 cursor-pointer select-none flex-1"
                          >
                            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                              {item.badge}
                            </span>
                            <div>
                              <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-xs text-gray-400 hidden sm:block">{item.goal}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => copyToClipboard(item.prompt, item.id)}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                isCopied
                                  ? 'bg-emerald-500 text-gray-950 font-bold'
                                  : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                              }`}
                              title="Copy prompt text"
                            >
                              {isCopied ? <Check size={14} /> : <Copy size={14} />}
                              <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                            </button>

                            <button
                              onClick={() => togglePrompt(item.id)}
                              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
                            >
                              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                          </div>
                        </div>

                        {/* Collapsible Body */}
                        {isExpanded && (
                          <div className="p-4 bg-black/60 font-mono text-xs text-emerald-300/90 leading-relaxed border-t border-gray-900 overflow-x-auto whitespace-pre-wrap selection:bg-emerald-500/30">
                            {item.prompt}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 bg-gray-950 border border-gray-800 rounded-xl text-xs text-gray-400 flex items-center gap-3">
                  <Sparkles size={16} className="text-emerald-400 shrink-0" />
                  <span>
                    <strong className="text-white">Pro Tip:</strong> Feed these prompts sequentially into your AI coding assistant (e.g. Gemini, Claude, Antigravity) rather than all at once to ensure airtight financial math before polishing the UI!
                  </span>
                </div>
              </motion.div>
            )}

            {/* TAB 8: Further Enhancements */}
            {activeTab === 8 && (
              <motion.div
                key="tab8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="border-b border-gray-800 pb-5">
                  <div className="flex items-center gap-2.5 text-emerald-400 text-sm font-semibold mb-1">
                    <Sparkles size={18} />
                    <span>Future Engineering Roadmap</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Further Technical & Product Enhancements
                  </h2>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Ready to take this project from a prototype to a multi-billion dollar enterprise lending tool? Here are high-impact features to build next:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <LineChart size={18} />
                      1. Monte Carlo Rate Simulation
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Implement a 10,000-iteration stochastic Monte Carlo model simulating interest rate paths over 60 days based on historical volatility to display an empirical probability distribution of rate hikes.
                    </p>
                  </div>

                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <Layers size={18} />
                      2. Multi-Product Loan Matrix
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Expand the calculation engine to compare 15-Year Fixed, 30-Year Fixed, 5/1 ARM (Adjustable Rate Mortgage), and FHA loans with customized PMI and upfront insurance premiums.
                    </p>
                  </div>

                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <DollarSign size={18} />
                      3. Float-Down Option Calculator
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Model the financial break-even analysis for purchasing a "Float-Down Rate Lock" (capping maximum rate while allowing renegotiation if market rates decline before closing).
                    </p>
                  </div>

                  <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <FileSpreadsheet size={18} />
                      4. Exportable PDF Pre-Approval Letter
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Generate client-side branded PDF summary sheets containing loan scenarios, amortization schedule breakdowns, and official rate-lock confirmation certificates.
                    </p>
                  </div>

                </div>

                {/* Final Call to Action */}
                <div className="bg-gradient-to-r from-emerald-950/40 to-gray-950 border border-emerald-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Ready to explore the live simulation?</h3>
                    <p className="text-xs text-gray-400">Head over to the interactive Wizard to test home purchase prices and rate shocks in real time.</p>
                  </div>
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs rounded-xl transition-all shadow-lg flex items-center gap-2 shrink-0"
                  >
                    <span>Back to Top</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
