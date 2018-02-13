import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import AddToLibrary from './AddToLibrary';
import SubmitRequest from './SubmitRequest';

const myBooks = gql`
  query myBooks {
    myBooks {
      _id
      title
      author
    }
    myRequests {
      _id
      supplier {
        email
      }
      book {
        title
        author
      }
    }
    user {
      _id
    }
  }
`;

const MyProfile = ({ loading, myBooks, myRequests }) => {
  if (loading) return null;
  return (
    <div>
      <h2>My Requests</h2>
      <StyledUl>
        {myRequests.map(request => (
          <li key={request._id}>
            <h3>{request.book.title}</h3>
            {request.supplier && (
              <span>
                <strong>supplier:</strong> {request.supplier.email}
              </span>
            )}
          </li>
        ))}
      </StyledUl>
      <h2>My Library</h2>
      <StyledUl>
        {myBooks.map(book => (
          <li key={book._id}>
            {book.title} by {book.author}
          </li>
        ))}
      </StyledUl>
      <hr />
      <Forms>
        <AddToLibrary />
        <SubmitRequest />
      </Forms>
    </div>
  );
};

export default graphql(myBooks, {
  props: ({ data }) => ({ ...data }),
})(MyProfile);

const Forms = styled.div`
  display: flex;
  > div {
    width: 100%;
    text-align: center;
  }
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 2rem;
  > li {
    list-style: none;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    > h3 {
      display: inline-block;
      margin: 0 auto 0 0;
    }
  }
`;
