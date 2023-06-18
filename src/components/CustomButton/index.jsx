import React from "react";
import "./custombutton.css";
function index({children}) {
  return (
    <div className="btn-container flex flex-row justify-center items-center p-2 gap-x-2 cursor-pointer">
      {children}
    </div>
  );
}

export default index;
