import React from "react";

const ProjectCard = ({ name, live, created, image }) => {
  return (
    <div>
      <div>{name}</div>
      <img alt={name} src={image} />
    </div>
  );
};

export default ProjectCard;
