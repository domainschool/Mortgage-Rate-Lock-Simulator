To build a **wizard-style** Mortgage Rate-Lock Simulator, you need a structured "Prompt Chain." Instead of asking the AI for the whole app at once, you should feed it prompts in phases. This ensures the business logic (the "domain") is locked in before the UI "vibe" is applied.


### Phase 1: The "Brains" (System Architecture)
**Goal:** Define the data fetching logic and the math engine.

> **Prompt:** > "Build a React-based financial engine for a 'Mortgage Rate-Lock Simulator'. 
> 1. Setup a connection to the **FRED API** to fetch the current 30-Year Fixed Rate Mortgage (`MORTGAGE30US`). 
> 2. Create a calculation utility using the standard amortization formula to determine monthly Principal & Interest (P&I). 
> 3. The engine must support a 'Market Rate' (from FRED) and a 'Projected Rate' (Market + 50bps). 
> 4. Ensure all currency formatting handles USD and basis points (1% = 100bps). 
> Use Tailwind CSS for basic structure but focus on functional logic first."

---

### Phase 2: The "Wizard" (Multi-Step Flow)
**Goal:** Create the progressive disclosure UI.

> **Prompt:** > "Refactor the app into a 4-step Wizard Flow with a progress bar at the top:
> * **Step 1: The Buy (Inputs):** User enters Home Price and Down Payment (default 20%). Show the 'Loan Amount' dynamically.
> * **Step 2: The Market (Live Data):** Show the current FRED rate. Add a 'Refresh' button. Explain what this rate means for the 'Retail Banking' industry.
> * **Step 3: The Risk (Rate-Lock Simulation):** Show the monthly payment at the current rate vs. a rate that is 0.5% (50bps) higher. Use a slider to let the user 'stress test' the rate.
> * **Step 4: The Lock (Summary):** A final dashboard showing 'Monthly Savings' if they lock now versus waiting and hitting a higher rate. Add a 'Lock Rate' button that triggers a confetti animation."

---

### Phase 3: The "Domain Context" (Expert Layer)
**Goal:** Add the educational and industry-specific tooltips.

> **Prompt:** > "Enhance the Wizard with 'Industry Insights' sidebars or tooltips:
> 1. When showing rates, add a note about the **'Spread'** between the 10-Year Treasury and mortgage rates.
> 2. Add a **DTI (Debt-to-Income)** indicator: if the payment increase from the 50bps hike exceeds 10% of a sample $6,000 income, highlight it in red as a 'Qualification Risk'.
> 3. Use professional banking terminology: use 'Basis Points' instead of 'percentage points' and 'Loan-to-Value (LTV)' instead of 'Down Payment ratio'."

---

### Phase 4: The "Vibe" (Polishing)
**Goal:** Make it look like a premium FinTech app (e.g., Mercury or Stripe style).

> **Prompt:** > "Apply a 'Modern FinTech' aesthetic:
> * **Theme:** Dark mode by default with emerald green accents (for savings) and rose red (for risk).
> * **Charts:** Add a simple bar chart comparing 'Current Payment' vs. 'Projected Payment' using Recharts or Framer Motion for smooth transitions.
> * **Interactivity:** Every time the user changes a value in the wizard, the payment should 'count up' or 'count down' visually. 
> * **Typography:** Use a clean sans-serif font (like Inter) with high-contrast data points for legibility."

---
