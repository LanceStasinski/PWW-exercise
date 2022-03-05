import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MainNavigation from "./MainNavigation";

describe("MainNavigation component", () => {
  test("renders 1 image, a heading, a p element, and 5 links", () => {
    render(<MainNavigation />);
    const logo = screen.getByTestId("logo");
    const heading = screen.getAllByRole("heading");
    const pElement = screen.getByTestId("slogan");
    const linkElements = screen.getAllByRole("link");
    expect(logo).toBeInTheDocument();
    expect(heading.length).toEqual(2);
    expect(pElement).toBeInTheDocument();
    expect(linkElements.length).toEqual(4);
  });
  test("renders mask image when logo is hovered", () => {
    render(<MainNavigation />);
    const logo = screen.getByTestId("logo");
    userEvent.hover(logo);
    const maskImg = screen.getByTestId("mask");
    expect(maskImg).toBeInTheDocument();
  });
  test("does not render mask image if logo is not hovered", () => {
    render(<MainNavigation />);
    const maskImg = screen.queryByTestId("mask");
    expect(maskImg).not.toBeInTheDocument();
  });
});
