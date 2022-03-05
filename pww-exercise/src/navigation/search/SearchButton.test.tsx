import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchButton from "./SearchButton";

describe('SearchButton component', () => {
  test('renders a button with an icon', () => {
    render(<SearchButton searchIsOpen={false} onToggleSearch={() => {}}/>);
    const buttonElement = screen.getByRole('button');
    const imgElement = screen.getByTestId('search-icon');

    expect(buttonElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  })
  test('toggleSearch is called when button is clicked', () => {
    const mockToggleSearch = jest.fn();
    render(<SearchButton searchIsOpen={false} onToggleSearch={mockToggleSearch}/>);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    expect(mockToggleSearch).toHaveBeenCalled();
  })
})