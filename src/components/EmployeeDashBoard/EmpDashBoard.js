import React from "react";
import TicketPage from "./TicketPage";
import TicketInfo from "./TicketInfo";

const EmpDashBoard = () => {
  const showTickets = false;

  if (showTickets) {
    return <TicketPage />;
  }

  return <TicketInfo />;
};

export default EmpDashBoard;
