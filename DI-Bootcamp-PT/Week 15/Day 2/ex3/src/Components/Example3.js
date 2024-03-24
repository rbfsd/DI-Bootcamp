import React, { Component } from "react";
import data from "../data.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((exp, index) => (
          <div key={index}>
            <h3>{exp.companyName}</h3>
            <p>{exp.roles[0].title}</p>
            <p>{exp.roles[0].description}</p>
            <p>
              {exp.roles[0].startDate} - {exp.roles[0].endDate}
            </p>
            <p>{exp.roles[0].location}</p>
            <a href={exp.url}>
              <img src={exp.logo} alt={exp.companyName} />
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
