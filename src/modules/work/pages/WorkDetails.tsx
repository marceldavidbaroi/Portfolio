import React from "react";
import { useParams } from "react-router-dom";
import { allProjects } from "../../../data/projects/Index";
import PersonalProjectDetails from "../components/PersonalProjectDetails";
import CompanyProjectDetails from "../components/CompanyProjectDetails";
import ProjectNotFound from "../components/ProjectNotFound";
import type { PersonalProject } from "../../../types/PersonalProjectDetails";
import type { CompanyProject } from "../../../types/CompanyProjectDetails";

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = Object.values(allProjects).find((p) => p.id === id);

  if (!project) {
    return <ProjectNotFound id={id || "unknown"} />;
  }

  // Use project?.type check
  if (project?.type === "company" ) {
    return <CompanyProjectDetails project={project as CompanyProject} />;
  } else if (project?.type === "personal" ){
    return <PersonalProjectDetails project={project as PersonalProject} />;
  }
};

export default WorkDetail;
