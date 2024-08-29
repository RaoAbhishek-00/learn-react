import mock_data from "../mocks/restaurant_data.json"
import RestroCard from "../RestroCard"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


it("should load a restaurant on body", ()=>{

    render(
        <RestroCard resData={mock_data}/>
        
    )
    const name = screen.getByText("Mahalaxmi Sweets & Restaurant");
    expect(name).toBeInTheDocument();

})