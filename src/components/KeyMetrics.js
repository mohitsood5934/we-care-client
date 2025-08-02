import React from 'react';
import '../css/KeyMetrics.css';

const KeyMetrics = () => {
  return (
    <div className="dashboard-keymetric-root">
      <div>
        <h2 className="section-title">Key Metrics</h2>
        <div className="metrics-container">
          <div className="metric-card">
            <p className="metric-label">First Contact Resolution (FCR)</p>
            <p className="metric-value">85%</p>
          </div>
          <div className="metric-card">
            <p className="metric-label">Average Resolution Time (ART)</p>
            <p className="metric-value">24 hours</p>
          </div>
          <div className="metric-card">
            <p className="metric-label">Employee Satisfaction</p>
            <p className="metric-value">4.8/5</p>
          </div>
        </div>

        <h2 className="section-title">Reports</h2>
        <div className="report-row">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
            </svg>
          </div>
          <p className="report-text">Generate Detailed Report</p>
        </div>
      </div>
    </div>
  );
};

export default KeyMetrics;
