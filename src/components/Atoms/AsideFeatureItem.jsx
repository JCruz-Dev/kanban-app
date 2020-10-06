import React from 'react';
import PropTypes from 'prop-types';

const AsideFeatureItem = ({ classes, name }) => {
    return <span className={classes}>{name}</span>;
};
AsideFeatureItem.defaultProps = {
    classes: '',
    name: '',
};
AsideFeatureItem.propTypes = {
    classes: PropTypes.string,
    name: PropTypes.string,
};

export default AsideFeatureItem;
