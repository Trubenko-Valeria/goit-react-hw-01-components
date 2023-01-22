import css from "./FriendList.module.css";
import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem";
import friends from "../FriendListItem/friends.json";

export default function FriendList({ friend }) {
  return (
    <ul className={css.friend_list}>
      {friends.map((friend) => (
        <div key={friend.id}>
          <FriendListItem 
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </div>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friend: PropTypes.arrayOf(PropTypes.exact({label: PropTypes.string, percentage: PropTypes.number}))};
