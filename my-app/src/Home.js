import React from "react";
import { FiSearch } from "react-icons/fi";
import { CiVideoOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
import { IoIosSend } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="chat-container">
        <div className="chat-list">
          <div className="search-box">
            <input name="search" placeholder="Search" className="search" />
            <div className="search-icon">
              <FiSearch />
            </div>
          </div>
          <div className="chat-list-item">
            <div className="chat-list-profile">
              <img
                className="profile-image"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
              />
            </div>
            <div className="chat-list-profile-details">
              <div className="chat-list-profile-name-container">
                <div className="chat-list-profile-name">
                  Sushil Kumar Singh Patel
                </div>{" "}
                <div className="chat-list-profile-time">10:00</div>
              </div>
              <div className="chat-list-profile-description">
                Details of person...
              </div>
            </div>
          </div>
          <div className="chat-list-item chat-list-item-selected">
            <div className="chat-list-profile">
              <img
                className="profile-image"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
              />
            </div>
            <div className="chat-list-profile-details">
              <div className="chat-list-profile-name-container">
                <div className="chat-list-profile-name">Sushil Kumar</div>{" "}
                <div className="chat-list-profile-time">10:00</div>
              </div>
              <div className="chat-list-profile-description">
                Details of person ans all of information goes here
              </div>
            </div>
          </div>
          <div className="chat-list-item">
            <div className="chat-list-profile">
              <img
                className="profile-image"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
              />
            </div>
            <div className="chat-list-profile-details">
              <div className="chat-list-profile-name-container">
                <div className="chat-list-profile-name">Sushil Kumar</div>{" "}
                <div className="chat-list-profile-time">10:00</div>
              </div>
              <div className="chat-list-profile-description">
                Details of person...
              </div>
            </div>
          </div>
          <div className="chat-list-item">
            <div className="chat-list-profile">
              <img
                className="profile-image"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
              />
            </div>
            <div className="chat-list-profile-details">
              <div className="chat-list-profile-name-container">
                <div className="chat-list-profile-name">Sushil Kumar</div>{" "}
                <div className="chat-list-profile-time">10:00</div>
              </div>
              <div className="chat-list-profile-description">
                Details of person...
              </div>
            </div>
          </div>
          <div className="chat-list-item">
            <div className="chat-list-profile">
              <img
                className="profile-image"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
              />
            </div>
            <div className="chat-list-profile-details">
              <div className="chat-list-profile-name-container">
                <div className="chat-list-profile-name">Sushil Kumar</div>{" "}
                <div className="chat-list-profile-time">10:00</div>
              </div>
              <div className="chat-list-profile-description">
                Details of person...
              </div>
            </div>
          </div>
          <div className="chat-list-item">
            <div className="chat-list-profile">
              <img
                className="profile-image"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
              />
            </div>
            <div className="chat-list-profile-details">
              <div className="chat-list-profile-name-container">
                <div className="chat-list-profile-name">Sushil Kumar</div>{" "}
                <div className="chat-list-profile-time">10:00</div>
              </div>
              <div className="chat-list-profile-description">
                Details of person...
              </div>
            </div>
          </div>
        </div>
        <div className="chat-window">
          <div className="chat-window-header">
            <div className="chat-window-header-details">
              <h1 className="chat-window-header-name">Sushil Kumar</h1>
              <div className="chat-window-header-status">Active Now</div>
            </div>
            <div className="chat-window-header-action">
              <div className="chat-window-header-icon">
                <CiVideoOn size="20" />
              </div>
              <div className="chat-window-header-icon">
                <IoIosCall size="20" />
              </div>
            </div>
          </div>
          <hr />
          <div className="chat-window-message-send-container">
            <div className="chat-window-message-container">
              <div className="chat-window-message">
                <div className="chat-window-profile">
                  <img
                    className="profile-image"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
                  />
                </div>
                <div className="chat-conainer">
                  <div className="chat-window-message-content">
                    <p>This is Message</p>
                  </div>
                </div>
              </div>
              <div className="chat-window-message right">
                <div className="chat-conainer">
                  <div className="chat-window-message-content redcolor">
                    <p>This is Message</p>
                  </div>
                </div>
              </div>
              <div className="chat-window-message">
                <div className="chat-window-profile">
                  <img
                    className="profile-image"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
                  />
                </div>
                <div className="chat-conainer">
                  <div className="chat-window-message-content">
                    <p>This is Message</p>
                  </div>
                  <div className="chat-window-message-content">
                    <p>This is Message</p>
                  </div>
                </div>
              </div>
              <div className="chat-window-message right">
                <div className="chat-conainer">
                  <div className="chat-window-message-content redcolor">
                    <p>This is Message</p>
                  </div>
                  <div className="chat-window-message-content redcolor">
                    <p>This is Message</p>
                  </div>
                </div>
              </div>
              <div className="chat-window-message right">
                <div className="chat-conainer">
                  <div className="chat-window-message-content redcolor">
                    <p>This is Message</p>
                  </div>
                  <div className="chat-window-message-content redcolor">
                    <p>This is Message</p>
                  </div>
                </div>
              </div>
              <div className="chat-window-message">
                <div className="chat-window-profile">
                  <img
                    className="profile-image"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
                  />
                </div>
                <div className="chat-conainer">
                  <div className="chat-window-message-content">
                    <p>This is Message</p>
                  </div>
                  <div className="chat-window-message-content">
                    <p>This is Message</p>
                  </div>
                </div>
              </div>
              <div className="chat-window-message">
                <div className="chat-window-profile">
                  <img
                    className="profile-image"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
                  />
                </div>
                <div className="chat-conainer">
                  <div className="chat-window-message-content">
                    <p>This is Message</p>
                  </div>
                  <div className="chat-window-message-content">
                    <p>This is Message</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-window-send-message-container">
              {/* <hr /> */}
              <div className="chat-window-input-container">
                <input
                  className="chat-window-input"
                  type="text"
                  placeholder="Type Message Here..."
                />
              </div>
              <div className="chat-window-send">
                <div className="chat-window-send-icons">
                  <ImAttachment />
                </div>
                <div className="chat-window-send-icons redcolor">
                  <IoIosSend />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
