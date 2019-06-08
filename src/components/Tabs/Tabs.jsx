import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './tabs.scss';

const Tabs = ({ labels, children, noPaper = false }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tabs">
      <div
        className={`${noPaper ? '' : 'paper '}tabs__header-container ${
          noPaper ? ' tabs__header-container--clear' : ''
        }`}
        style={{ gridTemplateColumns: `repeat(${labels.length}, auto) 1fr` }}
      >
        {labels.map((label, index) => (
          <div
            key={label}
            className={`tabs__header ${index === activeTab ? 'tabs__header--active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <p className="tabs__header-text">{label}</p>
          </div>
        ))}
      </div>
      <div className={`${noPaper ? '' : 'paper '}tabs__content`}>
        {activeTab < children.length && children[activeTab]}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.node)
};

export default Tabs;
