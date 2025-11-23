import {
  BarChart3,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessagesSquare,
  Package,
  Settings,
  ShoppingBag,
  User,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";

const menuItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", badge: "New" },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: User,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "Ecommerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  { id: "inventory", icon: Package, label: "Inventory", count: "847" },
  { id: "transactions", icon: CreditCard, label: "Transactions" },
  { id: "messages", icon: MessagesSquare, label: "Messages", badge: "12" },
  { id: "calendar", icon: Calendar, label: "Calendar" },
  { id: "reports", icon: FileText, label: "Reports" },
  { id: "settings", icon: Settings, label: "Settings" },
];

const Sidebar = ({ collapsed, onToggle, currentPage, onPageChange }) => {
  const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));

  const handleToggle = (itemId) => {
    const newExpandedItems = new Set(expandedItems);
    newExpandedItems.has(itemId)
      ? newExpandedItems.delete(itemId)
      : newExpandedItems.add(itemId);
    setExpandedItems(newExpandedItems);
  };

  return (
    <div
      className={`${collapsed ? "w-[5.5rem] hidden sm:flex transition-all duration-500 ease-in-out  flex-col relative z-10" : "w-72 transition-[width] duration-500 ease-in-out flex flex-col relative z-10"} `}
      style={{
        backgroundColor: "var(--sidebar)",
        borderRight: "1px solid var(--sidebar-border)",
      }}
    >
      {/* logo */}
      <div
        className="p-4"
        style={{ borderBottom: "1px solid var(--sidebar-border)" }}
      >
        <div className="flex items-center space-x-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: "var(--sidebar-primary)" }}
          >
            <Zap
              className="w-6 h-6"
              style={{ color: "var(--sidebar-primary-foreground)" }}
            />
          </div>

          <div
            className={`transition-all ease-in-out duration-500 overflow-hidden ${
              collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
            }`}
          >
            <h1
              className="text-xl font-bold"
              style={{ color: "var(--sidebar-foreground)" }}
            >
              Nexus
            </h1>
            <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* navigation */}
      <nav className="flex-1 p-3 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive =
            currentPage === item.id ||
            (item.submenu && item.submenu.some((s) => s.id === currentPage)) ||
            item.active;

          const expanded = expandedItems.has(item.id);

          return (
            <div key={item.id} className="mb-1">
              <button
                className={`w-full flex items-center justify-between p-2 rounded-xl transition-all duration-300
                  ${isActive ? "text-white shadow-lg" : "hover:opacity-80"}`}
                style={
                  isActive
                    ? {
                        backgroundColor: "var(--sidebar-primary)",
                        color: "var(--sidebar-primary-foreground)",
                      }
                    : {
                        color: "var(--sidebar-foreground)",
                        backgroundColor: "transparent",
                      }
                }
                onClick={() => {
                  if (item.submenu) handleToggle(item.id);
                  onPageChange(item.id);
                }}
              >
                <div className="flex items-center space-x-3">
                  <item.icon
                    className={`w-5 h-5 transition-colors duration-300`}
                    style={
                      isActive
                        ? { color: "var(--sidebar-primary-foreground)" }
                        : { color: "var(--sidebar-foreground)" }
                    }
                  />

                  {/* Label fade */}
                  <div
                    className={`flex items-center space-x-2 transition-all duration-500 overflow-hidden ${
                      collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
                    }`}
                  >
                    <span
                      className="text-sm font-light"
                      style={{
                        color: isActive
                          ? "var(--sidebar-primary-foreground)"
                          : "var(--sidebar-foreground)",
                      }}
                    >
                      {item.label}
                    </span>

                    {item.badge && (
                      <span
                        className="px-2 py-0.5 text-xs text-white rounded-full"
                        style={{ backgroundColor: "var(--destructive)" }}
                      >
                        {item.badge}
                      </span>
                    )}
                    {item.count && (
                      <span
                        className="px-2 py-0.5 text-xs rounded-full"
                        style={{
                          backgroundColor: "var(--sidebar-accent)",
                          color: "var(--sidebar-accent-foreground)",
                        }}
                      >
                        {item.count}
                      </span>
                    )}
                  </div>
                </div>

                {/* Dropdown arrow */}
                {!collapsed && item.submenu && (
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                    style={{ color: "var(--sidebar-foreground)" }}
                  />
                )}
              </button>

              {/* Submenu with smooth expand */}
              <div
                className={`ml-8 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                  expanded && !collapsed
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.submenu &&
                  item.submenu.map((subitem) => {
                    const subActive = currentPage === subitem.id;
                    return (
                      <button
                        key={subitem.id}
                        onClick={() => onPageChange(subitem.id)}
                        className={`text-sm w-full text-left p-2 rounded-lg transition-all duration-200 ${
                          subActive ? "" : "hover:opacity-80"
                        }`}
                        style={
                          subActive
                            ? {
                                backgroundColor: "var(--sidebar-accent)",
                                color: "var(--sidebar-accent-foreground)",
                              }
                            : {
                                color: "var(--sidebar-foreground)",
                                backgroundColor: "transparent",
                              }
                        }
                      >
                        {subitem.label}
                      </button>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </nav>

      {/* user profile */}
      <div
        className="p-3"
        style={{ borderTop: "1px solid var(--sidebar-border)" }}
      >
        <div
          className={`flex items-center space-x-3 p-2 rounded-xl transition-all duration-500 ${
            collapsed ? "justify-center" : ""
          }`}
          style={collapsed ? {} : { backgroundColor: "var(--sidebar-accent)" }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "var(--secondary)",
              border: "1px solid var(--sidebar-ring)",
            }}
          >
            <FaRegUser
              className="w-4 h-4"
              style={{ color: "var(--sidebar-foreground)" }}
            />
          </div>

          <div
            className={`transition-all duration-500 overflow-hidden ${
              collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
            }`}
          >
            <p
              className="text-sm font-medium truncate"
              style={{ color: "var(--sidebar-foreground)" }}
            >
              Pam Johnson
            </p>
            <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
