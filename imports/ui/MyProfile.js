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

class MyProfile extends Component {
  addToLibrary = () => {
    this.props
      .createCopy({
        variables: {
          title: this.title.value,
          author: this.author.value,
        },
      })
      .catch(err => console.log(err));
  };

  addRequest = () => {
    e.preventDefault();
    console.log('Submitting request');
  };

  render() {
    return (
      <div>
        <h2>My Library</h2>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <hr />
        <Forms>
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
            <button onClick={this.addToLibrary}>Submit</button>
          </div>
          <div>
            <form onSubmit={this.addRequest}>
              <h2>Request a Book</h2>
              <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" />
              </div>
              <div>
                <label htmlFor="author">author</label>
                <input type="text" name="author" />
              </div>
              <input type="submit" />
            </form>
          </div>
        </Forms>
      </div>
    );
  }
}

export default graphql(createCopy, {
  name: 'createCopy',
})(MyProfile);

const Forms = styled.div`
  display: flex;
  > div {
    width: 100%;
    text-align: center;
  }
`;
