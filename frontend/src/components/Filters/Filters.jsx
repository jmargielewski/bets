import React from 'react';
import FilterLink from './FilterLink';
import { DECIMAL_ODDS_LESS_THAN_TWO, DECIMAL_ODDS_MORE_THAN_TWO } from '../../redux/actions/types';

const Filters = () => (
  <p>
    Choose filter:
    {' '}
    <FilterLink filter={DECIMAL_ODDS_LESS_THAN_TWO}>
      <button style={{ padding: 10 }}>Less than 2</button>
    </FilterLink>
    {'  '}
    <FilterLink filter={DECIMAL_ODDS_MORE_THAN_TWO}>
      <button style={{ padding: 10 }}>More than 2</button>
    </FilterLink>
  </p>
);

export default Filters;
