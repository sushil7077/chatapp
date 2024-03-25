import React from "react";
import { Outlet } from "react-router-dom";
import { CiSettings, CiBellOn } from "react-icons/ci";
import { FaRegMessage, FaPerson } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import PreviewIcon from "./Icon";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <div>
            <div className="header-item profile">
              <img
                className="profile-image"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
              />
            </div>
            <div className="header-item options">
              <PreviewIcon
                icon={<FaRegMessage size="20" />}
                color="white"
                className=""
              />
            </div>
            <div className="header-item options">
              <PreviewIcon
                icon={<IoIosCall size="20" />}
                color="white"
                className=""
              />
            </div>
            <div className="header-item options">
              <PreviewIcon
                icon={<FaPerson size="20" />}
                color="white"
                className=""
              />
            </div>
            <div className="header-item options">
              <PreviewIcon
                icon={<CiBellOn size="20" />}
                color="white"
                className=""
              />
            </div>
          </div>
          <div className="header-item  setting-icon">
            <PreviewIcon
              icon={<CiSettings size="30" />}
              color="white"
              className=""
            />
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
