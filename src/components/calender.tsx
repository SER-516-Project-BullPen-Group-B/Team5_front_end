import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  date: any;
}

const MyApp: React.FC<CalendarProps> = ({ date }) => {
  const [value] = useState(new Date());
  return (
    <div>
      <Calendar className="react-calender" onChange={date} value={value} />
    </div>
  );
};

export default MyApp;
