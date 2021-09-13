import React from "react";
import { TiWorld } from "react-icons/ti";
import { IoAddOutline } from "react-icons/io5";

import "./Job.css";

export const Job = ({ job }) => {
  const createdDate = new Date(job.created).toLocaleDateString();
  const deadLine = new Date(job.deadline).toLocaleDateString();

  const compensation = job.compensation.data;
  const existsAmount = job.compensation && job.compensation.data;

  const amount =
    existsAmount &&
    compensation.currency +
      " " +
      (compensation.minAmount ? compensation.minAmount : " ?") +
      " - " +
      compensation.currency +
      " " +
      (compensation.maxAmount ? compensation.maxAmount : " ?");

  return (
    <div className="Job">
      <h3>{job.objective}</h3>
      {job.organizations.length > 0 && <h4>{job.organizations[0].name}</h4>}
      <div className="Job-body">
        <div className="Job-info">
          {job.remote && (
            <div className="Job-remote">
              <TiWorld /> <p>Remote</p>
            </div>
          )}

          <p className="Job-compensation">{amount}</p>

          {job.questions.length > 0 && (
            <button className="Job-questions">Questions</button>
          )}
          <div className="Job-time">
            <p>Created: {createdDate}</p>
            <p>Expire: {deadLine}</p>
          </div>
        </div>
        <ul className="Job-skills">
          {job.skills.map((skill, i) =>
            i < 5 ? (
              <li key={i} className="Job-skill">
                <p>{skill.name}</p>
                <IoAddOutline />
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};
