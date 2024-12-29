import { useEffect, useState } from "react";
import Admin from "./Pages/Admin";
import Employee from "./Pages/Employee";
import Login from "./Pages/Login";
import { getLocalStorage, setLocalStorage } from "./LocalStorage/LocalStorage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  let [userId, setUserId] = useState(null);
  let [currentLoggedInUsersData, setCurrentLoggedInUsersData] = useState(null);

  let [allUserData, setAllUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();

    const { employees } = getLocalStorage();
    setAllUserData(employees);
  }, []);

  useEffect(() => {
    const currentUser = localStorage.getItem("loggedInUser");
    if (currentUser) {
      const currUser = JSON.parse(currentUser);
      setCurrentLoggedInUsersData(currUser.data);
    }
  }, []);

  // const Logging = (email, password) => {
  //   if (email == "admin@e.com" && password == "123") {
  //     setUser("admin");
  //     localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
  //   } else if (allUserData) {
  //     const specificEmployee = allUserData.find(
  //       (e) => e.email == email && e.password == password
  //     );
  //     if (specificEmployee) {
  //       setUser("employee");
  //       setCurrentLoggedInUsersData(specificEmployee);
  //       localStorage.setItem(
  //         "loggedInUser",
  //         JSON.stringify({ role: "employee", data: specificEmployee })
  //       );
  //     }
  //   } else {
  //     alert("wrong crediantials");
  //   }
  // };

  const handelUpdatingTask = (updatedAllUserData) => {
    setAllUserData(updatedAllUserData);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUserId={setUserId}></Login>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
        <Route
          path="/employee"
          element={
            <ProtectedRoutes
              role="user"
              element={<Employee userId={userId}></Employee>}
            ></ProtectedRoutes>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes
              role="admin"
              element={<Admin></Admin>}
            ></ProtectedRoutes>
          }
        />
        <Route path="*" element={<Navigate to={"/"} replace></Navigate>} />
      </Routes>
    </Router>
  );
}

export default App;
