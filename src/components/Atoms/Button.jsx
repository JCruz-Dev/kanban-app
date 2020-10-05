import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';

export const NormalButton = ({ name, classes }, props) => {
    return (
        <button className={`button ${classes}`} {...props}>
            {name}
        </button>
    );
};

export const IconButton = (
    { iconName, buttonName, iconClasses, buttonClasses, nameClasses },
    props
) => {
    return (
        <button
            {...props}
            className={`icon_button_container button ${buttonClasses} `}
        >
            <Icon name={iconName} classes={`${iconClasses}`} />
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
