import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import mock_data from "../mocks/bodyRestaurantsList.json";
import { render, act, screen } from "@testing-library/react";
import"@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mock_data);
    },
  });
});

it("should load body components with restro lists", async () => {

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )

  );
  
  const searchBtn = screen.getByText("search")
  expect (searchBtn).toBeInTheDocument();
});
