import React from "react";
import { BsCheck, BsX } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { RiSwordFill } from "react-icons/ri";

import "./Person.css";

export const Person = ({ person }) => {
  //Image for users who haven't picture
  const NO_IMAGE = "https://i.imgur.com/nouPAVm.png";

  const URL_BASE = "https://torre.co/en/";

  //name words
  const words = person.name.split(" ");
  //update the name to name with 3 words maximum
  person.name = words[0] + " " + words[1] + " " + (words[2] ? words[2] : "");

  function threeStrongerSkills() {
    const sortedSkills = person.skills.sort((a, b) =>
      a.weight > b.weight ? 1 : a.weight < b.weight ? -1 : 0
    );

    const threeSkills = [
      sortedSkills[sortedSkills.length - 1],
      sortedSkills[sortedSkills.length - 2],
      sortedSkills[sortedSkills.length - 3],
    ];

    return threeSkills;
  }

  return (
    <div className="Person">
      <div className="Person-header">
        <a rel="stylesheet" href={URL_BASE + person.username} target="_blank">
          <img
            src={person.picture ? person.picture : NO_IMAGE}
            alt={person.name + " picture"}
            className="Person-picture"
          />
        </a>

        <div className="Person-name">
          <div>
            <h3>{person.name}</h3>
            {person.verified && <GoVerified />}
          </div>
          <span className="Person-location">{person.locationName}</span>
        </div>
      </div>

      <div className="Person-body">
        <ul className="Person-skills">
          {threeStrongerSkills().map((skill, i) => (
            <div key={i} className="Person-skill">
              <RiSwordFill />
              <p>{skill.name}</p>
            </div>
          ))}
        </ul>
        <div>
          <p className="">
            {person.compensations.employee &&
              person.compensations.employee?.amount +
                " " +
                person.compensations.employee?.currency +
                "/" +
                person.compensations.employee?.periodicity}
          </p>

          <p className="Person-remote">
            <span>Remote:</span>
            {person.remoter ? (
              <BsCheck color="#16ff00" size="20" />
            ) : (
              <BsX color="red" size="20" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
