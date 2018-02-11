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
    user {
      _id
    }
  }
`;

const MyProfile = ({ loading, myBooks }) => {
  if (loading) return null;
  return (
    <div>
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
  }
`;
