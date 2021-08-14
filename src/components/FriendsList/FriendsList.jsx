import React from 'react';
import PropTypes from 'prop-types';

import '../FriendsList/FriendsList.scss';

function FriendsListItem(props) {
  const { id, friendName, avatar, isOnline } = props;

  return (
    <li className="friends__item" key={id}>
      {isOnline ? <span className="friends__status online"></span> : <span className="friends__status offline"></span>}
      <img className="friends__avatar" src={avatar} alt="" width="48" />
      <p className="friends__name">{friendName}</p>
    </li>
  );
}

function FriendsList(props) {
  const friendsItems = props.friends.map(({ id, name, avatar, isOnline }) => {
    return <FriendsListItem key={id} friendName={name} avatar={avatar} isOnline={isOnline} />;
  });

  return <ul className="friends">{friendsItems}</ul>;
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
    })
  ),
};

export default FriendsList;
