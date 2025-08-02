/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../css/HomeDashboard.css";

const HomeDashboard = (props) => {
  const { userProfile } = props;
  const { name = "" } = userProfile;
  const navigate = useNavigate();

  const onChatButtonClickHandler = () => {
    navigate("/chat");
  };

  return (
    <div className="dashboard-root">
      <div>
        <h2 className="dashboard-greeting">Welcome back, {name}</h2>
        <div className="dashboard-section">
          <div className="dashboard-card-container">
            <div className="dashboard-card-content">
              <div className="card-text">
                <p className="card-title">Chat with our assistant</p>
                <p className="card-subtitle">
                  Get instant answers to common questions
                </p>
              </div>
              <button
                className="card-button"
                onClick={onChatButtonClickHandler}
              >
                Chat
              </button>
            </div>
            <div
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAt0wzRMq-9FyZFB0lsHxc_2X7WJhihEf92vSqWP7msfYDtKRMr6nn92v-kRihuI_UEwX-3BywnvJHyi6xwoiJc-jzQCXW-mPka87ynxNhFND6jKW8Ou9eLxTqg4FR5SFlhjDnD8sat0CMPyWjao_8BkAxZW-ChjV7HuH2PJLL6xCmdm2sGk2kEgCmey7wnAmKeH-Cmcw0q7n_nTG3oMXcnqu8moWBJco9lIFEkDa08I_jtzZQrhgsIU9S0fTF30RvzipHntee84XZh')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeDashboard.propTypes = {
  userProfile: PropTypes.object,
};

export default HomeDashboard;
