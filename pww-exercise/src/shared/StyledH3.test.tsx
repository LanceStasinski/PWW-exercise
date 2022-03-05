import React from "react";
import { render, screen } from "@testing-library/react";

import StyledH3 from "./StyledH3";

describe('StyledH2 component', () => {
  test('renders a heading and a gold bar', () => {
    render(<StyledH3 />);
    const heading = screen.getByRole('heading');
    const goldBar = screen.getByTestId('gold-bar');
    expect(heading).toBeInTheDocument();
    expect(goldBar).toBeInTheDocument();
  })
})