import React from 'react';
import PropTypes from 'prop-types';
import defaultProfileImg from './defaultProfile.svg';
import FriendListItemStyles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    const status = isOnline
        ? FriendListItemStyles.online
        : FriendListItemStyles.offline;
    return (
        <li className={FriendListItemStyles.item}>
            <span className={status}></span>
            <img
                className={FriendListItemStyles.avatar}
                src={avatar}
                alt={name}
                width="48"
            />
            <p className={FriendListItemStyles.name}>{name}</p>
        </li>
    );
};

FriendListItem.defaultProps = {
    avatar: defaultProfileImg,
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
