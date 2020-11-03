import React, { useState } from 'react';
import { Icon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const InputSearch = ({ value, onChange, placeholder, onBlur }) => {
    return (
        <div className='action_header_options_search'>
            <input
                type='text'
                name='search'
                id='search'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            <Icon fontSize='small'>search</Icon>
        </div>
    );
};
export const InputCheckIcon = ({
    name,
    checkClasses,
    nameClasses,
    iconClasses,
    onChange,
    id,
}) => {
    const [checkState, setCheck] = useState(false);
    const handleChange = (event) => {
        setCheck(event.target.checked);
        onChange(event.target.name, event.target.checked);
    };
    return (
        <>
            <label htmlFor={name} className='label'>
                <input
                    type='checkbox'
                    onChange={(e) => handleChange(e, id)}
                    id={name}
                    name={name}
                    data-number={id}
                    defaultChecked={checkState}
                    className={checkClasses}
                />
                <Icon
                    fontSize='small'
                    className={iconClasses}
                    id='check'
                    data-circle={checkState ? 'circle' : 'outline'}
                >
                    {checkState ? 'check_circle' : 'check_circle_outline'}
                </Icon>
                <span className={nameClasses}>{name}</span>
            </label>
        </>
    );
};
InputCheckIcon.defaultProps = {
    name: '',
    checkClasses: '',
    nameClasses: 'checkbox_name',
    iconClasses: '',
};
InputCheckIcon.propTypes = {
    props: PropTypes.object,
    name: PropTypes.string,
    onChange: PropTypes.func,
    checkClasses: PropTypes.string,
    containerClasses: PropTypes.string,
    iconClasses: PropTypes.string,
};
