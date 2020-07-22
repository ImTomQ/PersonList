import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="12" name="tom" job="developer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
          aliquid?
        </p>
      </Person>
      <Person img="25" name="mam" job="singleMom"></Person>
      <Person img="32" name="ban" job="tester">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          nesciunt?
        </p>
      </Person>
    </section>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <PersonList />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
