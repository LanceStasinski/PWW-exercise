import React from "react";
import { render, screen } from "@testing-library/react";

import Menu from "./Menu";

describe("Menu component", () => {
  const backdropRoot = global.document.createElement("div");
  backdropRoot.setAttribute("id", "backdrop-hook");
  // eslint-disable-next-line testing-library/no-node-access
  const body = global.document.querySelector("body");
  body?.appendChild(backdropRoot);

  test("renders a nav, 5 main links, 4 categories of links, and 23 links", () => {
    render(<Menu show={true} onToggleMenu={() => {}} />);
    const navElement = screen.getByRole("navigation");
    const mainLinks = screen.getAllByTestId("main-link");
    const linkCategories = screen.getAllByTestId("link-category");
    const links = screen.getAllByTestId("link");

    expect(navElement).toBeInTheDocument();
    expect(mainLinks.length).toEqual(5);
    expect(linkCategories.length).toEqual(4);
    expect(links.length).toEqual(23);
  });
  test("does not render a menu if show is false", () => {
    render(<Menu show={false} onToggleMenu={() => {}} />);
    const navElement = screen.queryByRole("navigation");

    expect(navElement).not.toBeInTheDocument();
  });
});
