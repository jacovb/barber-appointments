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

const startBookingForm = {
  date: new Date().toISOString().split("T")[0],
  time: "",
  bookingUserId: "",
  bookingTreatmentId: "",
};

const BookingContextProvider = ({ children }) => {
  const [treatments, setTreatments] = useState([]);
  const [treatmentSelect, setTreatmentSelect] = useState("");
  const [timeSelect, setTimeSelect] = useState("");
  const [dayBookings, setDayBookings] = useState([]);
  const [bookingData, setBookingData] = useState(startBookingForm);
  const { currentUserDetails } = useContext(AuthContext);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    fetchTreatments();
    fetchDayBookings(bookingData.date);
  }, []);

  useEffect(() => {
    setBookingData({
      ...bookingData,
      bookingUserId: currentUserDetails.id,
      paid: false,
    });
  }, [currentUserDetails]);

  useEffect(() => {
    setBookingData({
      ...bookingData,
      time: timeSelect,
    });
  }, [timeSelect, setTimeSelect]);

  useEffect(() => {
    if (bookingModalOpen) {
      setBookingData({
        ...bookingData,
        bookingTreatmentId: "",
      });
    }
  }, [bookingModalOpen, setBookingModalOpen]);

  useEffect(() => {
    console.log("Booking Data", bookingData);
  }, [bookingData, setBookingData]);

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
        contains: new Date(searchDate).toISOString().split("T")[0],
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

  const state = {
    timeSelect,
    setTimeSelect,
    fetchDayBookings,
    dayBookings,
    treatments,
    currentUserDetails,
    createBooking,
    startBookingForm,
    bookingData,
    setBookingData,
    treatmentSelect,
    setTreatmentSelect,
    handleBookingEntry,
    bookingModalOpen,
    setBookingModalOpen,
    editModalOpen,
    setEditModalOpen,
  };

  return (
    <BookingContext.Provider value={state}>{children}</BookingContext.Provider>
  );
};

export default BookingContextProvider;
