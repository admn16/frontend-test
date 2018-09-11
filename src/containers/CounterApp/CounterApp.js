import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CounterForm from 'components/CounterForm/CounterForm';
import Counters from 'components/Counters/Counters';
import * as counterActions from 'actions/counterActions';

const StyledApp = styled.main`
  margin: 0 auto;
  width: 400px;
`;

class App extends PureComponent {
  static propTypes = {
    getCounters: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    deleteCounter: PropTypes.func.isRequired,
    counters: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    counters: [],
  };

  componentDidMount() {
    const { getCounters } = this.props;
    getCounters();
  }

  onDelete = id => () => {
    const { deleteCounter } = this.props;
    deleteCounter(id);
  };

  onDecrement = id => () => {
    const { decrement } = this.props;
    decrement(id);
  };

  onIncrement = id => () => {
    const { increment } = this.props;
    increment(id);
  };

  render() {
    const { counters } = this.props;

    return (
      <StyledApp>
        <CounterForm />
        <Counters
          counters={counters}
          onDelete={this.onDelete}
          onDecrement={this.onDecrement}
          onIncrement={this.onIncrement}
        />
        <article>
          <span>Total</span>
          <span>10</span>
        </article>
      </StyledApp>
    );
  }
}

const mapStateToProps = state => ({
  counters: state.counters,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCounters: counterActions.fetchCounters,
  increment: counterActions.incrementCounter,
  decrement: counterActions.decrementCounter,
  deleteCounter: counterActions.deleteCounter,
}, dispatch);

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
