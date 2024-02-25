import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Project Detail</h1>
      <p>Project ID: {id}</p>
      {/* Proje ayrıntıları */}
    </div>
  );
};

export default ProjectDetail;