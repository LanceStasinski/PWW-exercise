import React from "react";

import Button from "../../../shared/Button";
import StyledH3 from "../../../shared/StyledH3";
import Event from "./Event";

const DUMMY_EVENTS = [
  {
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
  },
  {
    tag: "Cancelled",
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
      day: 23,
    },
  },
  {
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
      day: 25,
    },
  },
  {
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
      day: 28,
    },
  },
];

const Calendar: React.FC = () => {
  const lastIndex = DUMMY_EVENTS.length - 1;
  return (
    <section data-testid="calendar-section">
      <StyledH3>Calendar of Events</StyledH3>
      <ul
        data-testid="calendar-list"
        className="mt-8 mb-10 flex flex-col space-y-5"
      >
        {DUMMY_EVENTS.map((item, index) => (
          <Event
            lastItem={index === lastIndex}
            tag={item.tag}
            title={item.title}
            location={item.location}
            time={item.time}
            phone={item.phone}
            date={item.date}
            key={`event${index}`}
          />
        ))}
      </ul>
      <Button>VIEW ALL EVENTS</Button>
    </section>
  );
};

export default Calendar;
