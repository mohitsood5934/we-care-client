/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Queries.css";

const queries = [
  { id: 101, title: "Benefits Inquiry", assigned: "Ethan Harper" },
  { id: 102, title: "Payroll Discrepancy", assigned: "Olivia Bennett" },
  { id: 103, title: "Leave Request", assigned: "Noah Carter" },
  { id: 104, title: "Policy Clarification", assigned: "Ava Thompson" },
  { id: 105, title: "Training Enrollment", assigned: "Liam Foster" },
];

const Queries = () => {
  const navigate = useNavigate();

  const onQueryClickHandler = (title) => {
    navigate()
  };


  return (
    <div className="design-root">
      <div className="design-header">
        <h2 className="design-title">Queries</h2>
      </div>

      <div className="design-tabs">
        {/* {["Queue", "Assigned", "Resolved", "Search"].map((tab, index) => (
          <a key={tab} href="#" className={`design-tab ${index === 0 ? "active" : ""}`}>
            <p>{tab}</p>
          </a>
        ))} */}
         {["Queries"].map((tab, index) => (
          <a key={tab} href="#" className={`design-tab ${index === 0 ? "active" : ""}`}>
            <p>{tab}</p>
          </a>
        ))}
      </div>

      {queries.map(({ title, assigned }, idx) => (
        <div key={idx} className="design-query" onClick={() => onQueryClickHandler(title)}>
          <div className="design-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
            </svg>
          </div>
          <div className="design-query-content">
            <p className="title">{title}</p>
            <p className="assigned">Assigned to: {assigned}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Queries;
