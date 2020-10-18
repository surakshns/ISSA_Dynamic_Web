import React from "react";
import Card from "./Card";

function team(props) {
  const teammates = [
    [
      { name: "Balachandra DS", position: "President" },
      { name: "Sambhav K Bhandari", position: "Vice President" },
    ],
    [
      { name: "Soumya Sai Nanduri", position: "Secretary/Treasurer" },
      { name: "Ruthik Raj N", position: "Event Management Lead" },
      { name: "H G Saathvik", position: "Editor-In-Chief" },
    ],
    [
      { name: "Suraksh N S", position: "Technical Lead" },
      { name: "Nimisha Bellur", position: "Creative Team Lead" },
      { name: "Khushi S", position: "Logistics Lead" },
    ],
  ];

  return (
    <section id="team" className="section-team">
      <h2 className="heading-secondary u-margin-bottom-big"> Meet the team </h2>
      <div className="team-flex-box">
        {teammates[0].map((teammate) => {
          return (
            <Card
              key={teammate.name}
              name={teammate.name}
              position={teammate.position}
            />
          );
        })}
      </div>

      <div className="team-flex-box">
        {teammates[1].map((teammate) => {
          return (
            <Card
              key={teammate.name}
              name={teammate.name}
              position={teammate.position}
            />
          );
        })}
      </div>

      <div className="team-flex-box">
        {teammates[2].map((teammate) => {
          return (
            <Card
              key={teammate.name}
              name={teammate.name}
              position={teammate.position}
            />
          );
        })}
      </div>
    </section>
  );
}

export default team;
