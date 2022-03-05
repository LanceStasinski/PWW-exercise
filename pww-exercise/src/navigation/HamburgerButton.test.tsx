import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HamburgerButton from "./HamburgerButton";

describe("HamburgerButton component", () => {
  test("renders a hamburger if menuIsOpen is false", () => {
    render(<HamburgerButton menuIsOpen={false} onClick={() => {}} />);
    const buttonElement = screen.getByRole("button");
    const patties = screen.getAllByTestId("patty");
    expect(buttonElement).toBeInTheDocument();
    expect(patties.length).toEqual(3);
  });
  test("renders an X if menuIsOpen is true", () => {
    render(<HamburgerButton menuIsOpen={true} onClick={() => {}} />);
    const closeX = screen.getByTestId("close-x");
    expect(closeX).toBeInTheDocument();
  });
  test("onClick is called when button is clicked", () => {
    const mockOnClick = jest.fn();
    render(<HamburgerButton menuIsOpen={false} onClick={mockOnClick} />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
