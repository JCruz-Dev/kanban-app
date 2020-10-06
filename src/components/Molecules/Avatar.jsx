import { Icon } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ name }) => {
    return (
        <div className='avatar_container'>
            <Icon fontSize='small' className='avatar_icon'>
                account_circle
            </Icon>
            <span className='avatar_name'>{name}</span>
            <Icon fontSize='small' className='avatar_icon'>
                arrow_drop_down
            </Icon>
        </div>
    );
};
Avatar.defaultProps = {
    name: 'Account',
};
Avatar.propTypes = {
    name: PropTypes.string,
};

export default Avatar;
