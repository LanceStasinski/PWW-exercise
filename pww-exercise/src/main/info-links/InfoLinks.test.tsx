import React from "react";
import { render, screen } from "@testing-library/react";

import InfoLinks from "./InfoLinks";

describe("InfoLinks component", () => {
  test("renders containers for other components", () => {
    render(<InfoLinks />);
    const mainContainer = screen.getByTestId("info-links-container");
    const updatesEventsContainer = screen.getByTestId(
      "updates-events-container"
    );
    expect(mainContainer).toBeInTheDocument();
    expect(updatesEventsContainer).toBeInTheDocument();
  });
});
