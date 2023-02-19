import React from "react";

const Experience = ({ exp, ...props }) => {
  console.log(exp);
  return (
    <div className="experience">
      {exp.map((org, index) => (
        <Organisation org={org} key={index}></Organisation>
      ))}
    </div>
  );
};

const Organisation = ({ org, ...props }) => {
  return (
    <div className="organisation">
      <div className="h-10 font-bold text-xl">{org.organisation}</div>
      <>
        {org.positions.map((pos, index) => (
          <Position position={pos} key={index}></Position>
        ))}
      </>
    </div>
  );
};

const Position = ({ position, ...props }) => {
  if (position.end == null) {
    position.end = "Present";
  }
  return (
    <div className="position">
      <div className="text-lg">{position.title}</div>
      <div className="mx-2 text-sm">
        {position.start} - {position.end}
      </div>
      <div className="m-2"></div>
      <div className="text-sm">
        {position.roles.map((role, index) => {
          if (role !== "") {
            return <li className="list-item ml-10">{role}</li>;
          }
        })}
      </div>
    </div>
  );
};

export default Experience;
