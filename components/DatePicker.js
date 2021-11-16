import { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

export default function DatePicker() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar onChange={setDate} value={date} />
      <p>Selected Date: {date.toDateString()}</p>
    </>
  );
}
