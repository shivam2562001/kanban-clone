import React from "react";
import "./profile.css";
import Avatar from "../Avatar"
function index({ name, location,image }) {
  return (
    <div className="flex flex-row items-center gap-x-4">
      <div className="flex flex-col justify-center">
        <div className="headertext-style">{name}</div>
        <div className="subtext-style">{location}</div>
      </div>
      <div><Avatar image = {image}/></div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M9.00002 12.6C8.47502 12.6 7.95002 12.3975 7.55252 12L2.66251 7.11001C2.44501 6.89251 2.44501 6.53251 2.66251 6.31501C2.88001 6.09751 3.24001 6.09751 3.45751 6.31501L8.34752 11.205C8.70752 11.565 9.29252 11.565 9.65252 11.205L14.5425 6.31501C14.76 6.09751 15.12 6.09751 15.3375 6.31501C15.555 6.53251 15.555 6.89251 15.3375 7.11001L10.4475 12C10.05 12.3975 9.52502 12.6 9.00002 12.6Z"
            fill="#292D32"
          />
        </svg>
      </div>

    </div>
  );
}

export default index;
