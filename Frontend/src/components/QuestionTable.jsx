import { useState, useEffect } from "react";
import topicsData from "../data/topics";

const QuestionTable = ({ topicName }) => {
  const originalTopic = topicsData.find((t) => t.topic === topicName);
  const [topic, setTopic] = useState(originalTopic);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width and update isMobile state
    const checkMobile = () => setIsMobile(window.innerWidth <= 635);

    checkMobile(); // initial check

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!topic) {
    return (
      <div className="text-red-500 text-lg font-semibold">
        Topic "{topicName}" not found.
      </div>
    );
  }

  const handleToggleDone = (id) => {
    const updatedQuestions = topic.questions.map((q) =>
      q.id === id ? { ...q, done: !q.done } : q
    );
    setTopic({ ...topic, questions: updatedQuestions });
  };

  const getDifficultyColor = (level) => {
    switch (level.toLowerCase()) {
      case "easy":
        return "text-green-600 font-medium";
      case "medium":
        return "text-yellow-600 font-medium";
      case "hard":
        return "text-red-600 font-medium";
      default:
        return "text-gray-600 font-medium";
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-gray-900 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">{topic.topic} Questions</h2>
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 sm:p-3 border">#</th>
            <th className="p-2 sm:p-3 border">Title</th>
            <th className={`p-2 sm:p-3 border ${isMobile ? "hidden" : ""}`}>
              Difficulty
            </th>
            <th className={`p-2 sm:p-3 border ${isMobile ? "hidden" : ""}`}>
              Link
            </th>
            <th className={`p-2 sm:p-3 border ${isMobile ? "hidden" : ""}`}>
              Status
            </th>
            <th className="p-2 sm:p-3 border text-center">Done</th>
          </tr>
        </thead>
        <tbody>
          {topic.questions.map((q, idx) => (
            <tr key={q.id} className="hover:bg-gray-50">
              <td className="p-2 sm:p-3 border">{idx + 1}</td>
              <td className="p-2 sm:p-3 border">
                {isMobile ? (
                  <a
                    href={q.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    {q.name}
                  </a>
                ) : (
                  q.name
                )}
              </td>
              <td
                className={`p-2 sm:p-3 border ${getDifficultyColor(
                  q.difficulty
                )} ${isMobile ? "hidden" : ""}`}
              >
                {q.difficulty}
              </td>
              <td
                className={`p-2 sm:p-3 border text-blue-600 ${
                  isMobile ? "hidden" : ""
                }`}
              >
                <a
                  href={q.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Visit
                </a>
              </td>
              <td className={`p-2 sm:p-3 border ${isMobile ? "hidden" : ""}`}>
                {q.done ? (
                  <span className="text-green-600 font-semibold">Done</span>
                ) : (
                  <span className="text-red-500 font-semibold">Pending</span>
                )}
              </td>
              <td className="p-2 sm:p-3 border text-center">
                <input
                  type="checkbox"
                  checked={q.done}
                  onChange={() => handleToggleDone(q.id)}
                  className="w-5 h-5 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionTable;
