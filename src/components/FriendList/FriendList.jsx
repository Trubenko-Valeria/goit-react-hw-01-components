import css from "./FriendList.module.css";
import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem";
import friend from "../FriendListItem/friends.json";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friend.map((friends) => (
          <FriendListItem 
            avatar={friends.avatar}
            name={friends.name}
            isOnline={friends.isOnline}
          />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
