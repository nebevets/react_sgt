import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ color, text, to }) => {
    return (
        <div className="row">
            <div className="col s12 right-align">
                <Link className={`btn ${color}`} to={to}>{text}</Link>
            </div>
        </div>
    );
}

NavLink.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

NavLink.defaultProps = {
    color: 'blue'
}

export default NavLink;