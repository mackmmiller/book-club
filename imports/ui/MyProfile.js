import React, { Component } from 'react';
import styled from 'styled-components';

class MyProfile extends Component {
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
            <form>
              <h2>Add Book to Library</h2>
              <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" />
              </div>
              <div>
                <label htmlFor="author">author</label>
                <input type="text" name="author" />
              </div>
              <div>
                <label htmlFor="isbn">ISBN</label>
                <input type="text" name="isbn" />
              </div>
              <input type="submit" />
            </form>
          </div>
          <div>
            <form>
              <h2>Request a Book</h2>
              <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" />
              </div>
              <div>
                <label htmlFor="author">author</label>
                <input type="text" name="author" />
              </div>
              <div>
                <label htmlFor="isbn">ISBN</label>
                <input type="text" name="isbn" />
              </div>
              <input type="submit" />
            </form>
          </div>
        </Forms>
      </div>
    );
  }
}

export default MyProfile;

const Forms = styled.div`
  display: flex;
  > div {
    width: 100%;
    text-align: center;
  }
`;
