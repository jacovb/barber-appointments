import { useState } from "react";
import Calendar from "react-calendar";

export default function DatePicker() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar
        onChange={setDate}
        value={date}
        minDate={new Date()}
        prev2Label={null}
        next2Label={null}
        className="bg-neumorph shadow-neumorph px-4 py-4 mx-8 my-8 w-6/12 rounded-lg border-0"
      />
      <p>Selected Date: {date.toDateString()}</p>
    </>
  );
}
