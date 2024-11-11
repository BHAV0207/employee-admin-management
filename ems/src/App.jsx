import { useState } from "react";
import "./App.css";
import Admin from "./Pages/Admin";
import Employee from "./Pages/Employee";
import Login from "./Pages/Login";

function App() {
  let [user, setUser] = useState(null);

  const Logging = (email, password) => {
    console.log(email);
    console.log(password);
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
    } else if (email == "e@e.com" && password == "123") {
      setUser("employee");
    } else {
      alert("wrong crediantials");
    }
  };

  return (
    <>
      {!user ? <Login login={Logging}></Login> : ""}
      {user == "admin" ? (
        <Admin changeUser={setUser}></Admin>
      ) : user == "employee" ? (
        <Employee changeUser={setUser}></Employee>
      ) : null}
    </>
  );
}

export default App;
