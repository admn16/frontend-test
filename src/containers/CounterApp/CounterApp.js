import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CounterForm from 'components/CounterForm/CounterForm';
import { fetchCounters } from 'actions/counterActions';

const StyledApp = styled.main`
  margin: 0 auto;
  width: 400px;
`;

class App extends PureComponent {
  static propTypes = {
    getCounters: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getCounters } = this.props;
    getCounters();
  }

  render() {
    console.log(this.props);
    return (
      <StyledApp>
        <CounterForm />

        <article>
          <div>
            <button type="button">[ x ]</button>
            <span>Name of Counter</span>

            <button type="button">+</button>
            <span>0</span>
            <button type="button">-</button>
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

const mapStateToProps = state => ({
  counters: state.counters,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCounters: fetchCounters,
}, dispatch);

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
