import React from "react";
import { render, screen } from "@testing-library/react";

import SearchBar from "./SearchBar";

describe('SearchBar component', () => {
  test('renders a form and an input', () => {
    render(<SearchBar show={true} />);
    const formElement = screen.getByTestId('search-form');
    const inputElement = screen.getByTestId('search-input');

    expect(formElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  })
  test('does not render component if show is false', () => {
    render(<SearchBar show={false} />);
    const formElement = screen.queryByTestId('search-form');
    expect(formElement).not.toBeInTheDocument();
  })
})