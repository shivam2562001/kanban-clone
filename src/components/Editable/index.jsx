// Editable.js
import React, { useState } from "react";
import "./editable.css";
// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
const index = ({
  text,
  type,
  placeholder,
  isEditing, 
  setEditing,
  children,
  ...props
}) => {
  // Manage the state whether to show the label or the input box. By default, label will be shown.
// Exercise: It can be made dynamic by accepting initial state as props outside the component 
 

// Event handler while pressing any key while editing
  const handleKeyDown = (event, type) => {
    // Handle when key is pressed
  };

/*
- It will display a label is `isEditing` is false
- It will display the children (input or textarea) if `isEditing` is true
- when input `onBlur`, we will set the default non edit mode
Note: For simplicity purpose, I removed all the classnames, you can check the repo for CSS styles
*/
  return (
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={e => handleKeyDown(e, type)}
          className="section-text w-64"
        >
          {children}
        </div>
      ) : (
        <div
          onClick={() => setEditing(true)}
          className="w-64"
        >
          <span className="section-text">
            {text}
          </span>
        </div>
      )}
    </section>
  );
};

export default index;