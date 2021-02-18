import React from 'react';

const TransactionItem = ({ type, amount, currency }) => (
    <>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </>
);

export default TransactionItem;
