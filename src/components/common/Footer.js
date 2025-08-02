/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import "../../css/Footer.css";

const footerLinks = [
  {
    label: "Home",
    iconPath: "M224,115.55V208a16...",
    path: "/",
  },
  {
    label: "Dashboard",
    iconPath: "M230.92,212c-15.23...",
    path: "/dashboard",
  },
  {
    label: "Profile",
    iconPath: "M230.92,212c-15.23...",
    path: "/profile",
  },
  {
    label: "Key Metrics",
    iconPath: "M230.92,212c-15.23...",
    path: "/key-metrics",
  },
];

const getIconSVG = (label) => {
  if (label === "Home") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    );
  } else if (label === "Dashboard") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    );
  } else if (label === "Profile") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    );
  } else if (label === "Key Metrics") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
        />
      </svg>
    );
  } else if (label === "Login") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    );
  }
};
const FooterLink = ({ label, iconPath, path, isActive, onClick }) => (
  <a className={`footer-link ${isActive ? "active" : ""}`} onClick={onClick}>
    {getIconSVG(label)}
    <p>{label}</p>
  </a>
);

const Footer = (props) => {
  const { isAdminUser = false } = props; 
  const location = useLocation();
  const navigate = useNavigate();
  const hideFooter = location && location.pathname.includes("/chat");

  const onFooterItemClickHandler = ({ label, link }) => {
    let url = link;
    if (label === "Dashboard") {
      url = isAdminUser ? '/admin-dashboard' : 'user-dashboard';
    }
    navigate(url);
  };

  if (hideFooter) return null;

  return (
    <div className="footer_wrpr">
      <div className="footer">
        {footerLinks.map((link, index) => {
          const isActive = location.pathname === link.path;
          return (
            <FooterLink
              key={index}
              label={link.label}
              iconPath={link.iconPath}
              path={link.path}
              isActive={isActive}
              onClick={() =>
                onFooterItemClickHandler({ label: link.label, link: link.path })
              }
            />
          );
        })}
      </div>
    </div>
  );
};

Footer.propTypes = {
  isAdminUser: PropTypes.bool,
}

export default Footer;
