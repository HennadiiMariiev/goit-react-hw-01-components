import React from 'react';
import PropTypes from 'prop-types';

import '../TransactionHistory/TransactionHistory.scss';

function TransactionHistory(props) {
  const transactionRows = props.items.map(({ id, type, amount, currency }) => {
    return (
      <tr className="transaction-history__row" key={id}>
        <td className="transaction-history__cell">{type}</td>
        <td className="transaction-history__cell">{amount}</td>
        <td className="transaction-history__cell">{currency}</td>
      </tr>
    );
  });

  return (
    <table className="transaction-history">
      <thead className="transaction-history__head">
        <tr className="transaction-history__row">
          <th className="transaction-history__cell">Type</th>
          <th className="transaction-history__cell">Amount</th>
          <th className="transaction-history__cell">Currency</th>
        </tr>
      </thead>

      <tbody className="transaction-history__body">{transactionRows}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      id: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
