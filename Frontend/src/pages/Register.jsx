import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import registerImage from "../assets/registerimg.png"; // or use a different image if needed

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/auth/register", form);
      alert("Registered successfully! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f8ff] flex items-center justify-center p-6">
      <div className="bg-white flex flex-col md:flex-row items-center rounded-3xl shadow-xl overflow-hidden max-w-5xl w-full">
        {/* Left - Illustration */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#e8f4ff] p-12">
          <img
            src={registerImage}
            alt="Register Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 p-12">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-extrabold text-[#1e3a8a]">DSA Tracker</h2>
            <p className="text-base text-gray-500 mt-3">
              Create your account
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

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 text-white py-4 text-lg rounded-xl font-semibold hover:bg-blue-800 transition duration-300 disabled:opacity-60"
            >
              {loading ? "Registering..." : "Register"}
            </button>

            <div className="text-center text-base text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Login
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
      </div>
    </div>
  );
};

export default Register;
