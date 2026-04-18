# aml-case-review
![CI](https://github.com/Demontrick/aml-case-review/actions/workflows/ci.yml/badge.svg)
> Compliance officers shouldn't need to dig for risk. It should be the first thing they see.

A React + TypeScript AML Case Review Dashboard that surfaces 
high-risk cases first, lets compliance officers action them 
instantly, and updates the UI without waiting on the network.

Built to reflect the real frontend problem in AML platforms — 
when hundreds of alerts land daily, the UI is the last line 
between a compliance officer and a missed criminal.

---

## The Problem

AML platforms generate hundreds of alerts daily. Compliance 
officers review each one — wrong decision means regulatory 
risk. If the UI is slow, cluttered, or unclear, officers make 
worse decisions under pressure.

## The Solution

A fast, focused case review queue — highest risk cases surface 
first, flag reasons visible immediately, one-click decisions 
with optimistic UI updates. No waiting. No digging.

---

## Stack

- React 19 + TypeScript — strict typing throughout
- Vite — instant dev server, fast builds
- TanStack React Query — data fetching + optimistic mutations
- Vitest + Testing Library — 7 passing component tests
- GitHub Actions — CI on every push

---

## How It Works

Cases load sorted by risk score — highest danger reviewed first.
Each case shows customer, amount, country, flag reason, and a 
risk badge (LOW / MEDIUM / HIGH) at a glance.

Compliance officer clicks Approve or Reject — UI updates 
instantly via optimistic mutation, no network wait. If the 
mutation fails, state rolls back automatically.

Filter by status (All / Pending / Approved / Rejected) to 
manage queue efficiently.

---

## Risk Classification

| Score | Level | Color |
|-------|-------|-------|
| 0–40 | LOW | Green |
| 41–70 | MEDIUM | Amber |
| 71–100 | HIGH | Red |

---

## Flag Reasons

Real AML flag types used in mock data:
- Sanctioned Country
- Politically Exposed Person
- Unusual Transaction Volume
- High Risk Jurisdiction

---

## Key Engineering Decisions

**Optimistic UI** — status updates instantly on click. React 
Query rolls back automatically on failure. Compliance officers 
never wait on the network for a decision to register.

**Risk-first sorting** — cases always render highest risk_score 
first. Officers never accidentally review a low-risk case before 
a high-risk one.

**Strict TypeScript** — AMLCase interface enforces shape across 
components, hooks, and mock data. No runtime surprises.

**Component isolation** — RiskBadge and CaseCard are fully 
self-contained and independently testable. 7 Vitest tests 
covering rendering, interactions, and edge cases.

---

## Running Locally

```bash
npm install
npm run dev
```

Opens on `http://localhost:5173`

---

## Running Tests

```bash
npx vitest run
```

7 tests, 2 test files, all passing.

---

## CI

GitHub Actions runs the full Vitest suite on every push.
No Docker, no containers — Node 20, npm ci, tests run.
