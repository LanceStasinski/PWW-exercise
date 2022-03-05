import React from "react";

export const MONTHS: { [key: string]: string } = {
  jan: "01",
  feb: "02",
  mar: "03",
  apr: "04",
  may: "05",
  jun: "06",
  jul: "07",
  aug: "08",
  sep: "09",
  oct: "10",
  nov: "11",
  dec: "12",
};

// Renders a recent update list item given props describing the update
const RecentItem: React.FC<{
  title: string;
  text?: string;
  date: {
    month: string;
    day: number;
    year: number;
  };
  tag: string;
  url: string;
}> = (props) => {
  return (
    <li className="mt-6 flex flex-col space-y-1">
      <a href={props.url}>
        <h4 className="text-primary-5 text-lg underline leading-5 font-medium">
          {props.title}
        </h4>
      </a>
      {props.text && (
        <p data-testid="update-p" className="text-gray-2">
          {props.text}
        </p>
      )}
      <div className="flex text-sm flex-wrap">
        <div className="text-gray-3 font-medium mr-1">Published:</div>
        <time
          data-testid="publish-date"
          className="text-gray-4 mr-2"
          dateTime={`${props.date.year}-${
            MONTHS[props.date.month.toLowerCase()]
          }-${props.date.day}`}
        >{`${props.date.month} ${props.date.day}, ${props.date.year}`}</time>
        <div
          data-testid="update-tag"
          className="text-gray-8 bg-gray-4 rounded-sm p-1 text-xs font-medium"
        >
          {props.tag}
        </div>
      </div>
    </li>
  );
};

export default RecentItem;
