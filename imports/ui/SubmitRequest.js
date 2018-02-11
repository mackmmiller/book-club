import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SubmitRequest extends Component {
  addRequest = () => {
    e.preventDefault();
    console.log('Submitting request');
  };

  render() {
    return (
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
    );
  }
}

export default SubmitRequest;
