import React from 'react';
import PropTypes from 'prop-types';
import AsideFeatureItem from '../Atoms/AsideFeatureItem';
import { Icon } from '@material-ui/core';

const AsideHeaderItem = ({
    activeItem,
    name,
    has_arrow,
    has_beta,
    classes,
    featureClasses,
    arrowClasses,
}) => {
    return (
        <div className='aside_content'>
            <div className={`aside_main_items ${activeItem && 'active'}`}>
                <p className={classes}>
                    {name}{' '}
                    {has_beta && (
                        <AsideFeatureItem
                            classes={featureClasses}
                            name='Beta'
                        />
                    )}
                </p>
                {has_arrow && (
                    <Icon fontSize='small' className={arrowClasses}>
                        keyboard_arrow_down
                    </Icon>
                )}
            </div>
        </div>
    );
};
AsideHeaderItem.defaultProps = {
    index: 0,
    activeItem: false,
    name: '',
    has_arrow: false,
    has_beta: false,
};
AsideHeaderItem.propTypes = {
    index: PropTypes.number,
    activeItem: PropTypes.bool,
    name: PropTypes.string,
    has_arrow: PropTypes.bool,
    has_beta: PropTypes.bool,
};

export default AsideHeaderItem;
