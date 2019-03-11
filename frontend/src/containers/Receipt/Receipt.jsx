import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './receipt.css';

export class Receipt extends PureComponent {
  render() {
    const { stakes } = this.props;
    const sum = Object.values(stakes).reduce((a, b) => a + Number(b), 0);

    return (
      <div className="site-content">
        <div className="receipt-card">
          <h2 className="receipt-title">Receipt</h2>
          <p className="receipt-subtitle">Your bet has been placed.</p>
          <span className="receipt-stake">
            Total Stake:
            <span className="sum">{sum}</span>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ stakes }) => ({ stakes });

export default connect(mapStateToProps)(Receipt);
