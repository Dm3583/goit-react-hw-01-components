import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './user.json';
import statisticalData from './statistical-data.json';

const App = () => (
    <div>
        <h1>react-homework-01</h1>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            // avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
    </div>
);

export default App;
