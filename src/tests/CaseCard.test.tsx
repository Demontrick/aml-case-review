import { render, screen, fireEvent } from "@testing-library/react"
import CaseCard from "../components/CaseCard"
import type { AMLCase } from "../types/case"

const mockCase: AMLCase = {
  id: "C-TEST",
  customer: "Test User",
  amount: 50000,
  currency: "USD",
  country: "Russia",
  risk_score: 85,
  flag_reason: "Sanctioned Country",
  status: "pending",
  created_at: "2026-04-18T10:00:00Z",
}

describe("CaseCard", () => {
  it("renders customer name", () => {
    render(<CaseCard case_={mockCase} onApprove={vi.fn()} onReject={vi.fn()} />)
    expect(screen.getByText("Test User")).toBeInTheDocument()
  })

  it("calls onApprove when approve clicked", () => {
    const onApprove = vi.fn()
    render(<CaseCard case_={mockCase} onApprove={onApprove} onReject={vi.fn()} />)
    fireEvent.click(screen.getByText("Approve"))
    expect(onApprove).toHaveBeenCalledWith("C-TEST")
  })

  it("calls onReject when reject clicked", () => {
    const onReject = vi.fn()
    render(<CaseCard case_={mockCase} onApprove={vi.fn()} onReject={onReject} />)
    fireEvent.click(screen.getByText("Reject"))
    expect(onReject).toHaveBeenCalledWith("C-TEST")
  })

  it("hides buttons when status is approved", () => {
    render(<CaseCard case_={{ ...mockCase, status: "approved" }} onApprove={vi.fn()} onReject={vi.fn()} />)
    expect(screen.queryByText("Approve")).not.toBeInTheDocument()
  })
})