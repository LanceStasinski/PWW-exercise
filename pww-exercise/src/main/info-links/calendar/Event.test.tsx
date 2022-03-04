import React from "react";
import { render, screen } from "@testing-library/react";

import Event from "./Event";

describe("Event Component", () => {
  const event = {
    tag: "Updated",
    title: "Board of Economic Advisors Meeting",
    location: "Room 417, Bowers Conference Room, Rembert Dennis Building",
    time: {
      clock: "1:30",
      amOrPm: "pm",
    },
    phone: {
      areaCode: 803,
      prefix: 734,
      suffix: 2265,
    },
    date: {
      month: "NOV",
      day: 22,
    },
  };
  test("renders 3 image, 1 tag, 1 link, 1 time, 1 div date block, and 1 div separator elements", () => {
    render(
      <Event
        lastItem={false}
        tag={event.tag}
        title={event.title}
        location={event.location}
        time={event.time}
        phone={event.phone}
        date={event.date}
      />
    );
    const imageElements = screen.getAllByRole('img');
    const timeElement = screen.getByTestId('time');
    const dateElement = screen.getByTestId('date-block')
    const tagElement = screen.getByTestId('event-tag');
    const linkElement = screen.getByRole('link');
    const separatorElement = screen.getByTestId('separator')

    expect(imageElements.length).toEqual(3);
    expect(timeElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(tagElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(separatorElement).toBeInTheDocument();
  });
});
