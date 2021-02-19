import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import FriendListStyles from './FriendList.module.css';

const FriendList = ({ friendsList }) => (
    <ul className={FriendListStyles.friendList}>
        {friendsList.map(friend => (
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        ))}
    </ul>
);

FriendList.propTypes = {
    friendsList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

export default FriendList;
