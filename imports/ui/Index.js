import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const booksQuery = gql`
  query booksQuery {
    books {
      _id
      title
      author
    }
    requests {
      _id
      book {
        title
        author
      }
      requester {
        _id
        email
      }
    }
  }
`;

const createRequest = gql`
  mutation createRequest($title: String!, $author: String!) {
    createRequest(title: $title, author: $author) {
      _id
    }
  }
`;

const addSupplier = gql`
  mutation addSupplier($id: String!) {
    addSupplier(_id: $id) {
      _id
    }
  }
`;

class Index extends Component {
  createRequest = (title, author, id) => {
    console.log(title, author, id);
    this.props
      .createRequest({
        variables: {
          title,
          author,
        },
      })
      .catch(err => console.log(err));
  };

  addSupplier = (id) => {
    this.props
      .addSupplier({
        variables: {
          id,
        },
      })
      .catch(err => console.log(err));
  };

  render() {
    const { loading, books, requests } = this.props;
    console.log(requests);
    return (
      <div>
        <Header>
          <h1>Welcome to Book Trader</h1>
          <h2>The Best Place to Trade Your Books with Other Book Lovers</h2>
        </Header>
        <hr />
        <Section>
          <h2>Open Trades</h2>
          <Trades>
            <div>
              <h3>Up for Grabs</h3>
              {loading ? null : (
                <ul>
                  {books.map(book => (
                    <Book key={book._id}>
                      <h3>{book.title}</h3>
                      <h4>by {book.author}</h4>
                      <button onClick={() => this.createRequest(book.title, book.author, book._id)}>
                        Request Title
                      </button>
                    </Book>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h3>Looking For</h3>
              {loading ? null : (
                <ul>
                  {requests.map(request => (
                    <Book key={request._id}>
                      <h3>{request.requester.email} requests:</h3>
                      <h4>
                        {request.book.title} by {request.book.author}
                      </h4>
                      <button onClick={() => this.addSupplier(request._id)}>I'll Ship It</button>
                    </Book>
                  ))}
                </ul>
              )}
            </div>
          </Trades>
        </Section>
      </div>
    );
  }
}

export default compose(
  graphql(booksQuery, { props: ({ data }) => ({ ...data }) }),
  graphql(createRequest, {
    name: 'createRequest',
    options: {
      refetchQueries: ['booksQuery'],
    },
  }),
  graphql(addSupplier, {
    name: 'addSupplier',
  }),
)(Index);

const Header = styled.header`
  text-align: center;
  > h1 {
    font-size: 2.6rem;
  }
  > h2 {
    font-size: 1.6rem;
  }
`;

const Section = styled.section`
  > h2 {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 0;
  }
`;

const Trades = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 1.6rem;
  > div {
    width: 100%;
    > ul {
      padding: 0;
      margin: 0;
    }
  }
`;

const Book = styled.li`
  border: 3px solid #3b2c35;
  background: #59c9a5;
  padding: 1rem;
  margin: 1rem;
  list-style: none;
`;
