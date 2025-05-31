import { useNavigate } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const navigate = useNavigate();
  const questions = Array.isArray(topic.questions) ? topic.questions : [];
  const total = questions.length;
  const done = questions.filter((q) => q.done).length;
  const progress = total > 0 ? (done / total) * 100 : 0;

  return (
    <div
      onClick={() => navigate("/topic", { state: { topicName: topic.topic } })}
      className="
        cursor-pointer
        rounded-xl
        bg-[#e0e0e0]
        shadow-inner shadow-white/70
        p-6
        flex flex-col justify-between
        transition-transform duration-300 ease-in-out
        hover:shadow-lg hover:shadow-indigo-400/40 hover:-translate-y-1
        min-h-[180px]
        font-sans
      "
      style={{
        boxShadow:
          "8px 8px 15px #bebebe, -8px -8px 15px #ffffff", // soft light shadows for neumorphism
      }}
    >
      <h3 className="text-xl font-extrabold mb-3 text-gray-800 flex items-center gap-2 tracking-wide">
        <span role="img" aria-label="coder">
          👨‍💻
        </span>
        {topic.topic}
      </h3>
      <p className="text-sm font-semibold text-gray-600 mb-5 tracking-wide uppercase">
        {done} / {total} Questions Completed
      </p>
      <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-4 rounded-full transition-all duration-500 ease-in-out"
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(90deg, #7f7fd5, #86a8e7, #91eae4)",
            boxShadow: "0 0 10px #91eae4",
          }}
        />
      </div>
    </div>
  );
};

export default TopicCard;
