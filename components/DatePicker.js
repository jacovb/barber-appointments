import { useContext } from "react";
import Calendar from "react-calendar";
import { BookingContext } from "../context/BookingContext";

export default function DatePicker() {
  const bookingContext = useContext(BookingContext);

  return (
    <div className="flex flex-col items-center">
      <Calendar
        onChange={bookingContext.setSelectedDate}
        value={bookingContext.selectedDate}
        minDate={new Date()}
        prev2Label={null}
        next2Label={null}
        className="bg-neumorph shadow-neumorph px-4 py-4 mx-8 my-8 w-6/12 rounded-lg border-0"
      />
      <p>
        Selected Date: {bookingContext.selectedDate.toISOString().split("T")[0]}
      </p>
    </div>
  );
}
