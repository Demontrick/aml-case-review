import React from "react"
import type { AMLCase } from "../types/case"
import RiskBadge from "./RiskBadge"

type Props = {
  case_: AMLCase
  onApprove: (id: string) => void
  onReject: (id: string) => void
}

const CaseCard: React.FC<Props> = ({ case_, onApprove, onReject }) => {
  const isPending = case_.status === "pending"

  return (
    <div style={{
      border: "1px solid #E5E7EB",
      borderRadius: 10,
      padding: "16px 20px",
      background: "white",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>{case_.customer}</span>
          <span style={{ marginLeft: 10, fontSize: 12, color: "#6B7280" }}>{case_.id}</span>
        </div>
        <RiskBadge score={case_.risk_score} />
      </div>

      <div style={{ display: "flex", gap: 20, fontSize: 13, color: "#374151" }}>
        <span><b>Amount:</b> {case_.amount.toLocaleString()} {case_.currency}</span>
        <span><b>Country:</b> {case_.country}</span>
        <span><b>Flag:</b> {case_.flag_reason}</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 12, color: "#6B7280" }}>
          {new Date(case_.created_at).toLocaleDateString()}
        </span>

        {isPending ? (
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => onApprove(case_.id)}
              style={{
                padding: "6px 14px", borderRadius: 6, border: "none",
                background: "#16a34a", color: "white", cursor: "pointer",
                fontSize: 13, fontWeight: 600
              }}
            >
              Approve
            </button>
            <button
              onClick={() => onReject(case_.id)}
              style={{
                padding: "6px 14px", borderRadius: 6, border: "none",
                background: "#dc2626", color: "white", cursor: "pointer",
                fontSize: 13, fontWeight: 600
              }}
            >
              Reject
            </button>
          </div>
        ) : (
          <span style={{
            padding: "4px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600,
            background: case_.status === "approved" ? "#dcfce7" : "#fee2e2",
            color: case_.status === "approved" ? "#16a34a" : "#dc2626",
            textTransform: "capitalize"
          }}>
            {case_.status}
          </span>
        )}
      </div>
    </div>
  )
}

export default CaseCard