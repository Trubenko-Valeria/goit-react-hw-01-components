import css from "./FriendListItem.module.css";
import PropTypes from 'prop-types';

const Styles = {
  backgroundColor: "red",
};

export default function FriendListItem({ avatar, name, isOnline = false }) {
  const getBgColor = variant => {
    switch (variant) {
      case (variant = true):
        return 'green';
      case (variant = false):
        return 'red';
      default:
        throw new Error(`${variant}`);
    }
  };
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ ...Styles, backgroundColor: getBgColor(isOnline) }}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
