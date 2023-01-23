import css from './Statistics.module.css';
import PropTypes from 'prop-types';
// import randomColor from "randomcolor";

export default function Statistics({ title, stats }) {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(time => (
          <li
            className={css.item}
            key={time.id}
            style={{ backgroundColor: randomColor }}
          >
            <span className={css.label}>{time.label}</span>
            <br></br>
            <span className={css.percentage}>
              {time.percentage}
              &#37;
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
