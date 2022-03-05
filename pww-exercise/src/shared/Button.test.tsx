import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe('Button component', () => {
  test('renders a button', () => {
    render(<Button>TEST</Button>);
    const buttonElement = screen.getByRole('button');
    const text = screen.getByText(/test/i);
    expect(buttonElement).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  })
})