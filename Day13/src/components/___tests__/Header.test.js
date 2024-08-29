import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should load header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByText("Login");
  expect(button).toBeInTheDocument();
});

it("should check if Login button changed to logout when clicked", ()=>{
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
  </BrowserRouter>
  )

  const loginbutton = screen.getByText("Login");
  fireEvent.click(loginbutton);
  const logoutbutton = screen.getByRole("button", {name:"Logout"})
  expect(logoutbutton).toBeInTheDocument();
})