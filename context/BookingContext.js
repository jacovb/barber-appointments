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
  const { currentUserDetails } = useContext(AuthContext);

  useEffect(() => {
    fetchTreatments();
  }, []);

  async function fetchTreatments() {
    try {
      const apiData = await API.graphql({ query: listTreatments });
      setTreatments(apiData.data.listTreatments.items);
    } catch (error) {
      console.log(error);
    }
  }

  const state = {
    treatments,
    currentUserDetails,
  };

  return (
    <BookingContext.Provider value={state}>{children}</BookingContext.Provider>
  );
};

export default BookingContextProvider;
