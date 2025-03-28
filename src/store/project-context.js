// avoiding prop-drilling
import { createContext } from "react";

export const ProjectContext = createContext({
  selectedProjectId: undefined,
  projects: [],
});
