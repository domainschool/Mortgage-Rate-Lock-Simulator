Vibe coding a **Mortgage Rate-Lock Simulator** is a brilliant way to bridge the gap between "just another React app" and a project that speaks the language of high-finance and retail banking.

Here is the breakdown of the industry logic, domain knowledge, and interview value for your project.

---

## 1. The Core Problem: Interest Rate Volatility
In real estate, a home purchase takes 30–60 days to close. During that window, market rates can fluctuate wildly.
* **The Pain Point:** A buyer qualifies for a home at a **6.5%** interest rate. Two weeks later, the rate jumps to **7.0%**. Suddenly, their monthly payment increases by hundreds of dollars, potentially disqualifying them from the loan because their **Debt-to-Income (DTI)** ratio is now too high.
* **The Solution:** The "Rate-Lock." This simulator helps users visualize the "cost of waiting" and the protection a rate lock provides.

---

## 2. Why This is an Industry "Classic"
If you look at the tech stacks of companies like **Rocket Mortgage, SoFi, or JPMorgan Chase**, they all use similar internal tools.
* **The "Spread" Logic:** Retail banks don't set rates in a vacuum. They track the **10-Year Treasury Yield**. The difference between the Treasury yield and the mortgage rate offered to consumers is the **Spread**.
* **Monetary Policy Impact:** When the Federal Reserve raises the "Fed Funds Rate," it ripples through the economy. While it doesn't move mortgage rates 1:1, it changes the cost of capital for banks, which they pass on to consumers.



---

## 3. Domain Knowledge: What You’ll Be Using
To build this, you aren't just coding; you're acting as a **FinTech Engineer**. You will use:
* **Basis Points (BPS):** You’ll learn that 1% = 100 bps. In banking, we don't say "the rate went up by point five"; we say "it jumped 50 bips."
* **Amortization Math:** You will implement the standard mortgage payment formula:
    $$M = P \frac{i(1+i)^n}{(1+i)^n - 1}$$
    * $M$ = Monthly payment
    * $P$ = Principal loan amount
    * $i$ = Monthly interest rate (annual rate / 12)
    * $n$ = Number of months (360 for a 30-year loan)
* **FRED API Integration:** You’ll handle real-world economic data using the series ID `MORTGAGE30US`.

---

## 4. Why This Wins in Interviews
This project is "Interview Gold" because it allows you to pivot from technical talk to business impact:

| Feature | What to say in an interview |
| :--- | :--- |
| **API Integration** | "I integrated the **FRED API** to ensure the app used live, authoritative federal data rather than hardcoded values." |
| **State Management** | "I managed complex financial state to show real-time 'what-if' scenarios, like how a **50bps** hike affects a 30-year term." |
| **User Experience** | "I designed it to help non-experts understand **DTI risk**. If the payment turns red, it signifies the user might no longer qualify for the loan." |
| **Domain Awareness** | "I chose this project to understand how **Monetary Policy** (Fed decisions) impacts **Retail Banking** products." |

---
