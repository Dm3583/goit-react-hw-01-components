import React from "react";
import defaultProfileImg from "./defaultProfile.svg";

const Profile = ({ name, tag, location, avatar, stats }) => (

    <div className="profile">
        <div className="description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                width="320"
                className="avatar"
            />
            <p className="name">{name}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
);


Profile.defaultProps = {
    avatar: defaultProfileImg
}


export default Profile;