import React from 'react';
import { Link } from 'react-router-dom';
import './project.scss';

const Project = ({ title, link, text, source, tags, internal = false }) => (
  <div className="paper project">
    <div className="project__title">
      <h3>{title}</h3>
    </div>
    <div className="project__description">
      <p>{text}</p>
    </div>
    <div className="project__footer">
      {internal ? (
        <Link to={link}>Demo</Link>
      ) : (
        <>
          <a href={link}>Demo</a>
          <a href={source}>Source code</a>
        </>
      )}
      <div className="project__tags">
        {tags.map(tag => (
          <div key={tag} className="project__tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Project;
