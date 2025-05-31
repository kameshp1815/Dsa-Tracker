import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      navigate("/dashboard"); // create this route later
    } catch (err) {
      alert(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md max-w-md w-full space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
