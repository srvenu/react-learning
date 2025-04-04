import React, { userState } from "react";

function MyComponent() {
  const [name, setName] = userState();
  const updateName = (e) => {
    name = "Venu SR";
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
    </div>
  );
}

export default MyComponent;
