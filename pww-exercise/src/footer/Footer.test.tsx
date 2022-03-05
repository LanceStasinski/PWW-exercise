import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer component", () => {
  test("renders 1 image, 6 links, and header elements", () => {
    render(<Footer />);
    const imageElements = screen.getAllByRole("img");
    const linkElements = screen.getAllByRole("link");
    const headerElements = screen.getAllByRole("heading");
    const pElements = screen.getAllByTestId('address')
    expect(imageElements.length).toEqual(1);
    expect(linkElements.length).toEqual(6);
    expect(headerElements.length).toEqual(4);
    expect(pElements.length).toEqual(3)
  });
});
