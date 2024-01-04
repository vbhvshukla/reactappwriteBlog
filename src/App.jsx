import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
function App() {
  //Loading is true or not
  const [loading, setLoading] = useState(true);
  //Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div className="scroll-smooth min-h-screen flex flex-wrap content-between bg-slate-100">
      <div className="w-full block">
        <Header />
        <Outlet/>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
