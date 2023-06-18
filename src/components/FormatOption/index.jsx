import React from "react";
import "./formatoption.css"
function index({isActive,setIsActive}) {
  return (
    <div className="flex flex-row gap-x-3 items-center">
      <div className={`${isActive ? "highlight" : ""} cursor-pointer`} onClick={()=>setIsActive(true)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.925 11.125L4.075 11.125C2.95 11.125 2.5 11.6 2.5 12.8L2.5 15.825C2.5 17.025 2.95 17.5 4.075 17.5L15.925 17.5C17.05 17.5 17.5 17.025 17.5 15.825L17.5 12.8C17.5 11.6 17.05 11.125 15.925 11.125Z"
            fill={`${isActive ? "#ffffff" : "#787486"}`}
          />
          <path
            d="M15.925 2.5L4.075 2.5C2.95 2.5 2.5 2.975 2.5 4.175L2.5 7.2C2.5 8.39167 2.95 8.875 4.075 8.875L15.925 8.875C17.05 8.875 17.5 8.4 17.5 7.2L17.5 4.175C17.5 2.975 17.05 2.5 15.925 2.5Z"
            fill={`${isActive ? "#ffffff" : "#787486"}`}
          />
        </svg> 
      </div>
      <div className={`${!isActive ? "highlight" : ""} cursor-pointer`} onClick={()=>setIsActive(false)}>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1949 7.99994C16.5756 7.99994 17.6949 6.88065 17.6949 5.49994C17.6949 4.11923 16.5756 2.99994 15.1949 2.99994C13.8142 2.99994 12.6949 4.11923 12.6949 5.49994C12.6949 6.88065 13.8142 7.99994 15.1949 7.99994Z"
            stroke={`${!isActive ? "#ffffff" : "#787486"}`}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.50001 7.99994C6.88072 7.99994 8 6.88065 8 5.49994C8 4.11923 6.88072 2.99994 5.50001 2.99994C4.11929 2.99994 3 4.11923 3 5.49994C3 6.88065 4.11929 7.99994 5.50001 7.99994Z"
            stroke={`${!isActive ? "#ffffff" : "#787486"}`}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.1949 17.9999C16.5756 17.9999 17.6949 16.8807 17.6949 15.4999C17.6949 14.1192 16.5756 12.9999 15.1949 12.9999C13.8142 12.9999 12.6949 14.1192 12.6949 15.4999C12.6949 16.8807 13.8142 17.9999 15.1949 17.9999Z"
            stroke={`${!isActive ? "#ffffff" : "#787486"}`}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.50001 17.9999C6.88072 17.9999 8 16.8807 8 15.4999C8 14.1192 6.88072 12.9999 5.50001 12.9999C4.11929 12.9999 3 14.1192 3 15.4999C3 16.8807 4.11929 17.9999 5.50001 17.9999Z"
            stroke={`${!isActive ? "#ffffff" : "#787486"}`}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default index;
