import React from 'react';
import { Icon } from '@material-ui/core';
import PropTypes from 'prop-types';

const TitleIcon = ({ iconClasses, titleClasses, icon, name }) => {
    return (
        <div className='aside_header'>
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
};
TitleIcon.propTypes = {
    iconClasses: PropTypes.string,
    titleClasses: PropTypes.string,
};

export default TitleIcon;
