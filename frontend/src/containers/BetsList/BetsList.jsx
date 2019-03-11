import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DECIMAL_ODDS_LESS_THAN_TWO } from '../../redux/actions/types';
import * as actions from '../../redux/actions';
import getBets from '../../selector';

import './betsList.css';

class BetsList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const {
      fetchBets,
      match: {
        params: { filter },
      },
    } = this.props;
    fetchBets(filter || DECIMAL_ODDS_LESS_THAN_TWO);
  }

  componentDidUpdate({
    match: {
      params: { filter },
    },
  }) {
    const {
      fetchBets,
      match: { params },
    } = this.props;
    if (filter !== params.filter) {
      fetchBets(params.filter);
    }
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onClick = () => {
    const { saveStake, history } = this.props;
    saveStake(this.state);
    history.push('/receipt');
  };

  render() {
    const { bets } = this.props;
    return (
      <div>
        <hr />
        <ul className="bets-list">
          {bets
            && bets.map(bet => (
              <li key={bet.name} className="bets-item">
                <div className="bets-card">
                  <div>
                    <h2 className="bets-title">{bet.name}</h2>
                    <p className="bets-subtitle">
                      Best Odds Decimal-
                      <span className="odds">{bet.maxOdds}</span>
                    </p>
                  </div>
                  <input
                    min="0"
                    type="number"
                    name={bet.map}
                    className="bets-input"
                    placeholder="Set Stake"
                    onChange={this.onChange}
                  />
                </div>
              </li>
            ))}
        </ul>
        <button type="button" className="button" onClick={this.onClick}>
          Place Bet
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ bets: getBets(state) });

export default withRouter(
  connect(
    mapStateToProps,
    actions,
  )(BetsList),
);
