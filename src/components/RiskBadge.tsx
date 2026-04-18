import React from "react"

type Props = {
  score: number
}

const getRisk = (score: number) => {
  if (score <= 40) return { label: "LOW", color: "#16a34a" }
  if (score <= 70) return { label: "MEDIUM", color: "#f59e0b" }
  return { label: "HIGH", color: "#dc2626" }
}

const RiskBadge: React.FC<Props> = ({ score }) => {
  const risk = getRisk(score)

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 999,
        backgroundColor: risk.color,
        color: "white",
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {risk.label} ({score})
    </div>
  )
}

export default RiskBadge