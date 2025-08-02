import React from "react";
import Queries from "./Queries";
import QueryDetail from "./QueryDetail";

const HrDashboard = () => {
    const showQueries = false;

    if (showQueries) {
        return <Queries />

    } 
    return <QueryDetail />

}

export default HrDashboard;