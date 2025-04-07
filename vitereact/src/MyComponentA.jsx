import { useState, createContext } from "react";
import MyComponentB from "./MyComponentB";

function MyComponentA() {
  const [user, setUser] = useState("srvenu");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <MyComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}
export const UserContext = createContext();
export default MyComponentA;
