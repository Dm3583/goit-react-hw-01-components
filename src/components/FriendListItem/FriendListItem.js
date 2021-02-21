import React from 'react';
import PropTypes from 'prop-types';
import defaultProfileImg from '../../images/defaultProfile.svg';
import friendListItemStyles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    const status = isOnline
        ? friendListItemStyles.online
        : friendListItemStyles.offline;
    return (
        <li className={friendListItemStyles.item}>
            <span className={status}></span>
            <img
                className={friendListItemStyles.avatar}
                src={avatar}
                alt={name}
                width="48"
            />
            <p className={friendListItemStyles.name}>{name}</p>
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
