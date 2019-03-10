import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DECIMAL_ODDS_LESS_THAN_TWO } from '../../redux/actions/types';
import * as actions from '../../redux/actions';
import getPlayers from '../../selector';

import './visiblePlayerList.css';

class VisiblePlayerList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const {
      getBets,
      match: {
        params: { filter },
      },
    } = this.props;
    getBets(filter || DECIMAL_ODDS_LESS_THAN_TWO);
  }

  componentDidUpdate({
    match: {
      params: { filter },
    },
  }) {
    const {
      getBets,
      match: { params },
    } = this.props;
    if (filter !== params.filter) {
      getBets(params.filter);
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
    const { players } = this.props;

    return (
      <div>
        <h2>List of bets</h2>
        <ul className="player-list">
          {players
            && players.map(player => (
              <li key={player.name} className="player-item">
                <div className="player-card">
                  <h2>{player.name}</h2>
                  <h5>
                    Best Odds Decimal:
                    {player.maxOdds}
                  </h5>
                  <input
                    name={player.map}
                    type="number"
                    onChange={this.onChange}
                  />
                </div>
              </li>
            ))}
        </ul>
        <button type="button" className="button js-add" onClick={this.onClick}>
          Bet Now
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: getPlayers(state),
});

export default withRouter(
  connect(
    mapStateToProps,
    actions,
  )(VisiblePlayerList),
);
