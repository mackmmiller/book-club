import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';
import styled from 'styled-components';

import Nav from './Nav';
import SearchResults from './SearchResults';
import Index from './Index';
import Footer from './Footer';
import MyProfile from './MyProfile';

const App = ({ loading, client, user }) => {
  if (loading) return null;
  return (
    <Router>
      <Wrapper>
        <Nav client={client} user={user} />
        <Main>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/results/:search" component={SearchResults} />
            <Route exact path="/myprofile" component={MyProfile} />
          </Switch>
        </Main>
        <Footer />
      </Wrapper>
    </Router>
  );
};

const userQuery = gql`
  query Users {
    user {
      _id
    }
  }
`;

export default graphql(userQuery, {
  props: ({ data }) => ({ ...data }),
})(withApollo(App));

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 80%;
  padding: 2rem 0;
  margin: auto;
  flex: 1 0 auto;
`;
