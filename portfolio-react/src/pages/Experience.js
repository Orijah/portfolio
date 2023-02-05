import React from "react";

const Experience = ({ exp, ...props }) => {
  console.log(exp);
  return (
    <>
      {exp.map((org, index) => (
        <Organisation org={org} key={index}></Organisation>
      ))}
    </>
  );
};

const Organisation = ({ org, ...props }) => {
  console.log(org.organisation);
  return (
    <>
      <div>This is an org</div>
      <>
        {org.positions.map((pos, index) => (
          <Position position={pos} key={index}></Position>
        ))}
      </>
    </>
  );
};

const Position = ({ position, ...props }) => {
  return (
    <>
      <div>{position.title}</div>
    </>
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
