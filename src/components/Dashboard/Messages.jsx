
import { MessageSquare, Clock } from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "John Smith",
    message: "Hey, could you check the latest invoice?",
    time: "2 minutes ago",
    color: "var(--chart-1)",
    bgColor: "var(--secondary)",
  },
  {
    id: 2,
    sender: "Emma Wilson",
    message: "The new feature looks great! Let’s deploy it.",
    time: "8 minutes ago",
    color: "var(--chart-2)",
    bgColor: "var(--secondary)",
  },
  {
    id: 3,
    sender: "Liam Patel",
    message: "Client feedback: UI needs minor tweaks.",
    time: "23 minutes ago",
    color: "var(--chart-3)",
    bgColor: "var(--secondary)",
  },
  {
    id: 4,
    sender: "Sophia Lee",
    message: "Can you review my PR today?",
    time: "1 hour ago",
    color: "var(--chart-4)",
    bgColor: "var(--secondary)",
  },
  {
    id: 5,
    sender: "System Bot",
    message: "Your session will expire soon. Please reauthenticate.",
    time: "3 hours ago",
    color: "var(--destructive)",
    bgColor: "var(--secondary)",
  },
];

const Messages = () => {
  return (
    <div
      className="backdrop-blur-xl shadow-lg rounded-b-2xl "
      style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between p-4"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div>
          <h3 className="text-lg font-black" style={{ color: "var(--foreground)" }}>
            Messages
          </h3>
          <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            Recent conversations & updates
          </p>
        </div>
        <button
          className="text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ color: "var(--primary)" }}
        >
          View All
        </button>
      </div>

      {/* Message List */}
      <div className="p-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="flex items-start p-3 space-x-4 rounded-xl hover:opacity-80 transition-opacity"
          >
            {/* Icon bubble */}
            <div className="p-2 rounded-lg" style={{ backgroundColor: msg.bgColor }}>
              <MessageSquare className="w-4 h-4" style={{ color: msg.color }} />
            </div>

            {/* Text content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                {msg.sender}
              </h4>

              <p
                className="text-sm truncate"
                style={{ color: "var(--muted-foreground)" }}
              >
                {msg.message}
              </p>

              <div className="flex items-center space-x-1 mt-1">
                <Clock className="w-3 h-3" style={{ color: "var(--muted-foreground)" }} />
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                  {msg.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;

