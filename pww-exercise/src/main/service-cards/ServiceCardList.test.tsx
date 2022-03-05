import React from "react";
import { render, screen } from "@testing-library/react";

import ServiceCardList from "./ServiceCardList";

describe("ServiceCard component", () => {
  test("renders a list of 4 items", () => {
    render(<ServiceCardList />);
    const listElement = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");
    expect(listElement).toBeInTheDocument();
    expect(listItems.length).toEqual(4);
  });
});
