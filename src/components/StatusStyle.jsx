function StatusStyle({ status }) {
  const getStatusStyle = (status) => {
    switch (status) {
      case "pending":
        return {
          bg: "bg-[#FF8F001A]",
          text: "text-[#FF8F00]",
          dot: "bg-[#FF8F00]",
        };
      case "paid":
        return {
          bg: "bg-[#33D69F1A]",
          text: "text-[#33D69F]",
          dot: "bg-[#33D69F]",
        };
      case "draft":
        return {
          bg: "bg-[#373B531A]",
          text: "text-[#4b5563]",
          dot: "bg-[#4b5563]",
        };

      default:
        return {
          bg: "bg-gray-200",
          text: "text-gray-600",
          dot: "bg-gray-600",
        };
    }
  };

  const { bg, text, dot } = getStatusStyle(status);

  return (
    <div
      className={`px-6 py-2 rounded-md capitalize flex items-center gap-2 ${bg} ${text}`}
    >
      <span className={`w-2 h-2 rounded-full ${dot}`}></span>
      {status}
    </div>
  );
}

export default StatusStyle;
