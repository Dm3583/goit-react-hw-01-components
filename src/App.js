import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

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
