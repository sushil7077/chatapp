import React from "react";
import { IconContext } from "react-icons";

const PreviewIcon = ({ icon, className, color }) => {
  return (
    <>
      <IconContext.Provider value={{ color: color, className: className }}>
        {icon}
      </IconContext.Provider>
    </>
  );
};

export default PreviewIcon;
