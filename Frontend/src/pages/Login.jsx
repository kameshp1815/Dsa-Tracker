import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import loginImage from "../assets/loginimg.png";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      const message = err.response?.data?.message?.toLowerCase() || "login failed";

      if (message.includes("not exist") || message.includes("no user") || message.includes("unregistered")) {
        alert("Please register first.");
      } else if (message.includes("incorrect") || message.includes("wrong") || message.includes("invalid password")) {
        alert("Incorrect password.");
      } else {
        alert("Login failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e6f7f4] flex items-center justify-center p-6">
      <div className="bg-white flex flex-col md:flex-row items-center rounded-3xl shadow-xl overflow-hidden max-w-5xl w-full">
        {/* Left - Form */}
        <div className="w-full md:w-1/2 p-12">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-extrabold text-[#1e3a8a]">DSA Tracker</h2>
            <p className="text-base text-gray-500 mt-3">
              Welcome back! Please login
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 pr-14 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="text-right text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 text-white py-4 text-lg rounded-xl font-semibold hover:bg-blue-800 transition duration-300 disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center justify-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  <span>Logging in...</span>
                </span>
              ) : (
                "Login"
              )}
            </button>

            <div className="text-center text-base text-gray-600">
              No account yet?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register
              </a>
            </div>

            <div className="flex justify-center space-x-5 pt-4">
              <button type="button" className="p-3 bg-gray-100 rounded-full hover:shadow-md">
                <img src="https://img.icons8.com/ios-filled/28/github.png" alt="GitHub" />
              </button>
              <button type="button" className="p-3 bg-gray-100 rounded-full hover:shadow-md">
                <img src="https://img.icons8.com/ios-filled/28/twitter.png" alt="Twitter" />
              </button>
              <button type="button" className="p-3 bg-gray-100 rounded-full hover:shadow-md">
                <img src="https://img.icons8.com/color/28/facebook-new.png" alt="Facebook" />
              </button>
              <button type="button" className="p-3 bg-gray-100 rounded-full hover:shadow-md">
                <img src="https://img.icons8.com/color/28/google-logo.png" alt="Google" />
              </button>
            </div>
          </form>
        </div>

        {/* Right - Illustration */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#f0faff] p-12">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
