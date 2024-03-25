import React from "react";
import { FiSearch } from "react-icons/fi";

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
        <div className="chat-window">chat box right side</div>
      </div>
    </>
  );
};

export default Home;
