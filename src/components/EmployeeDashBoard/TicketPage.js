/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './TicketPage.css';

const TicketPage = () => {
  return (
    <div className="ticket-page">
      <div>
        <header className="ticket-header">
          <h2 className="ticket-title">My Tickets</h2>
        </header>

        <h3 className="ticket-subheading">Open Tickets</h3>

        <div className="ticket-item">
          <div className="ticket-info">
            <p className="ticket-title-text">Payroll Inquiry</p>
            <p className="ticket-category">HR</p>
          </div>
          <div className="ticket-status">In Progress</div>
        </div>

        <div className="ticket-item">
          <div className="ticket-info">
            <p className="ticket-title-text">Software Installation</p>
            <p className="ticket-category">IT</p>
          </div>
          <div className="ticket-status">In Progress</div>
        </div>

        <div className="ticket-item">
          <div className="ticket-info">
            <p className="ticket-title-text">Office Access</p>
            <p className="ticket-category">Facilities</p>
          </div>
          <div className="ticket-status">In Progress</div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
