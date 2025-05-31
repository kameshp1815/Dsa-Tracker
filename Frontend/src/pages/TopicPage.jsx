import { useLocation, useNavigate } from "react-router-dom";
import QuestionTable from "../components/QuestionTable";
import Navbar from "../components/Navbar";

const TopicPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const topicName = location.state?.topicName;

  if (!topicName) {
    return <div className="text-red-500 text-center mt-10">No topic selected.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 pt-20">
        {/* Added pt-20 to push content below fixed navbar */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          aria-label="Back to Dashboard"
        >
          ← Back to Dashboard
        </button>
        <QuestionTable topicName={topicName} />
      </div>
    </>
  );
};

export default TopicPage;
