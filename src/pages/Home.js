import React from "react";
import PropTypes from "prop-types";
import HomeDashboard from "../components/HomeDashboard";

const Home = (props) => {
  const { userProfile } = props;
  return (
    <div>
      <HomeDashboard userProfile={userProfile} />
    </div>
  );
};

Home.propTypes = {
  userProfile: PropTypes.object,
};
export default Home;
