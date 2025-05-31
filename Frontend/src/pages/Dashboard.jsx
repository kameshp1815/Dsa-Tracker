// src/pages/Dashboard.jsx
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "../api/axios";
import TopicCard from "../components/TopicCard";
import topics from "../data/topics";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/user/progress");
        setProgressData(res.data);
        setLoading(false);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Failed to load progress data.");
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);


  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-indigo-600 font-semibold bg-indigo-50">
        Loading user...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-indigo-50 py-10 px-6 sm:px-10 lg:px-16 flex flex-col">
        <div className="flex-grow bg-white rounded-none shadow-none p-8 sm:p-12 overflow-auto">
          <header className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4 sm:gap-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 tracking-tight">
              Welcome, <span className="capitalize">{user.email}</span>
            </h1>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">Your DSA Progress</h2>
            {loading ? (
              <p className="text-indigo-600">Loading progress...</p>
            ) : error ? (
              <p className="text-red-600 font-semibold">{error}</p>
            ) : progressData ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg shadow text-center">
                  <p className="text-4xl font-bold text-indigo-700">{progressData.totalQuestions}</p>
                  <p className="text-indigo-600 mt-1">Total Questions</p>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg shadow text-center">
                  <p className="text-4xl font-bold text-indigo-700">{progressData.solvedQuestions}</p>
                  <p className="text-indigo-600 mt-1">Solved</p>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg shadow text-center">
                  <p className="text-4xl font-bold text-indigo-700">{progressData.pendingQuestions}</p>
                  <p className="text-indigo-600 mt-1">Pending</p>
                </div>
              </div>
            ) : (
              <p className="text-indigo-600">No progress data available.</p>
            )}
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">Topics</h2>
            {/* Updated grid here to have 3 columns on md screens and up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {topics.map((topic, index) => (
                <TopicCard
                  key={index}
                  topic={topic}
                  onClick={() => navigate("/topic", { state: { topic } })}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
