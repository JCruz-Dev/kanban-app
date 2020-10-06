import { Icon } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

export const HeaderFeature = ({ name }) => {
    return (
        <div className='header_feature'>
            <Icon fontSize='small' className='header_feature_icon'>
                {name}
            </Icon>
        </div>
    );
};
export default HeaderFeature;
HeaderFeature.propTypes = {
    name: PropTypes.string,
};
