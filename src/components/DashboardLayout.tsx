import React from "react"

type Props = {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="dashboard">

      {/* HEADER */}
      <header className="dashboard-header">
        <div>
          <h2 style={{ margin: 0 }}>AML Case Review System</h2>

          <div className="system-status" style={{ marginTop: 6 }}>
            <span className="system-dot" />
            Live monitoring active
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="dashboard-body">

        {/* Sidebar (future: filters, risk breakdown, stats) */}
        <aside className="sidebar">
          <p style={{ color: "#94a3b8", fontSize: 13 }}>
            Filters / Insights Panel
          </p>
        </aside>

        {/* Main content */}
        <main className="main">
          {children}
        </main>

      </div>
    </div>
  )
}