import React from 'react';

import Project from '../../components/Project';
import Tabs from '../../components/Tabs';

import {internalProjects, externalProjects} from './projectList';

import './projects.scss';

const Projects = () => (
  <div className="projects">
    <Tabs labels={['External projects', 'On site projects',]} noPaper>
      <div className="projects__container">
        {externalProjects.map(projectInfo => (
          <Project {...projectInfo} />
        ))}
      </div>
      <div className="projects__container">
        {internalProjects.map(projectInfo => (
          <Project {...projectInfo} internal/>
        ))}
      </div>
    </Tabs>
  </div>
);

export default Projects;
