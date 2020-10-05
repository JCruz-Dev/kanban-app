import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core';

export const NormalButton = ({ name, classes }, props) => {
    return (
        <button className={`button ${classes}`} {...props}>
            {name}
        </button>
    );
};

export const IconButton = (
    { iconName, buttonName, iconClasses, buttonClasses, nameClasses, iconSize },
    props
) => {
    return (
        <button
            {...props}
            className={`icon_button_container button ${buttonClasses} `}
        >
            <Icon fontSize={iconSize} className={iconClasses}>
                {iconName}
            </Icon>
            <span className={`button_name ${nameClasses}`}>{buttonName}</span>
        </button>
    );
};
NormalButton.defaultProps = {
    name: '',
    classes: '',
};
IconButton.defaultProps = {
    iconName: '',
    iconSize: 'small',
    button_name: '',
    iconClasses: '',
    buttonClasses: '',
    nameClasses: '',
};
NormalButton.propTypes = {
    name: PropTypes.string,
    props: PropTypes.object,
};
IconButton.propTypes = {
    iconName: PropTypes.string,
    name: PropTypes.string,
    props: PropTypes.object,
};
