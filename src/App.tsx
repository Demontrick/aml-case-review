import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CaseQueue from "./components/CaseQueue"

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{
        minHeight: "100vh",
        background: "#F9FAFB",
        padding: "32px 24px",
        fontFamily: "Arial, sans-serif"
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ marginBottom: 28 }}>
            <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#111827" }}>
              AML Case Review
            </h1>
            <p style={{ margin: "6px 0 0", fontSize: 14, color: "#6B7280" }}>
              Cases sorted by risk score — highest priority first
            </p>
          </div>
          <CaseQueue />
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App