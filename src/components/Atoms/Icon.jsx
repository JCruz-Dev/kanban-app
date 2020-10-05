import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ classes, name }) => {
    return <i className={`material-icons ${classes}`}>{name}</i>;
};
export default Icon;

Icon.defaultProps = {
    name: 'face',
    classes: '',
};

Icon.proTypes = {
    classes: PropTypes.string,
    name: PropTypes.string,
};
