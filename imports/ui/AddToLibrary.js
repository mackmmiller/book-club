import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createCopy = gql`
  mutation createCopy($title: String!, $author: String!) {
    createCopy(title: $title, author: $author) {
      _id
    }
  }
`;

class AddToLibrary extends Component {
  addBook = () => {
    this.props
      .createCopy({
        variables: {
          title: this.title.value,
          author: this.author.value,
        },
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Add Book to Library</h2>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" ref={input => (this.title = input)} />
        </div>
        <div>
          <label htmlFor="author">author</label>
          <input type="text" name="author" ref={input => (this.author = input)} />
        </div>
        <button onClick={this.addBook}>Submit</button>
      </div>
    );
  }
}

export default graphql(createCopy, {
  name: 'createCopy',
  options: {
    refetchQueries: ['myBooks'],
  },
})(AddToLibrary);
