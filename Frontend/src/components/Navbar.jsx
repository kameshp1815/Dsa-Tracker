import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="w-full px-6 py-4 sm:px-10 bg-[#0a0a23] border-b border-cyan-500/20 shadow-md flex items-center justify-between">
      <div className="text-3xl sm:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
        DSA Tracker
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLogout}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-5 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 active:scale-95"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
