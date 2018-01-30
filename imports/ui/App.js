import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';
import styled from 'styled-components';

import Nav from './Nav';
import SearchResults from './SearchResults';
import Index from './Index';
import Footer from './Footer';

const App = () => (
  <Router>
    <Wrapper>
      <Nav />
      <Main>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/results/:search" component={SearchResults} />
        </Switch>
      </Main>
      <Footer />
    </Wrapper>
  </Router>
);

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  width: 80%;
  margin: auto;
  flex: 1 0 auto;
`;
