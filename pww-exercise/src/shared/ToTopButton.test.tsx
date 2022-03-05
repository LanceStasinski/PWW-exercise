import React from "react";
import { render, screen } from "@testing-library/react";

import ToTopButton from "./ToTopButton";

describe('ToTopButton component', () => {
  test('renders a button and an image', () => {
    render(<ToTopButton />);
    const buttonElement = screen.getByRole('button');
    const imgElement = screen.getByTestId('chevron');
    expect(buttonElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  })
})