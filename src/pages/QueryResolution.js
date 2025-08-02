import React from "react";
import PropTypes from "prop-types";
import WeCareAssistant from "../components/WeCareAssistant";

const QueryResolution = (props) => {
  const { name = "" } = props;
  return (
    <div>
      <WeCareAssistant name={name}/>
    </div>
  );
};
QueryResolution.propTypes = {
  name: PropTypes.string,
}
export default QueryResolution;
