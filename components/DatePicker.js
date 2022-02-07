import { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import { BookingContext } from "../context/BookingContext";

export default function DatePicker() {
  const bookingContext = useContext(BookingContext);
  const [selectedDate, setSelectedDate] = useState(
    new Date(bookingContext.bookingData.date)
  );

  useEffect(() => {
    bookingContext.fetchDayBookings(selectedDate);
    bookingContext.setBookingData({
      ...bookingContext.bookingData,
      date: selectedDate.toISOString().split("T")[0],
    });
    bookingContext.setTimeSelect(""); //creating problem with time in Booking Summary.
  }, [selectedDate, setSelectedDate]);

  return (
    <div className="flex flex-col items-center">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        minDate={new Date()}
        prev2Label={null}
        next2Label={null}
        className="bg-neumorph shadow-neumorph px-4 py-4 mx-8 my-4 w-6/12 rounded-lg border-0"
      />
    </div>
  );
}
