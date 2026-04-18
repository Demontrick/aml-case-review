import React, { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CaseQueue from "./components/CaseQueue"
import DashboardLayout from "./components/DashboardLayout"
import SystemBoot from "./components/SystemBoot"

const queryClient = new QueryClient()

const App: React.FC = () => {
  const [ready, setReady] = useState(false)

  if (!ready) {
    return <SystemBoot onFinish={() => setReady(true)} />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <DashboardLayout>
        <CaseQueue />
      </DashboardLayout>
    </QueryClientProvider>
  )
}

export default App