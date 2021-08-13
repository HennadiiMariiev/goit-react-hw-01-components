import React from 'react';
import PropTypes from 'prop-types';

import '../FriendsList/FriendsList.scss';

class FriendsListItem extends React.Component {
  render() {
    const { id, friendName, avatar, isOnline } = this.props;

    return (
      <li className="friends__item" key={id}>
        {isOnline ? (
          <span className="friends__status online"></span>
        ) : (
          <span className="friends__status offline"></span>
        )}
        <img className="friends__avatar" src={avatar} alt="" width="48" />
        <p className="friends__name">{friendName}</p>
      </li>
    );
  }
}

class FriendsList extends React.Component {
  render() {
    const friendsItems = this.props.friends.map(({ id, name, avatar, isOnline }, index) => {
      return <FriendsListItem key={id} friendName={name} avatar={avatar} isOnline={isOnline} />;
    });

    return <ul className="friends">{friendsItems}</ul>;
  }
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
