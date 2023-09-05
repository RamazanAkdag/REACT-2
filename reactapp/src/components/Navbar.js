import React from "react";
import PropTypes from "prop-types";
//rfc yazarak da functional component oluşturabilirsin
function Navbar(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <hr />
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Default App",
};
export default Navbar;
