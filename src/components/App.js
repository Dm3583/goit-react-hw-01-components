import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => (
    <div>
        <h1>react-homework-01</h1>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
        <FriendList friendsList={friends} />
        <TransactionHistory items={transactions} />
    </div>
);

export default App;
