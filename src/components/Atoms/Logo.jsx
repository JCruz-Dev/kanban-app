import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../public/images/marketingcloudfx.png';

const Logo = ({ classes }) => {
    return <img src={logo} className={`logo ${classes}`} />;
};
export default Logo;

Logo.defaultProps = {
    classes: '',
};
Logo.propTypes = {
    classes: PropTypes.string,
};
