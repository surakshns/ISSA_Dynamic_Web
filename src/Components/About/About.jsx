import React from "react";
import Row from "./Row";

function about(props) {
  return (
    <section id="about" className="section-about">
      <h2 className="heading-secondary u-margin-bottom-big">
        Know more about ISSA
      </h2>
      <Row
        heading="What is ISSA?"
        para="Information system security association (ISSA) is the student club
            of NIE whose primary focus is cyber security and deals with bridging
            it with the state-of-the-art technologies."
      />
      <Row
        heading="Why join ISSA?"
        para="We aim to improve and encourage the growth of students in various
            technological domains. Here at ISSA, we focus on various technical,
            vocational and recreational activities dealing with computer
            science, information technology and information security. We provide
            several opportunities for students to showcase their expertise
            through a number of contests and also help students to learn
            technology the practical way."
      />
    </section>
  );
}

export default about;
