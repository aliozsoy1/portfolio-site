import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://portfolio-api-81h0.onrender.com/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      <h1 className='my-project'>Projelerim</h1>
      <ul className='projects'>
        {projects.map(project => (
          <li key={project.id}>
            <h2 className='project-title'>{project.title}</h2>
            <p className='project-description'>{project.description}</p>
            <p className='project-tags'>Tags: {project.tags.join(', ')}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className='project-link'>Project Link</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;