import axios from "axios";
import React, { useEffect, useState } from "react";
import { Person } from "../Person/Person";

import "./People.css";

export const People = () => {
  const [people, setPeople] = useState();

  const URL =
    "https://search.torre.co/people/_search/?offset=0&size=15&aggregate=0";

  useEffect(() => {
    axios
      .post(URL)
      .then((res) => {
        const { results } = res.data;
        setPeople(results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="People">
      {people &&
        people.map((person, index) => <Person person={person} key={index} />)}
    </div>
  );
};
