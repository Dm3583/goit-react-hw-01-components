import React from 'react';
import TransactionItem from '../TransactionItem/TransactionItem';

const TransactionHistory = ({ items }) => (
    <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => (
                <tr key={item.id}>
                    <TransactionItem
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                </tr>
            ))}
        </tbody>
    </table>
);

export default TransactionHistory;
