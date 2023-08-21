import React from "react";

function rightArrow({fill}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={20} height={20} viewBox="0 0 24 24">
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 12h16m0 0l-6-6m6 6l-6 6"
      ></path>
    </svg>
  );
}

export default rightArrow;
