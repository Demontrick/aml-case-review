import React, { useState } from "react"
import { useCases, useUpdateCase } from "../hooks/useCases"
import CaseCard from "./CaseCard"
import StatusFilter from "./StatusFilter"

type Status = "all" | "pending" | "approved" | "rejected"

const CaseQueue: React.FC = () => {
  const [filter, setFilter] = useState<Status>("all")
  const { data: cases, isLoading, isError } = useCases()
  const { mutate: updateCase } = useUpdateCase()

  if (isLoading) return (
    <div style={{ textAlign: "center", padding: 40, color: "#6B7280" }}>
      Loading cases...
    </div>
  )

  if (isError) return (
    <div style={{ textAlign: "center", padding: 40, color: "#dc2626" }}>
      Failed to load cases.
    </div>
  )

  const filtered = (cases ?? [])
    .filter(c => filter === "all" ? true : c.status === filter)
    .sort((a, b) => b.risk_score - a.risk_score)

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, color: "#6B7280" }}>
          {filtered.length} case{filtered.length !== 1 ? "s" : ""}
        </span>
        <StatusFilter selected={filter} onChange={setFilter} />
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: 40, color: "#6B7280" }}>
          No cases found.
        </div>
      ) : (
        filtered.map(c => (
          <CaseCard
            key={c.id}
            case_={c}
            onApprove={(id) => updateCase({ id, status: "approved" })}
            onReject={(id) => updateCase({ id, status: "rejected" })}
          />
        ))
      )}
    </div>
  )
}

export default CaseQueue