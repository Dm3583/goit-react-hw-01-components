import React from 'react';
import PropTypes, { shape } from 'prop-types';
import StatisticsStyles from './Statistics.module.css';

function randomColor() {
    let color = '';
    let count = 3;
    while (count) {
        color += `${Math.floor(Math.random() * 255)} `;
        count--;
    }
    return `rgb(${color})`;
}

const Statistics = ({ title, stats }) => (
    <section className={StatisticsStyles.statistics}>
        {title && <h2 className={StatisticsStyles.title}>{title}</h2>}

        <ul className={StatisticsStyles.statList}>
            {stats.map(stat => (
                <li
                    className={StatisticsStyles.item}
                    key={stat.id}
                    style={{ backgroundColor: randomColor() }}
                >
                    <span className={StatisticsStyles.label}>{stat.label}</span>
                    <span className={StatisticsStyles.percentage}>
                        {stat.percentage}
                    </span>
                </li>
            ))}
        </ul>
    </section>
);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

export default Statistics;
