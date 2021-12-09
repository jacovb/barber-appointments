import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";

import { API } from "aws-amplify";
import { listBookings, listTreatments } from "../src/graphql/queries";
import {
  createBooking as createBookingMutation,
  updateBooking as updateBookingMutation,
  deleteBooking as deleteBookingMutation,
} from "../src/graphql/mutations";
import { data } from "autoprefixer";

export const BookingContext = React.createContext();

const startBookingForm = {
  date: new Date().toISOString().split("T")[0],
  time: "",
  bookingUserId: "",
  bookingTreatmentId: "",
};

const BookingContextProvider = ({ children }) => {
  const [treatments, setTreatments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSelect, setTimeSelect] = useState("");
  const [dayBookings, setDayBookings] = useState([]);
  const [bookingData, setBookingData] = useState(startBookingForm);
  const { currentUserDetails } = useContext(AuthContext);
  const [bookingSideBarOpen, setBookingSideBarOpen] = useState(false);

  useEffect(() => {
    fetchTreatments();
    fetchDayBookings(selectedDate);
  }, []);

  useEffect(() => {
    setBookingData({
      ...bookingData,
      bookingUserId: currentUserDetails.id,
      paid: false,
    });
  }, [currentUserDetails]);

  useEffect(() => {
    fetchDayBookings(selectedDate);
    setBookingData({
      ...bookingData,
      date: selectedDate.toISOString().split("T")[0],
    });
    setTimeSelect("");
  }, [selectedDate, setSelectedDate]);

  useEffect(() => {
    setBookingData({
      ...bookingData,
      time: timeSelect,
    });
  }, [timeSelect, setTimeSelect]);

  async function fetchTreatments() {
    try {
      const apiData = await API.graphql({ query: listTreatments });
      setTreatments(apiData.data.listTreatments.items);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchDayBookings(searchDate) {
    let dateFilter = {
      date: {
        contains: searchDate.toISOString().split("T")[0],
      },
    };
    try {
      const apiData = await API.graphql({
        query: listBookings,
        variables: { filter: dateFilter },
      });
      setDayBookings(apiData.data.listBookings.items);
    } catch (error) {
      console.log(error);
    }
  }

  async function createBooking() {
    // setBookingData({
    //   ...bookingData,
    //   user: currentUserDetails.id,
    // });
    console.log("Booking data", bookingData);
    try {
      await API.graphql({
        query: createBookingMutation,
        variables: { input: bookingData },
      });
      setBookingData(startBookingForm);
    } catch (error) {
      console.log(error);
    }
  }

  function handleBookingEntry(e) {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  }

  function handleTreatmentSelect(e) {
    setBookingData({ ...bookingData, bookingTreatmentId: e.target.value });
  }

  const state = {
    selectedDate,
    setSelectedDate,
    timeSelect,
    setTimeSelect,
    dayBookings,
    treatments,
    currentUserDetails,
    createBooking,
    bookingData,
    setBookingData,
    handleBookingEntry,
    handleTreatmentSelect,
    bookingSideBarOpen,
    setBookingSideBarOpen,
  };

  return (
    <BookingContext.Provider value={state}>{children}</BookingContext.Provider>
  );
};

export default BookingContextProvider;
