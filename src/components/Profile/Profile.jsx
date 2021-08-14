import React from 'react';
import PropTypes from 'prop-types';

import '../Profile/Profile.scss';

function Profile (props) {
    const { userName, tag, location, avatar, stats } = props;
    const { followers, views, likes } = stats;

    return (
      <div className="profile">
        <div className="profile__description">
          <img src={avatar} alt="Аватар пользователя" className="profile__avatar" />
          <p className="profile__name">{userName}</p>
          <p className="profile__tag">@{tag}</p>
          <p className="profile__location">{location}</p>
        </div>

        <ul className="stats">
          <li className="stats__item">
            <span className="stats__label">Followers</span>
            <span className="stats__quantity">{followers}</span>
          </li>
          <li className="stats__item">
            <span className="stats__label">Views</span>
            <span className="stats__quantity">{views}</span>
          </li>
          <li className="stats__item">
            <span className="stats__label">Likes</span>
            <span className="stats__quantity">{likes}</span>
          </li>
        </ul>
      </div>
    );
}

Profile.propTypes = {
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
