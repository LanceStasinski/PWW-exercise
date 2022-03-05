import React from "react";

import { MONTHS } from "../recent-updates/RecentItem";
import locationIcon from "../../../assets/location.svg";
import clockIcon from "../../../assets/clock.svg";
import phoneIcon from "../../../assets/phone.svg";

// Renders a recent event list item given props describing the event
const Event: React.FC<{
  lastItem: boolean;
  tag?: string;
  title: string;
  location: string;
  time: {
    clock: string;
    amOrPm: string;
  };
  phone: {
    areaCode: number;
    prefix: number;
    suffix: number;
  };
  date: {
    month: string;
    day: number;
  };
}> = (props) => {
  const getMilitaryTime = (clock: string, amOrPm: string) => {
    const timeSplit = clock.split(":");
    const hour = Number(timeSplit[0]);
    const minute = timeSplit[1];
    if (amOrPm === "am") {
      if (hour === 12) {
        return ["00", minute].join(":");
      } else {
        if (hour < 10) {
          return [`0${hour}`, minute].join(":");
        } else {
          return clock;
        }
      }
    } else {
      if (hour === 12) {
        return ["12", minute].join(":");
      } else {
        const militaryHour = hour + 12;
        return [militaryHour, minute].join(":");
      }
    }
  };
  return (
    <li
      className="flex flex-col pb-4 md:grid md:grid-cols-[12%_88%] md:gap-4"
      style={{ borderBottom: props.lastItem ? "none" : "1pt solid #E1E5EA" }}
    >
      {
        // render the month-day block
      }
      <div
        data-testid="date-block"
        className="flex flex-row mb-3 md:mb-0 md:flex-col"
      >
        <time
          className="text-gray-8 md:h-[4.5rem] w-full bg-tertiary-1 flex flex-row md:flex-col justify-center items-center"
          dateTime={`${MONTHS[props.date.month.toLowerCase()]}-${
            props.date.day
          }`}
        >
          <div className="font-medium mr-1 md:mr-0 md:text-sm p-0 md:-mb-1">
            {props.date.month}
          </div>
          <div className="font-medium md:text-2xl p-0">{props.date.day}</div>
        </time>
      </div>
      {
        // render the main text of the event
      }
      <div className="flex flex-col">
        {props.tag && (
          <div
            data-testid="event-tag"
            className="rounded-sm p-1 w-fit text-xs font-medium mb-1"
            style={{
              backgroundColor:
                props.tag === "Cancelled" ? "#E9261D" : "#D2B859",
              color: props.tag === "Cancelled" ? "#F3F6F9" : "#333333",
            }}
          >
            {props.tag}
          </div>
        )}
        <div className="flex flex-col space-y-2">
          <h4 className="text-primary-1 text-lg font-Open-Sans font-bold">
            {props.title}
          </h4>
          <div className="flex flex-row">
            <img
              src={locationIcon}
              alt="location icon"
              className="mr-2 mt-1 h-1/2"
            />
            <div className="text-gray-2 leading-5">{props.location}</div>
          </div>
          <div className="flex flex-row">
            <img src={clockIcon} alt="clock icon" className="mr-3" />
            <time
              data-testid="time"
              dateTime={getMilitaryTime(props.time.clock, props.time.amOrPm)}
            >{`${props.time.clock} ${props.time.amOrPm}`}</time>
          </div>
          <div className="flex flex-row">
            <img src={phoneIcon} alt="phone icon" className="mr-3" />
            <a
              className="text-gray-2"
              href={`tel:+1${props.phone.areaCode}${props.phone.prefix}${props.phone.suffix}`}
            >
              {`(${props.phone.areaCode}) ${props.phone.prefix}-${props.phone.suffix}`}
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Event;
