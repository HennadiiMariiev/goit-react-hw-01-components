import React from 'react';
import PropTypes from 'prop-types';

import '../Statistics/Statistics.scss';

function Statistics (props) {
    const statLiItems = props.stats.map(({ id, label, percentage }, index) => {
      return (
        <li className="item" key={id} colorpointer={'pointer' + index}>
          <span className="item__label">{label}</span>
          <span className="item__percentage">{percentage}%</span>
        </li>
      );
    });

    return (
      <section className="statistics">
        {props.title && <h2 className="statistics__title">{props.title}</h2>}

        <ul className="stat-list">{statLiItems}</ul>
      </section>
    );
}

Statistics.defaulProps = {
  title: null,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
