/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTreatment = /* GraphQL */ `
  subscription OnCreateTreatment {
    onCreateTreatment {
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
export const onUpdateTreatment = /* GraphQL */ `
  subscription OnUpdateTreatment {
    onUpdateTreatment {
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
export const onDeleteTreatment = /* GraphQL */ `
  subscription OnDeleteTreatment {
    onDeleteTreatment {
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
export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking {
    onCreateBooking {
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking {
    onUpdateBooking {
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking {
    onDeleteBooking {
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
