import React from "react";

import Body from "../components/Body";

const Experience = ({ exp, ...props }) => {
  console.log(exp);
  return (
    <Body>
      <div>
        {exp.map((org, index) => (
          <Organisation org={org} key={index}></Organisation>
        ))}
      </div>
    </Body>
  );
};

const Organisation = ({ org, ...props }) => {
  return (
    <div className="organisation">
      <div>{org.organisation}</div>
      <>
        {org.positions.map((pos, index) => (
          <Position position={pos} key={index}></Position>
        ))}
      </>
    </div>
  );
};

const Position = ({ position, ...props }) => {
  return (
    <div className="position">
      <div>{position.title}</div>
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
