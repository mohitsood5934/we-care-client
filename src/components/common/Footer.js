/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../../css/Footer.css';
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const hideFooter = location && location.pathname.includes('/chat');

  if (hideFooter) {
    return null;
  }
  return (
    <div className="footer_wrpr">
      <div className="dashboard-footer">
        <a className="footer-link active">
          <div className="footer-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,115.55V208a16..." />
            </svg>
          </div>
          <p>Home</p>
        </a>
        <a className="footer-link" href="#">
          <div className="footer-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M230.92,212c-15.23..." />
            </svg>
          </div>
          <p>Dashboard</p>
        </a>
         <a className="footer-link" href="#">
          <div className="footer-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M230.92,212c-15.23..." />
            </svg>
          </div>
          <p>Profile</p>
        </a>
          <a className="footer-link" href="#">
          <div className="footer-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M230.92,212c-15.23..." />
            </svg>
          </div>
          <p>Key Metrics</p>
        </a>
      </div>
      <div className="footer-spacer"></div>
    </div>
  );
};

export default Footer;
