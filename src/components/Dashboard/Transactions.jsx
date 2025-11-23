import { ArrowDownCircle, ArrowUpCircle, CreditCard, Clock } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Payment from Sarah Johnson",
    date: "Oct 24, 2025",
    amount: "+$245.00",
    type: "credit",
    color: "var(--chart-2)",
    bgColor: "var(--secondary)",
  },
  {
    id: 2,
    name: "Subscription Renewal",
    date: "Oct 22, 2025",
    amount: "-$29.99",
    type: "debit",
    color: "var(--destructive)",
    bgColor: "var(--secondary)",
  },
  {
    id: 3,
    name: "Refund from NovaMart",
    date: "Oct 19, 2025",
    amount: "+$120.50",
    type: "credit",
    color: "var(--chart-3)",
    bgColor: "var(--secondary)",
  },
  {
    id: 4,
    name: "Purchase – Web Hosting",
    date: "Oct 16, 2025",
    amount: "-$59.00",
    type: "debit",
    color: "var(--chart-4)",
    bgColor: "var(--secondary)",
  },
];

const Transactions = () => {
  return (
    <div
      className="backdrop-blur-xl shadow-lg rounded-b-2xl"
      style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
    >
      {/* Header */}
      <div
        className="p-6 flex items-center justify-between"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div>
          <h3
            className="text-lg font-black flex items-center gap-2"
            style={{ color: "var(--foreground)" }}
          >
            <CreditCard className="w-5 h-5" style={{ color: "var(--primary)" }} />
            Transactions
          </h3>
          <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            Recent transaction history
          </p>
        </div>

        <button
          className="text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ color: "var(--primary)" }}
        >
          View All
        </button>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-start p-3 space-x-4 rounded-xl hover:opacity-80 transition-opacity"
            >
              {/* Icon */}
              <div className="p-2 rounded-lg" style={{ backgroundColor: tx.bgColor }}>
                {tx.type === "credit" ? (
                  <ArrowUpCircle className="w-4 h-4" style={{ color: tx.color }} />
                ) : (
                  <ArrowDownCircle className="w-4 h-4" style={{ color: tx.color }} />
                )}
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                  {tx.name}
                </h4>

                <p className="text-sm truncate" style={{ color: "var(--muted-foreground)" }}>
                  {tx.amount.startsWith("+") ? "Credit" : "Debit"} Transaction
                </p>

                <div className="flex items-center space-x-1 mt-1">
                  <Clock className="w-3 h-3" style={{ color: "var(--muted-foreground)" }} />
                  <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                    {tx.date}
                  </span>
                </div>
              </div>

              {/* Amount */}
              <div
                className="text-sm font-semibold whitespace-nowrap"
                style={{
                  color: tx.amount.startsWith("+")
                    ? "var(--chart-2)"
                    : "var(--destructive)",
                }}
              >
                {tx.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
