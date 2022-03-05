import React from "react";
import { render, screen } from "@testing-library/react";

import RecentUpdates from "./RecentUpdates";

describe('RecentUpdates component', () => {
  test('renders a section and a list', () => {
    render(<RecentUpdates />);
    const sectionElement = screen.getByTestId('recent-updates-section');
    const listElement = screen.getByRole('list');
    expect(sectionElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
  })
})