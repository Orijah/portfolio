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
      <div>{position.title}</div>
      <div className="w-30 mx-2 text-sm">
        {position.start} - {position.end}
      </div>
    </div>
  );
};

// company
//    position 1
//    position 2
//    position 3

// position:
// start/end
// role
// responsibilities -> list of dot points

export default Experience;
