import React from "react";
import { render, screen } from "@testing-library/react";

import StyledH2 from "./StyledH2";

describe('StyledH2 component', () => {
  test('renders a heading and a gold bar', () => {
    render(<StyledH2 />);
    const heading = screen.getByRole('heading');
    const goldBar = screen.getByTestId('gold-bar');
    expect(heading).toBeInTheDocument();
    expect(goldBar).toBeInTheDocument();
  })
})