import React from "react";
import { render, screen } from "@testing-library/react";

import PopularServices from "./PopularServices";

describe("PopularServices component", () => {
  test("renders a heading and 9 list items", () => {
    render(<PopularServices />);
    const headingElement = screen.getByRole("heading");
    const listItems = screen.getAllByRole("listitem");
    expect(headingElement).toBeInTheDocument();
    expect(listItems.length).toEqual(9);
  });
});
