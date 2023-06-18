import React,{useRef} from "react";
import Chip from "../Chip";
import AvatarOne from "../../assets/avatar-one.png"
import AvatarTwo from "../../assets/avatar-two.png"
import AvatarThree from "../../assets/avatar-three.png"
import AvatarFour from "../../assets/avatar-four.png"
import "./kanban.css";
function index({ title, color, children, numofcard, editable = false }) {
  const dropRef = useRef();
  const handleDragOver=(e)=>{
    e.preventDefault();

    //const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");
      
      dropRef.current.appendChild(curTask);

  }

  return (
    <div className="kanban-container  overflow-y-scroll  ">
      <div className="flex  flex-row justify-between items-center">
        <div className="flex flex-row gap-x-2 items-center ">
          <div className={`${color}-dot`}></div>
          <div className="title-text">{title}</div>
          <Chip title={numofcard} />
        </div>
        {editable && (
          <div className="flex items-center cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                fill="#5030E5"
              />
              <path
                d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
                fill="#5030E5"
              />
            </svg>
          </div>
        )}
      </div>
      <div className={` w-full ${color}-section-divder mt-4`}></div>
      <div className="flex flex-col h-full  overflow-y-scroll  gap-y-4 mt-4 " ref={dropRef} onDragOver={handleDragOver}>{children}</div>
    </div>
  );
}

export default index;
