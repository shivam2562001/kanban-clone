import React from "react";
import AvatarOne from "../../assets/avatar-one.png"
import AvatarTwo from "../../assets/avatar-two.png"
import AvatarThree from "../../assets/avatar-three.png"
import AvatarFour from "../../assets/avatar-four.png"
import "./invite.css"
function index() {
  return (
    <div className="flex flex-row gap-x-2  items-center">
      <div>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9H12"
            stroke="#5030E5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 12V6"
            stroke="#5030E5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
            fill="#5030E5"
            fill-opacity="0.2"
          />
        </svg>
      </div>
      <div className="invite-text">invite</div>
      <div className="relative pl-2">
      <img src={AvatarOne} className="image-section"/>
      <img src={AvatarTwo} className="image-section absolute top-0 slide"/>
      <img src={AvatarThree} className="image-section absolute top-0 slidetwo"/>
      <img src={AvatarFour} className="image-section absolute top-0 slidethree"/>
      <div className="add-more-section absolute top-0">{"+2"}</div>
     </div>
    </div>
  );
}

export default index;
