import React from "react";

function Icon({fill}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={20} height={20} viewBox="0 0 24 24">
      <g fill={fill} fillRule="evenodd" clipRule="evenodd">
        <path d="M17.206 1.856c-1.063-.419-2.09-.135-2.817.512-.71.63-1.139 1.602-1.139 2.632v4c0 .967.784 1.75 1.75 1.75h4c1.03 0 2.002-.43 2.633-1.139.646-.727.93-1.754.51-2.817a8.776 8.776 0 00-4.937-4.938zM14.75 9V5c0-.627.265-1.182.636-1.512.353-.314.791-.425 1.27-.236a7.276 7.276 0 014.092 4.092c.189.479.078.917-.236 1.27-.33.371-.885.636-1.512.636h-4a.25.25 0 01-.25-.25z"></path>
        <path d="M10.995 2.87c-.61-.396-1.2-.51-1.85-.396-.55.096-1.14.36-1.767.641l-.067.03A10.25 10.25 0 1020.855 16.69l.03-.067c.281-.627.545-1.217.641-1.768.113-.648 0-1.239-.396-1.85-.426-.657-1.01-.979-1.724-1.125-.634-.13-1.426-.13-2.334-.129H15.5c-.964 0-1.612-.002-2.095-.066-.461-.063-.659-.17-.789-.3-.13-.13-.237-.328-.3-.79-.064-.482-.066-1.13-.066-2.094V6.928c0-.908 0-1.7-.13-2.334-.145-.714-.467-1.298-1.125-1.724zM7.924 4.514c.719-.322 1.136-.503 1.48-.563.265-.046.474-.018.776.178.254.165.389.361.471.765.095.467.099 1.104.099 2.106v1.552c0 .898 0 1.648.08 2.242.084.628.27 1.195.726 1.65.455.456 1.022.642 1.65.726.594.08 1.344.08 2.242.08H17c1.002 0 1.639.004 2.106.099.404.082.6.217.765.471.196.302.224.511.178.777-.06.343-.241.76-.563 1.48a8.755 8.755 0 01-4.638 4.507 8.75 8.75 0 01-6.924-16.07z"></path>
      </g>
    </svg>
  );
}

export default Icon;
