import React from "react";
import { render, screen } from "@testing-library/react";

import SearchArea from "./SearchArea";

describe("SearchArea component", () => {
  test("renders background image, search icon, a form, and a paragraph", () => {
    render(<SearchArea />);
    const background = screen.getByTestId("background");
    const searchIcon = screen.getByTestId("search-icon");
    const pElement = screen.getByTestId("hero-text");
    const formElement = screen.getByTestId("search-form");

    expect(background).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
    expect(pElement).toBeInTheDocument();
    expect(formElement).toBeInTheDocument();
  });
});
