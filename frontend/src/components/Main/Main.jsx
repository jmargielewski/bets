import React from 'react';
import Filters from '../Filters/Filters';
import BetsList from '../../containers/BetsList/BetsList';
import './main.css';

const Main = () => (
  <div className="site-content">
    <Filters />
    <BetsList />
  </div>
);

export default Main;
