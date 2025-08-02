// QueryDetails.jsx
import React from 'react';
import './QueryDetail.css';

const QueryDetail = () => {
  return (
    <div className="query-details">
      <div>
        <div className="query-details__summary">
          <div className="query-details__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
            </svg>
          </div>
          <div className="query-details__summary-text">
            <p className="query-details__summary-title">Vacation Request</p>
            <p className="query-details__summary-id">ID: 123456</p>
          </div>
        </div>

        <h3 className="query-details__section-title">Details</h3>
        <div className="query-details__section">
          <div className="query-details__row">
            <p className="query-details__label">Status</p>
            <p className="query-details__value">Open</p>
          </div>
          <div className="query-details__row">
            <p className="query-details__label">Submitted</p>
            <p className="query-details__value">2024-01-15</p>
          </div>
          <div className="query-details__row">
            <p className="query-details__label">Department</p>
            <p className="query-details__value">Marketing</p>
          </div>
          <div className="query-details__row">
            <p className="query-details__label">Employee</p>
            <p className="query-details__value">Ethan Harper</p>
          </div>
        </div>

        <h3 className="query-details__section-title">Request</h3>
        <div className="query-details__section">
          <div className="query-details__row">
            <p className="query-details__label">Type</p>
            <p className="query-details__value">Vacation</p>
          </div>
          <div className="query-details__row">
            <p className="query-details__label">Start Date</p>
            <p className="query-details__value">2024-02-01</p>
          </div>
          <div className="query-details__row">
            <p className="query-details__label">End Date</p>
            <p className="query-details__value">2024-02-15</p>
          </div>
        </div>
      </div>

      <div className="query-details__footer">
        <button className="query-details__button query-details__button--secondary">Reassign</button>
        <button className="query-details__button query-details__button--primary">Resolve</button>
      </div>
    </div>
  );
};

export default QueryDetail;
