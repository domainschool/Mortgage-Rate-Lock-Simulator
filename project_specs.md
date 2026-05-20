# Project Specifications: Mortgage Rate-Lock Simulator

## 1. Overview
The Mortgage Rate-Lock Simulator is a high-fidelity, wizard-style web application designed to demonstrate the financial risk of interest rate volatility between mortgage offer and closing. It bridges technical execution with deep banking domain knowledge, educating users on concepts like "The Spread", "Basis Points (BPS)", and Amortization.

## 2. User Inputs
* **Home Price:** (Numeric input, USD)
* **Down Payment:** (Numeric input or percentage, defaults to 20%)
* **Monthly Income:** (Numeric input, USD, used for DTI calculations, default e.g. $6,000)
* **Rate Stress Test Slider:** Allows users to simulate rate hikes (e.g., 0 to +100bps).

## 3. Core Features & "Wizard" Flow
The application will use a progressive 4-step wizard interface:

*   **Step 1: The Buy (Inputs)**
    *   Input: Home Price, Down Payment (calculating LTV - Loan-to-Value).
    *   Output: Dynamic "Loan Amount" calculation.
*   **Step 2: The Market (Live Data)**
    *   Fetch live current 30-Year Fixed Rate Mortgage (`MORTGAGE30US`) from the FRED API.
    *   Include a 'Refresh' button.
    *   Provide insights/tooltips on "The Spread" (10-Year Treasury vs. Mortgage rates).
*   **Step 3: The Risk (Rate-Lock Simulation)**
    *   Interactive stress test: Compare monthly payment at the current rate vs. a projected higher rate (defaulting to +50bps).
    *   **DTI (Debt-to-Income) Risk Logic:** Calculate DTI impact. If the payment increase from the stress test exceeds 10% of the sample monthly income (e.g., $6,000), highlight it in red as a 'Qualification Risk'.
*   **Step 4: The Lock (Summary)**
    *   Dashboard displaying Lifetime Interest Savings and Monthly Savings if locked now vs. the higher rate.
    *   Bar chart comparing 'Current Payment' vs. 'Projected Payment'.
    *   "Lock Rate" action with a confirmation animation (e.g., confetti).

## 4. Technical Stack & Deployment Target
*   **Framework:** React / Vite.
*   **Styling:** Tailwind CSS.
*   **Icons & UI:** Lucide-React for iconography, Framer Motion for wizard transitions and number "count-up" animations.
*   **Charts:** Recharts for visualizing the interest gap.
*   **Deployment Target:** Vercel.
*   **Aesthetic:** "Modern FinTech" vibe. Dark mode by default, emerald green accents for savings, rose red for risk. Clean typography (Inter) and high-contrast data points.

## 5. Definition of Done
*   [ ] Multi-step wizard UI (4 steps) is fully functional and responsive.
*   [ ] Live FRED API data fetching for `MORTGAGE30US` is successful.
*   [ ] Amortization math (P&I formula) is mathematically accurate and verified.
*   [ ] DTI Risk Logic correctly identifies and highlights 'Qualification Risk'.
*   [ ] FinTech aesthetic (Dark theme, Framer Motion transitions, Recharts visualizations) is fully implemented.
*   [ ] Financial terminology reflects industry standards (LTV, Basis Points, The Spread).
