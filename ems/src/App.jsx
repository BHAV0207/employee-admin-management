import {  useState } from "react";
import Admin from "./Pages/Admin";
import Employee from "./Pages/Employee";
import Login from "./Pages/Login";
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
