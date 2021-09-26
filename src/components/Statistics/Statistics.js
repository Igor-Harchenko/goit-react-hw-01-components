import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map(element => (
          <li
            className={styles.item}
            key={element.id}
            style={{
              backgroundColor: `${
                '#' +
                (Math.random().toString(16) + '000000')
                  .substring(2, 8)
                  .toUpperCase()
              }`,
            }}
          >
            <span className={styles.label}>{element.label}</span>
            <span className={styles.percentage}>{element.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;