import React from "react";
import { useParams } from "react-router-dom";
import { allProjects } from "../../../data/projects/Index";
import PersonalProjectDetails from "../components/PersonalProjectDetails";
import ProjectNotFound from "../components/ProjectNotFound";
import type { PersonalProject } from "../../../types/PersonalProjectDetails";

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = Object.values(allProjects).find((p) => p.id === id) as PersonalProject | undefined;

  if (!project) {
    return <ProjectNotFound id={id || "unknown"} />;
  }

  return <PersonalProjectDetails project={project} />;
};

export default WorkDetail;
