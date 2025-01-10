import { useState } from "react";

const Toggle = ({ label = "NSFW" }) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center gap-2 h-12">
      <span className="text-md font-medium text-gray-700">{label}</span>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full
          transition-colors duration-200 ease-in-out focus:outline-none
          ${enabled ? "bg-indigo-700" : "bg-gray-200"}
        `}
      >
        <span className="sr-only">Toggle {label}</span>
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white
            transition-transform duration-200 ease-in-out
            ${enabled ? "translate-x-6" : "translate-x-1"}
          `}
        />
      </button>
    </div>
  );
};

export default Toggle;
