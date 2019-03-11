import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  DECIMAL_ODDS_LESS_THAN_TWO,
  DECIMAL_ODDS_MORE_THAN_TWO,
} from '../../redux/actions/types';
import './filter.css';

const Filters = () => (
  <div className="dropdown-wrap">
    <div className="dropdown">
      <button className="dropdown-toggle" type="button">
        Filters
      </button>
      <div className="dropdown-menu">
        <NavLink className="dropdown-item" to={DECIMAL_ODDS_LESS_THAN_TWO}>
          Less than 2
        </NavLink>
        <NavLink className="dropdown-item" to={DECIMAL_ODDS_MORE_THAN_TWO}>
          More than 2
        </NavLink>
      </div>
    </div>
  </div>
);

export default Filters;
