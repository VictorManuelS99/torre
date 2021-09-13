import axios from "axios";
import React, { useEffect, useState } from "react";
import { Job } from "../Job/Job";

import "./Jobs.css";

export const Jobs = () => {
  const [jobs, setJobs] = useState();

  const URL =
    "https://search.torre.co/opportunities/_search/?offset=1&size=24&aggregate=1";

  useEffect(() => {
    axios
      .post(URL)
      .then((res) => {
        const { results } = res.data;

        setJobs(results);
        console.log(results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Jobs">
      {jobs && jobs.map((job, i) => <Job key={i} job={job} />)}
    </div>
  );
};
