import React, { Component } from 'react';
import Filters from '../Filters/Filters';
import VisiblePlayerList from '../VisiblePlayerList/VisiblePlayerList';

import './main.css';

class Main extends Component {
  componentDidMount() {
    console.log('');
  }

  render() {
    return (
      <div className="site-content">
        <Filters />
        <VisiblePlayerList />
      </div>
    );
  }
}

export default Main;
