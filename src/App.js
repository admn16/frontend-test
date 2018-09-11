import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import CounterForm from 'components/CounterForm/CounterForm';
import * as counterApi from 'services/api';
import 'App.css';

const StyledApp = styled.main`
  margin: 0 auto;
  width: 400px;
`;

class App extends PureComponent {

  async componentDidMount() {
    console.log(await counterApi.getCounters());
  }

  render() {
    return (
      <StyledApp>
        <CounterForm />

        <article>
          <div>
            <button>[ x ]</button>
            <span>Name of Counter</span>

            <button>+</button>
            <span>0</span>
            <button>-</button>
          </div>
        </article>

        <article>
          <span>Total</span>
          <span>10</span>
        </article>
      </StyledApp>
    );
  }
}

export default hot(module)(App);