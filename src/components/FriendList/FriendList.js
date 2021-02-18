import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friendsList }) => (
    <ul className="friend-list">
        {friendsList.map(friend => (
            <li className="item" key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            </li>
        ))}
    </ul>
);

export default FriendList;
