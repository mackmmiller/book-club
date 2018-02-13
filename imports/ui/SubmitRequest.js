import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createRequest = gql`
  mutation createRequest($title: String!, $author: String!) {
    createRequest(title: $title, author: $author) {
      _id
    }
  }
`;

class SubmitRequest extends Component {
  addRequest = () => {
    this.props
      .createRequest({
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
        <h2>Request a Book</h2>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" ref={input => (this.title = input)} />
        </div>
        <div>
          <label htmlFor="author">author</label>
          <input type="text" name="author" ref={input => (this.author = input)} />
        </div>
        <button onClick={this.addRequest}>Submit</button>
      </div>
    );
  }
}

export default graphql(createRequest, {
  name: 'createRequest',
})(SubmitRequest);
