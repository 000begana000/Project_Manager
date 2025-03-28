import { useState } from "react";

import { ProjectContext } from "./store/project-context";

import ProjectSidebar from "./components/ProjectSidebar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

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

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
    console.log(projectsState.selectedProjectId);
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          project => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    project => project.id === projectsState.selectedProjectId
  );

  console.log(projectsState.projects);

  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );

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
    <ProjectContext
      value={{
        selectedProjectId: undefined,
        projects: [],
      }}
    >
      <div className="container">
        <ProjectSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          onSelect={handleSelectProject}
        />
        {content}
      </div>
    </ProjectContext>
  );
}

export default App;
