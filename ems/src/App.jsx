import { useEffect, useState } from "react";
import "./App.css";
import Admin from "./Pages/Admin";
import Employee from "./Pages/Employee";
import Login from "./Pages/Login";
import { setLocalStorage } from "./LocalStorage/LocalStorage";

function App() {
  let [user, setUser] = useState(null);

  useEffect(() => {
    setLocalStorage();
  } , [])


  useEffect(() => {
    const currentUser = localStorage.getItem('loggedInUser');
    if(currentUser){
      const currUser = JSON.parse(currentUser);
      setUser(currUser.role);
    }
  })



  const Logging = (email, password) => {
    console.log(email);
    console.log(password);
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem('loggedInUser' , JSON.stringify({role : 'admin'}))
    } else if (email == "e@e.com" && password == "123") {
      setUser("employee");
      localStorage.setItem('loggedInUser' , JSON.stringify({role : 'employee'}))
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
