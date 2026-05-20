import { motion } from 'framer-motion';
import {
  Building2,
  LineChart,
  TrendingUp,
  ShieldAlert,
  Database,
  Briefcase
} from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-16 pb-20">

      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden border border-gray-800 bg-gray-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/80 to-transparent z-10" />
        <img
          src="./hero.png"
          alt="Financial Data Visualization"
          className="w-full h-[400px] object-cover object-right opacity-60"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-16 w-full md:w-2/3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            The Logic Behind <br />
            <span className="text-emerald-400">Rate-Locking</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-xl"
          >
            Bridging the gap between a standard React application and high-finance domain knowledge. Understanding interest rate volatility and retail banking mechanics.
          </motion.p>
        </div>
      </section>

      {/* Core Problem */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <ShieldAlert className="text-rose-500" size={32} />
            The Core Problem
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            In real estate, a home purchase takes 30–60 days to close. During that window, market rates can fluctuate wildly, exposing buyers to significant financial risk.
          </p>
          <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-6">
            <h3 className="text-rose-400 font-bold mb-2">The Pain Point</h3>
            <p className="text-gray-300">
              A buyer qualifies for a home at a <strong>6.5%</strong> interest rate. Two weeks later, the rate jumps to <strong>7.0%</strong>. Their monthly payment increases by hundreds of dollars, potentially disqualifying them because their <strong>Debt-to-Income (DTI)</strong> ratio is now too high.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />
          <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
              <TrendingUp size={20} /> The Solution
            </h3>
            <p className="text-white text-xl leading-relaxed">
              The <strong>Rate-Lock</strong>. This simulator helps users visualize the "cost of waiting" and the protection a rate lock provides.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Logic */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3 text-center justify-center">
          <Building2 className="text-emerald-500" size={32} />
          Why This is an Industry "Classic"
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto text-lg mb-12">
          If you look at the tech stacks of companies like Rocket Mortgage, SoFi, or JPMorgan Chase, they all use similar internal tools.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
          >
            <LineChart className="text-emerald-400 mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-3">The "Spread" Logic</h3>
            <p className="text-gray-400 leading-relaxed">
              Retail banks don't set rates in a vacuum. They track the <strong>10-Year Treasury Yield</strong>. The difference between the Treasury yield and the mortgage rate offered to consumers is the <strong>Spread</strong>.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
          >
            <Database className="text-emerald-400 mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-3">Monetary Policy Impact</h3>
            <p className="text-gray-400 leading-relaxed">
              When the Federal Reserve raises the "Fed Funds Rate," it ripples through the economy. While it doesn't move mortgage rates 1:1, it changes the cost of capital for banks, which they pass on to consumers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Domain Knowledge & Math */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-8">Domain Knowledge</h2>
        <p className="text-gray-400 mb-8 text-lg">
          To build this, you aren't just coding; you're acting as a <strong>FinTech Engineer</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gray-950/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-emerald-400 font-bold mb-2">Basis Points (BPS)</h3>
              <p className="text-gray-300">
                You'll learn that <code className="bg-gray-800 px-2 py-1 rounded text-emerald-300">1% = 100 bps</code>. In banking, we don't say "the rate went up by point five"; we say "it jumped 50 bips."
              </p>
            </div>
            <div className="bg-gray-950/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-emerald-400 font-bold mb-2">FRED API Integration</h3>
              <p className="text-gray-300">
                Handling real-world economic data using the series ID <code className="bg-gray-800 px-2 py-1 rounded text-emerald-300">MORTGAGE30US</code>.
              </p>
            </div>
          </div>

          <div className="bg-gray-950 border border-emerald-500/20 rounded-xl p-8 flex flex-col justify-center">
            <h3 className="text-gray-400 font-medium mb-4 uppercase tracking-wider text-sm">Amortization Math</h3>
            <div className="text-center py-6 bg-black/30 rounded-lg mb-6 border border-gray-800 font-mono text-2xl text-white">
              M = P <span className="text-emerald-400">×</span> [ i(1+i)ⁿ ] <span className="text-emerald-400">/</span> [ (1+i)ⁿ - 1 ]
            </div>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              <li><strong className="text-white">M</strong> = Monthly payment</li>
              <li><strong className="text-white">P</strong> = Principal loan amount</li>
              <li><strong className="text-white">i</strong> = Monthly interest rate (annual / 12)</li>
              <li><strong className="text-white">n</strong> = Number of months (360)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interview Value */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Briefcase className="text-emerald-500" size={32} />
          Why This Wins in Interviews
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 border-b border-gray-800">
                <th className="p-4 text-emerald-400 font-medium">Feature</th>
                <th className="p-4 text-gray-300 font-medium">What to say in an interview</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 bg-gray-950">
              <tr className="hover:bg-gray-900/50 transition-colors">
                <td className="p-4 font-medium text-white">API Integration</td>
                <td className="p-4 text-gray-400">"I integrated the <strong>FRED API</strong> to ensure the app used live, authoritative federal data rather than hardcoded values."</td>
              </tr>
              <tr className="hover:bg-gray-900/50 transition-colors">
                <td className="p-4 font-medium text-white">State Management</td>
                <td className="p-4 text-gray-400">"I managed complex financial state to show real-time 'what-if' scenarios, like how a <strong>50bps</strong> hike affects a 30-year term."</td>
              </tr>
              <tr className="hover:bg-gray-900/50 transition-colors">
                <td className="p-4 font-medium text-white">User Experience</td>
                <td className="p-4 text-gray-400">"I designed it to help non-experts understand <strong>DTI risk</strong>. If the payment turns red, it signifies the user might no longer qualify."</td>
              </tr>
              <tr className="hover:bg-gray-900/50 transition-colors">
                <td className="p-4 font-medium text-white">Domain Awareness</td>
                <td className="p-4 text-gray-400">"I chose this project to understand how <strong>Monetary Policy</strong> (Fed decisions) impacts <strong>Retail Banking</strong> products."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
