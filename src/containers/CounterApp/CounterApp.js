import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CounterForm from 'components/CounterForm/CounterForm';
import Counters from 'components/Counters/Counters';
import * as counterActions from 'actions/counterActions';
import * as uiActions from 'actions/uiActions';

const StyledApp = styled.main`
  margin: 0 auto;
  width: 400px;
`;

class App extends PureComponent {
  static propTypes = {
    getCounters: PropTypes.func.isRequired,
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    deleteCounter: PropTypes.func.isRequired,
    addCounter: PropTypes.func.isRequired,
    updateText: PropTypes.func.isRequired,

    counters: PropTypes.arrayOf(PropTypes.object),
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    counters: [],
  };

  componentDidMount() {
    const { getCounters } = this.props;
    getCounters();
  }

  onAdd = (e) => {
    e.preventDefault();

    const { addCounter, text } = this.props;

    if (text) {
      addCounter(text);
    }
  }

  onDelete = id => () => {
    const { deleteCounter } = this.props;
    deleteCounter(id);
  };

  onDecrement = id => () => {
    const { decrementCounter } = this.props;
    decrementCounter(id);
  };

  onIncrement = id => () => {
    const { incrementCounter } = this.props;
    incrementCounter(id);
  };

  onUpdateText = ({ target }) => {
    const { updateText } = this.props;
    updateText(target.value);
  }

  render() {
    const { counters, text } = this.props;

    return (
      <StyledApp>
        <CounterForm
          onChange={this.onUpdateText}
          onSubmit={this.onAdd}
          text={text}
        />
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
  text: state.ui.text,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCounters: counterActions.fetchCounters,
  incrementCounter: counterActions.incrementCounter,
  decrementCounter: counterActions.decrementCounter,
  deleteCounter: counterActions.deleteCounter,
  addCounter: counterActions.addCounter,
  updateText: uiActions.updateText,
}, dispatch);

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
