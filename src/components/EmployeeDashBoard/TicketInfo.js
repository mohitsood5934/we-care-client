import React from 'react';
import './TicketInfo.css';

const TicketInfo = () => {
  return (
    <div className="ticket-info-page">
      <div>
        <div className="section">
          <h3>Subject</h3>
          <p>Request for Leave Approval</p>
        </div>

        <div className="section">
          <h3>Status</h3>
          <p>Pending</p>
        </div>

        <div className="section">
          <h3>Submitted On</h3>
          <p>July 15, 2024</p>
        </div>

        <div className="section">
          <h3>Description</h3>
          <p>
            I am requesting a leave of absence from August 1st to August 15th, 2024, for personal reasons. I have completed all my urgent tasks and will ensure a smooth handover
            before my leave. Please let me know if any further information is required.
          </p>
        </div>

        <div className="section">
          <h3>Updates</h3>
          <div className="timeline">
            <div className="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16..." />
              </svg>
              <div className="timeline-line" />
            </div>
            <div className="timeline-content">
              <p className="timeline-label">Query Submitted</p>
              <p className="timeline-date">July 15, 2024</p>
            </div>

            <div className="timeline-icon">
              <div className="timeline-line short" />
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128..." />
              </svg>
            </div>
            <div className="timeline-content">
              <p className="timeline-label">Pending Approval</p>
              <p className="timeline-date">July 16, 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-spacing"></div>
    </div>
  );
};

export default TicketInfo;
