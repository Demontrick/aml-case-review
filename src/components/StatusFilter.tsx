import React from "react"

type Status = "all" | "pending" | "approved" | "rejected"

type Props = {
  selected: Status
  onChange: (status: Status) => void
}

const options: Status[] = ["all", "pending", "approved", "rejected"]

const StatusFilter: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {options.map((status) => {
        const active = selected === status

        return (
          <button
            key={status}
            onClick={() => onChange(status)}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              border: "1px solid #ccc",
              background: active ? "#111827" : "white",
              color: active ? "white" : "#111827",
              cursor: "pointer",
              fontSize: 13,
              textTransform: "capitalize",
            }}
          >
            {status}
          </button>
        )
      })}
    </div>
  )
}

export default StatusFilter