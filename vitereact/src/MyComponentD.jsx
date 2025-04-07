import React, { useContext } from "react";

import { UserContext } from "./MyComponentA";
function MyComponentD() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}

export default MyComponentD;
