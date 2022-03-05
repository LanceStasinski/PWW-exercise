import React from "react";
import { render, screen } from "@testing-library/react";

import ServiceCard from "./ServiceCard";

describe("ServiceCard component", () => {
  test("renders a link, an image, and a description", () => {
    const service = {
      image: "",
      title: "DATA & RESEARCH",
      url: "/",
    };
    render(
      <ServiceCard
        image={service.image}
        title={service.title}
        url={service.url}
      />
    );
    const linkElement = screen.getByRole("link");
    const imageElement = screen.getByTestId("card-image");
    const description = screen.getByTestId("card-description");

    expect(linkElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
