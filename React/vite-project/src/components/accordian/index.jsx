import React from "react";
import data from "./data";

function Accordian() {
  return (
    <div>
      <h1>Hello from accordian</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accordian;
