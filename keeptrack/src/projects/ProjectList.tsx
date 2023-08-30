import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';
import { convertTypeAcquisitionFromJson } from 'typescript';

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project) => {
    console.log(`ProjectList#handleEdit(project = ${JSON.stringify(project)})`);
    setProjectBeingEdited(project);
  };
  const cancelEditing = () => {
    console.log(`ProjectList#cancelEditing()`);
    setProjectBeingEdited({});
  };
  console.log(`ProjectList#render(projectBeingEdited = ${JSON.stringify(projectBeingEdited)})`);
  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {/* <ProjectCard project={project} onEdit={handleEdit}>
            <p>Test Children 1</p>
            <p>Test Children 2</p>
          </ProjectCard> */}
          {project === projectBeingEdited ? (
            <ProjectForm project={project} onCancel={cancelEditing} onSave={onSave} />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}          
        </div>
      ))}
    </div>
  );
}

export default ProjectList;