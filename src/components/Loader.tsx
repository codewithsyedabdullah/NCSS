import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bx-loader${hidden ? " hidden" : ""}`}>
      <svg className="bx-loader-logo" viewBox="0 0 100 100" fill="currentColor">
        <rect x="20" y="20" width="60" height="60" rx="8" />
        <text x="50" y="65" textAnchor="middle" fill="#101010" fontSize="40" fontWeight="700" fontFamily="Inter">B</text>
      </svg>
    </div>
  );
}
