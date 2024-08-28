import Contact from "../Contact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


test ("load contact page" , () => {
    render(<Contact />)
    const text = screen.getByText("Contact page")
    expect(text).toBeInTheDocument()
})

