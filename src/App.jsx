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

  console.log(projectsState.selectedProjectId);

  let content;

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  }

  return (
    <div className="container">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </div>
  );
}

export default App;
