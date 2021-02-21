import React from 'react';
import PropTypes from 'prop-types';
import defaultProfileImg from '../../images/defaultProfile.svg';
import profileStyles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
    <div className={profileStyles.profile}>
        <div className="description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                width="320"
                className={profileStyles.avatar}
            />
            <p className={profileStyles.name}>{name}</p>
            <p className={profileStyles.tag}>{tag}</p>
            <p className={profileStyles.location}>{location}</p>
        </div>

        <ul className={profileStyles.stats}>
            <li>
                <span className={profileStyles.label}>Followers</span>
                <span className={profileStyles.quantity}>
                    {stats.followers}
                </span>
            </li>
            <li>
                <span className={profileStyles.label}>Views</span>
                <span className={profileStyles.quantity}>{stats.views}</span>
            </li>
            <li>
                <span className={profileStyles.label}>Likes</span>
                <span className={profileStyles.quantity}>{stats.likes}</span>
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
