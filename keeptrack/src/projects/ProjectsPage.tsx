import React, { useState } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';

function ProjectsPage({ title }: { title?: string }) {
  //return <h1>Projects</h1>;  
  //const projectDivs = MOCK_PROJECTS.map((p) => <div>{p.name} - {p.description}</div>);
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const saveProject = (project: Project) => {
    // console.log(`Saving ${project.name}`);
    let updatedProjects = projects.map((p: Project) => {
       return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  };
  return (
    <>
      <h1>Projects</h1>
      <div>{title}</div>
      <ProjectList projects={projects} onSave={saveProject} />
    </>
  );
}

export default ProjectsPage;