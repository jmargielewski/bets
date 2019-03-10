import React, { Component } from 'react';
import { connect } from 'react-redux';
import './receipt.css';

class Receipt extends Component {
  componentDidMount() {
    console.log('aaa', this.props.stakes);
  }

  render() {
    // const sum = this.props.stakes.reduce((prev, current) => {}, 0);
    return (
      <div className="site-content">
        <div className="receipt-card">
          <h2>Receipt</h2>
          <h3>Your bet has been placed.</h3>
          <h4>Total Stake: 11</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stakes: state.stakes,
});

export default connect(mapStateToProps)(Receipt);
