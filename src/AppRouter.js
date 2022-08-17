import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

const AppRouter = () => {
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("hi");

    if (!token) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
