/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTreatment = /* GraphQL */ `
  mutation CreateTreatment(
    $input: CreateTreatmentInput!
    $condition: ModelTreatmentConditionInput
  ) {
    createTreatment(input: $input, condition: $condition) {
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
      stripeApi
      createdAt
      updatedAt
    }
  }
`;
export const updateTreatment = /* GraphQL */ `
  mutation UpdateTreatment(
    $input: UpdateTreatmentInput!
    $condition: ModelTreatmentConditionInput
  ) {
    updateTreatment(input: $input, condition: $condition) {
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
      stripeApi
      createdAt
      updatedAt
    }
  }
`;
export const deleteTreatment = /* GraphQL */ `
  mutation DeleteTreatment(
    $input: DeleteTreatmentInput!
    $condition: ModelTreatmentConditionInput
  ) {
    deleteTreatment(input: $input, condition: $condition) {
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
      stripeApi
      createdAt
      updatedAt
    }
  }
`;
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
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
        stripeApi
        createdAt
        updatedAt
      }
      paid
      createdAt
      updatedAt
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
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
        stripeApi
        createdAt
        updatedAt
      }
      paid
      createdAt
      updatedAt
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
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
        stripeApi
        createdAt
        updatedAt
      }
      paid
      createdAt
      updatedAt
    }
  }
`;
