import React from 'react';
import { Icon } from '@material-ui/core';
import PropTypes from 'prop-types';

const TitleIcon = ({
    iconClasses,
    titleClasses,
    icon,
    name,
    containerClasses,
}) => {
    return (
        <div className={containerClasses}>
            <Icon fontSize='small' className={iconClasses}>
                {icon}
            </Icon>
            <p className={titleClasses}>{name}</p>
        </div>
    );
};

TitleIcon.defaultProps = {
    iconClasses: '',
    titleClasses: '',
    containerClasses: '',
};
TitleIcon.propTypes = {
    iconClasses: PropTypes.string,
    titleClasses: PropTypes.string,
    containerClasses: PropTypes.string,
};

export default TitleIcon;
