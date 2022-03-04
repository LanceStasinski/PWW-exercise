import React from "react";
import { render, screen } from "@testing-library/react";

import Calendar from "./Calendar";

describe("Calendar component", () => {
  test("renders section and list elements", () => {
    render(<Calendar />);
    const calendarSection = screen.getByTestId("calendar-section");
    const calendarList = screen.getByTestId("calendar-list");
    expect(calendarSection).toBeInTheDocument();
    expect(calendarList).toBeInTheDocument();
  });
});
