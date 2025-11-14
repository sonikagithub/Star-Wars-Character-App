import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Characters from "./pages/Characters";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/characters"
          element={
            <PrivateRoute>
              <Characters />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
