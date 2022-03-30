import { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import { BookingContext } from "../context/BookingContext";

export default function DatePicker() {
  function DSTDateConvert(date) {
    return new Date(
      new Date(date).getTime() - new Date(date).getTimezoneOffset() * 60000
    );
  }

  const bookingContext = useContext(BookingContext);
  const [selectedDate, setSelectedDate] = useState(
    DSTDateConvert(bookingContext.bookingData.date)
  );

  useEffect(() => {
    if (
      DSTDateConvert(selectedDate).toISOString().split("T")[0] !==
      bookingContext.bookingData.date
    ) {
      bookingContext.fetchDayBookings(selectedDate);
      bookingContext.setBookingData({
        ...bookingContext.bookingData,
        date: DSTDateConvert(selectedDate).toISOString().split("T")[0],
      });
      bookingContext.setTimeSelect("");
    }
  }, [selectedDate, setSelectedDate]);

  console.log(
    "BC @ DatePicker",
    bookingContext.bookingData
    // new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000)
    //   .toISOString()
    //   .split("T")[0]
  );

  return (
    <div className="flex flex-col items-center">
      <div className="w-450 p-0.5 text-left">Date:</div>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        minDate={new Date()}
        prev2Label={null}
        next2Label={null}
        className="bg-neumorph shadow-neumorph px-4 py-2 mx-8 my-2 w-6/12 rounded-lg border-0"
      />
    </div>
  );
}
