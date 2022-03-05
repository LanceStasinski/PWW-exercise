import React from "react";
import { render, screen } from "@testing-library/react";

import RecentItem from "./RecentItem";

describe("RecentItem component", () => {
  test("renders 1 link, 1 p, 1 time, and 1 tag div elements", () => {
    const update = {
      title:
        "BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23",
      text: "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales.",
      date: {
        month: "Dec",
        day: 16,
        year: 2019,
      },
      tag: "Updated",
      url: "/",
    };
    render(
      <RecentItem
        title={update.title}
        text={update.text}
        date={update.date}
        tag={update.tag}
        url={update.url}
      />
    );
    const linkElement = screen.getByRole("link");
    const pElement = screen.getByTestId('update-p');
    const timeElement = screen.getByTestId("publish-date");
    const tagElement = screen.getByTestId("update-tag");

    expect(linkElement).toBeInTheDocument();
    expect(pElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(tagElement).toBeInTheDocument();
  });

  test('does not render a p tag if no text supplied', () => {
    const update = {
      title:
        "BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23",
      date: {
        month: "Dec",
        day: 16,
        year: 2019,
      },
      tag: "Updated",
      url: "/",
    };
    render(
      <RecentItem
        title={update.title}
        date={update.date}
        tag={update.tag}
        url={update.url}
      />
    );
    const text = screen.queryByTestId('update-p');
    expect(text).not.toBeInTheDocument();
  })
});
