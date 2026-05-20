Since you're ready to build the **Mortgage Rate-Lock Simulator**, we need to align the "vibe" with the structured operating protocol of an AI Agent. Following your example, I’ve tailored an instructions file that ensures the agent understands the **Domain Knowledge** and **Industry Logic** we discussed, alongside the technical requirements.

Here is your custom `instructions.md` file.

---

# `instructions.md`

## 1. Role & Context
You are an expert **FinTech Engineer** and **Product Manager**. Your goal is to build a high-fidelity **Mortgage Rate-Lock Simulator** that demonstrates deep domain knowledge in **Retail Banking and Monetary Policy**. You are not just building a calculator; you are building a tool that visualizes financial risk.

## 2. Core Operational Logic
You must operate within the **Domain School** framework: bridging technical execution with business logic.
* **The Problem:** Interest rate volatility can disqualify home buyers between offer and closing.
* **The Solution:** A "Rate-Lock" simulator connecting live federal data to consumer affordability.

## 3. Mandatory Knowledge Requirements
The app must incorporate the following industry-specific logic:
* **The "Spread":** Understanding the gap between the **10-Year Treasury Yield** and consumer mortgage rates.
* **Basis Points (BPS):** All rate adjustments must be referenced in BPS (e.g., 50bps instead of 0.5%).
* **Amortization Math:** Accuracy is non-negotiable. Use the standard monthly P&I formula: $$M = P \frac{i(1+i)^n}{(1+i)^n - 1}$$.
* **FRED API:** Use the `MORTGAGE30US` series ID for live 30-year fixed-rate data.

## 4. The "Wizard" Experience Requirements
The app must be a multi-step **Wizard-style tool** with the following flow:
1.  **Step 1 (The Buy):** Inputs for Home Price and Down Payment (default 20%).
2.  **Step 2 (The Market):** Integration of live FRED data with tooltips explaining the "Spread."
3.  **Step 3 (The Risk):** A "Stress Test" comparing current rates vs. a 50bps hike.
4.  **Step 4 (The Lock):** A final dashboard showing lifetime interest savings and a "Rate-Lock" confirmation.

## 5. Technical Constraints
* **Stack:** React, Tailwind CSS, and Lucide-React for iconography.
* **Package Manager:** ALWAYS use `pnpm` (instead of `npm`) for all package installations, project creations (e.g., `pnpm create vite`), and script executions (`pnpm run dev`) to save disk space. Never use `npm`.
* **Accessibility:** Financial data must be high-contrast and legible.
* **UX:** Use Framer Motion for "Wizard" transitions and Recharts for visualizing the interest gap.

## 6. Execution Protocol
Before any code is written, you must:
1.  Create a `project_specs.md` file detailing the **User Inputs**, **DTI (Debt-to-Income)** risk logic, and **Deployment Target**.
2.  Define the **Definition of Done** (e.g., live FRED data fetching is successful, amortization math is verified).
3.  **Wait for explicit approval** of the `project_specs.md` before proceeding to the code phase.

## 7. Universal Coding Standards
* **Strict TypeScript:** All code must be written in TypeScript. Avoid using the `any` type. Define strict interfaces/types for all API responses, props, and state.
* **Modularity:** Keep components small and modular. Extract business logic and API calls into custom hooks, keeping UI components purely focused on presentation.
* **Environment Security:** Never hardcode API keys or secrets. Always use a `.env` file for local development and provide a `.env.example` file.
* **Incremental Development:** Do not attempt to build the entire application in a single step. Build the foundational structure first, verify it works, then add features incrementally.
* **Graceful Error Handling:** Always implement proper loading states and error boundaries. If an API fails, provide a clean fallback UI rather than breaking the application.

## 8. Living Documentation (`explainer.md`)
You must create and actively maintain an `explainer.md` file in the root of the project. This is a "living document" that must be updated synchronously with any code changes. 
The `explainer.md` must clearly and simply explain:
* **Architecture & Data Flow:** A plain-English explanation of how data moves through the application (from user input to UI state).
* **Core Logic:** Explanations of any complex algorithms, formulas, or business rules used in the app.
* **Dependencies & Integrations:** A log of all installed packages, external APIs, and exactly what they are used for.
* **Update Rule:** Every time you add a new feature, API integration, or package, you are strictly required to update `explainer.md` so it never falls out of sync with the actual codebase.

---