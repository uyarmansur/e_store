import React from "react";

function Button({ title, className }) {
  return (
    <button
      className={`${className} font-medium border-2 rounded-lg transition-all`}
    >
      {title}
    </button>
  );
}

export default Button;
