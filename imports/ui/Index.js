import React from 'react';
import styled from 'styled-components';

const Index = () => (
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
        </div>
        <div>
          <h3>Looking For</h3>
        </div>
      </Trades>
    </Section>
  </div>
);

export default Index;

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
  }
`;
