import React from "react";
import Button from "../../../shared/Button";

import StyledH3 from "../../../shared/StyledH3";
import RecentItem from "./RecentItem";

const DUMMY_UPDATES = [
  {
    title: "Local Government Finance",
    text: "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales.",
    date: {
      month: "Jan",
      day: 2,
      year: 2019,
    },
    tag: "Updated",
    url: "/",
  },
  {
    title: "Transportation Network Carrier Maps",
    date: {
      month: "Jan",
      day: 2,
      year: 2019,
    },
    tag: "New",
    url: "/",
  },
  {
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
  },
  {
    title: "Budget Development",
    date: {
      month: "Jan",
      day: 2,
      year: 2019,
    },
    tag: "New",
    url: "/",
  },
  {
    title: "November 2019 General Fund Revenue Digest",
    date: {
      month: "Jan",
      day: 2,
      year: 2019,
    },
    tag: "New",
    url: "/",
  },
];

// Renders a list of recent updates - these update items would normally come from
// a GET request sent on page load via the useEffect hook
const RecentUpdates: React.FC = () => {
  return (
    <section
      data-testid="recent-updates-section"
      className="mb-24 md:mb-0 md:pr-6 "
    >
      <StyledH3>Recent Updates</StyledH3>
      <ul className="mb-8">
        {DUMMY_UPDATES.map((item, index) => (
          <RecentItem
            title={item.title}
            text={item.text}
            date={item.date}
            tag={item.tag}
            url={item.url}
            key={`recentItem${index}`}
          />
        ))}
      </ul>
      <Button>VIEW MORE</Button>
    </section>
  );
};

export default RecentUpdates;
