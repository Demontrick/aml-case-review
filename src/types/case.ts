export interface AMLCase {
  id: string
  customer: string
  amount: number
  currency: string
  country: string
  risk_score: number
  flag_reason: string
  status: "pending" | "approved" | "rejected"
  created_at: string
}