import React from "react";
import PropTypes from "prop-types";
import EmpDashBoard from "../components/EmployeeDashBoard/EmpDashBoard";
import HrDashboard from "../components/HRDashboard/HrDashboard";

const Dashboard = (props) => {
  const { isAdminUser = false } = props;

  return (
    <div>
      {isAdminUser ? <HrDashboard /> : <EmpDashBoard />}
    </div>
  );
};

Dashboard.propTypes = {
  isAdminUser: PropTypes.bool,
};

export default Dashboard;
