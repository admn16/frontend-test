import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import CounterForm from 'components/CounterForm/CounterForm';
import { fetchCounters } from 'actions/counterActions';
import 'App.css';

const StyledApp = styled.main`
  margin: 0 auto;
  width: 400px;
`;

class App extends PureComponent {

  componentDidMount() {
    this.props.fetchCounters();
  }

  render() {
    console.log(this.props);
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

const mapStateToProps = (state) => ({
  counters: state.counters
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchCounters: fetchCounters
}, dispatch);

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);