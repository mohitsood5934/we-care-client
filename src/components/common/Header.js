import React from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import "../../css/Header.css";

const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButton = location && location.pathname !== "/";

  const onBackButtonClickHandler = () => {
    navigate(-1);
  };

  const styleObj = showBackButton ? { flexGrow: 1, display: 'flex' } : { flexGrow: 1, marginRight: '80px', display: 'flex'}

  return (
    <div class="dashboard-header">
      {!showBackButton && <div className="dashboard-logo">
        <span className="jd-logo" />
      </div>
     }
      {showBackButton && (
        <div class="dashboard-back">
          {showBackButton && (
            <button
              class="back-button"
              aria-label="Back"
              onClick={onBackButtonClickHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
              </svg>
            </button>
          )}
        </div>
      )}
      <div style={styleObj}>
      <span class="dashboard-title">We Care</span>
      </div>
    </div>
  );
};
Header.propTypes = {
  headerConfig: PropTypes.object,
};
export default Header;
