import { render, screen } from "@testing-library/react"
import RiskBadge from "../components/RiskBadge"

describe("RiskBadge", () => {
  it("shows LOW for score 30", () => {
    render(<RiskBadge score={30} />)
    expect(screen.getByText(/LOW/)).toBeInTheDocument()
  })

  it("shows MEDIUM for score 55", () => {
    render(<RiskBadge score={55} />)
    expect(screen.getByText(/MEDIUM/)).toBeInTheDocument()
  })

  it("shows HIGH for score 85", () => {
    render(<RiskBadge score={85} />)
    expect(screen.getByText(/HIGH/)).toBeInTheDocument()
  })
})