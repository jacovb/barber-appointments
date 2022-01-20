/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      surname
      gender
      email
      phone
      bookings {
        items {
          id
          date
          time
          paid
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        surname
        gender
        email
        phone
        bookings {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTreatment = /* GraphQL */ `
  query GetTreatment($id: ID!) {
    getTreatment(id: $id) {
      id
      title
      description
      price
      bookings {
        items {
          id
          date
          time
          paid
          createdAt
          updatedAt
        }
        nextToken
      }
      isDoubleTimeSlot
      createdAt
      updatedAt
    }
  }
`;
export const listTreatments = /* GraphQL */ `
  query ListTreatments(
    $filter: ModelTreatmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTreatments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        price
        bookings {
          nextToken
        }
        isDoubleTimeSlot
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      date
      time
      user {
        id
        name
        surname
        gender
        email
        phone
        bookings {
          nextToken
        }
        createdAt
        updatedAt
      }
      treatment {
        id
        title
        description
        price
        bookings {
          nextToken
        }
        isDoubleTimeSlot
        createdAt
        updatedAt
      }
      paid
      createdAt
      updatedAt
    }
  }
`;
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        time
        user {
          id
          name
          surname
          gender
          email
          phone
          createdAt
          updatedAt
        }
        treatment {
          id
          title
          description
          price
          isDoubleTimeSlot
          createdAt
          updatedAt
        }
        paid
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
