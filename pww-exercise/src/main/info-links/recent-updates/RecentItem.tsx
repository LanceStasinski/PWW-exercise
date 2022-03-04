import React from "react";

const MONTHS: { [key: string]: string } = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
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
      <div className="flex text-sm">
        <div className="text-gray-3 font-medium mr-1">Published:</div>
        <time
          className="text-gray-4"
          dateTime={`${props.date.year}-${MONTHS[props.date.month]}-${props.date.day}`}
        >{`${props.date.month} ${props.date.day}, ${props.date.year}`}</time>
        <div className="text-gray-8 bg-gray-4 rounded-sm ml-2 p-1 text-xs font-medium">{props.tag}</div>
      </div>
    </div>
  );
};

export default RecentItem;
