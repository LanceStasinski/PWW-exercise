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
    <div className="mt-6 flex flex-col space-y-1">
      <a href={props.url}><h2 className="text-primary-5 text-lg underline leading-5 font-medium">{props.title}</h2></a>
      <p className="text-gray-2">{props.text}</p>
      <div className="flex text-sm flex-wrap">
        <div className="text-gray-3 font-medium mr-1">Published:</div>
        <time
          className="text-gray-4 mr-2"
          dateTime={`${props.date.year}-${MONTHS[props.date.month.toLowerCase()]}-${props.date.day}`}
        >{`${props.date.month} ${props.date.day}, ${props.date.year}`}</time>
        <div className="text-gray-8 bg-gray-4 rounded-sm p-1 text-xs font-medium">{props.tag}</div>
      </div>
    </div>
  );
};

export default RecentItem;
