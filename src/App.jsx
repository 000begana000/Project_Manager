import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddNewProject(projectData) {
    setProjectsState(preState => {
      const newId = Math.random();
      const newProject = {
        id: newId,
        ...projectData,
      };
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: [newProject, ...preState.projects],
      };
    });
  }

  console.log(projectsState.projects);

  let content;

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onCancel={handleCancelAddProject}
        onAdd={handleAddNewProject}
      />
    );
  }

  return (
    <div className="container">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </div>
  );
}

export default App;
