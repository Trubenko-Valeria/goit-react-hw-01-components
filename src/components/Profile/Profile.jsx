import css from './Profile.module.css';
import PropTypes from 'prop-types';

export default function Profile({
  username = 'Anonymous',
  tag = '---',
  location = 'Unknown',
  avatar = 'https://cdn-icons-png.flaticon.com/512/983/983285.png?w=740&t=st=1673538539~exp=1673539139~hmac=1ad80d969864e5eb1147716e10eba624efb4100cb66fd430f952efccd65bed37',
  stats,
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      {/* List of stats */}

      <ul className={css.stats}>
        <li className={css.list_stats}>
          <span className={css.label}>Followers</span> <br></br>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.list_stats}>
          <span className={css.label}>Views</span> <br></br>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.list_stats}>
          <span className={css.label}>Likes</span> <br></br>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
