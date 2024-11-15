// * FETCHING DATA USING "USE" HOOKS

import React from "react";
import { use } from "react";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};
const UseHook = () => {
  const data = use(fetchData());
  return <h1>{data.title}</h1>;
};

export default UseHook;
