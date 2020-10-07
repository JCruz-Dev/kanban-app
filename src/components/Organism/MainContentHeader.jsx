import React from 'react';
import { IconButton } from '../Atoms/Button';
import SelectInput from '../Atoms/SelectInput';
import { Icon } from '@material-ui/core';
import Avatar from '../Molecules/Avatar';
const MainContentHeader = () => {
    return (
        <div className='header_container'>
            <div className='header_action_content'>
                <SelectInput />
                <IconButton
                    iconName='add'
                    iconClasses='header_action_icon'
                    buttonName='Create New'
                    buttonClasses='header_action_button'
                    nameClasses='header_action_button_name'
                />
            </div>
            <div className='header_settings_content'>
                <Icon fontSize='small' className='header_settings_item'>
                    dashboard
                </Icon>
                <Icon fontSize='small' className='header_settings_item'>
                    group
                </Icon>
                <Icon fontSize='small' className='header_settings_item'>
                    bug_report
                </Icon>
                <Avatar />
            </div>
        </div>
    );
};
export default MainContentHeader;
