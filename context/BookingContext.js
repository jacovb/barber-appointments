import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";

import { API } from "aws-amplify";
import { listBookings, listTreatments } from "../src/graphql/queries";
import {
  createBooking as createBookingMutation,
  updateBooking as updateBookingMutation,
  deleteBooking as deleteBookingMutation,
} from "../src/graphql/mutations";

export const BookingContext = React.createContext();

const BookingContextProvider = ({ children }) => {
  const [treatments, setTreatments] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dayBookings, setDayBookings] = useState();
  const { currentUserDetails } = useContext(AuthContext);

  useEffect(() => {
    fetchTreatments();
    fetchDayBookings(selectedDate);
  }, []);

  useEffect(() => {
    fetchDayBookings(selectedDate);
  }, [selectedDate, setSelectedDate]);

  async function fetchTreatments() {
    try {
      const apiData = await API.graphql({ query: listTreatments });
      setTreatments(apiData.data.listTreatments.items);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchDayBookings(date) {
    try {
      const apiData = await API.graphql({
        query: listBookings,
        filter: { date: { contains: date.toISOString().split("T")[0] } },
      });
      setDayBookings(apiData.data.listBookings.items);
    } catch (error) {
      console.log(error);
    }
  }

  const state = {
    selectedDate,
    setSelectedDate,
    dayBookings,
    treatments,
    currentUserDetails,
  };

  return (
    <BookingContext.Provider value={state}>{children}</BookingContext.Provider>
  );
};

export default BookingContextProvider;
