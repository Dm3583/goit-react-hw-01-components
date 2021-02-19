import React from 'react';
import PropTypes from 'prop-types';
import defaultProfileImg from './defaultProfile.svg';
import ProfileStyles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
    <div className={ProfileStyles.profile}>
        <div className="description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                width="320"
                className={ProfileStyles.avatar}
            />
            <p className={ProfileStyles.name}>{name}</p>
            <p className={ProfileStyles.tag}>{tag}</p>
            <p className={ProfileStyles.location}>{location}</p>
        </div>

        <ul className={ProfileStyles.stats}>
            <li>
                <span className={ProfileStyles.label}>Followers</span>
                <span className={ProfileStyles.quantity}>
                    {stats.followers}
                </span>
            </li>
            <li>
                <span className={ProfileStyles.label}>Views</span>
                <span className={ProfileStyles.quantity}>{stats.views}</span>
            </li>
            <li>
                <span className={ProfileStyles.label}>Likes</span>
                <span className={ProfileStyles.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.defaultProps = {
    avatar: defaultProfileImg,
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

export default Profile;
