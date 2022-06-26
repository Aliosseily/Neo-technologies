import "./App.css";
import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Restaurant from "./pages/Restaurant";
import RestaurantDetails from "./pages/RestaurantDetails";
import Navbar from "./components/Navbar";

function App() {
  const { isAthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      {!isAthenticated && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      )}
      {isAthenticated && (
        <div>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <>
                  <Navbar title="Dashboard" />
                  <Dashboard />
                </>
              }
            />
            <Route
              path="/restaurant"
              element={
                <>
                  <Navbar title="Restaurants" />
                  <Restaurant />
                </>
              }
            />
            <Route
              path="/restaurant/:id"
              element={
                <>
                  <Navbar title="Details" />
                  <RestaurantDetails />
                </>
              }
            />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
