import { useEffect, useState } from "react"

export default function SystemBoot({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const steps = [
      "Initializing AML detection engine...",
      "Loading compliance rules...",
      "Connecting to transaction stream...",
      "Securing environment...",
      "System ready.",
    ]

    let i = 0
    const interval = setInterval(() => {
      setStep(i)
      i++
      if (i === steps.length) {
        clearInterval(interval)
        setTimeout(onFinish, 500)
      }
    }, 600)

    return () => clearInterval(interval)
  }, [onFinish])

  const messages = [
    "Initializing AML detection engine...",
    "Loading compliance rules...",
    "Connecting to transaction stream...",
    "Securing environment...",
    "System ready.",
  ]

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#05070f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#e5e7eb",
        fontFamily: "monospace",
      }}
    >
      <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 20 }}>
        AML CASE REVIEW SYSTEM
      </div>

      <div style={{ fontSize: 13 }}>
        {messages[step]}
      </div>

      <div
        style={{
          marginTop: 20,
          width: 200,
          height: 2,
          background: "#111827",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${((step + 1) / messages.length) * 100}%`,
            background: "#3b82f6",
            transition: "width 0.4s ease",
          }}
        />
      </div>
    </div>
  )
}