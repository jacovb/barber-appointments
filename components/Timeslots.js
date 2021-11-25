import React, { useState } from "react";

const slots = [
  { start: "9:00", end: "9:30" },
  { start: "9:30", end: "10:00" },
  { start: "10:00", end: "10:30" },
  { start: "10:30", end: "11:00" },
  { start: "11:00", end: "11:30" },
  { start: "11:30", end: "12:00" },
  { start: "12:00", end: "12:30" },
  { start: "12:30", end: "13:00" },
  { start: "13:00", end: "13:30" },
  { start: "13:30", end: "14:00" },
  { start: "14:00", end: "14:30" },
  { start: "14:30", end: "15:00" },
  { start: "15:00", end: "15:30" },
  { start: "15:30", end: "16:00" },
  { start: "16:00", end: "16:30" },
  { start: "16:30", end: "17:00" },
  { start: "17:00", end: "17:30" },
  { start: "17:30", end: "18:00" },
  { start: "18:00", end: "18:30" },
  { start: "18:30", end: "19:00" },
  { start: "19:00", end: "19:30" },
  { start: "19:30", end: "20:00" },
];

export default function Timeslots() {
  const [timeSelect, setTimeSelect] = useState("");

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row flex-wrap max-w-full w-540 shadow-neumorph p-4 m-4 justify-center rounded-lg">
        {slots.map((timeslot, idx) => (
          <button
            key={idx}
            className={`${
              timeslot.start === timeSelect
                ? "bg-red-700 shadow-neumorphInsetRed"
                : "hover:bg-hoverGrey hover:text-black"
            } w-36 px-1 py-1 mx-1 my-1 flex justify-center cursor-pointer rounded`}
            onClick={() => setTimeSelect(timeslot.start)}
          >
            <p>{timeslot.start}</p>
          </button>
        ))}
      </div>
      <p>Selected Time: {timeSelect}</p>
    </div>
  );
}
