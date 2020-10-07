import React, { useState } from 'react';
import { IconButton } from '../Atoms/Button';
import TitleIcon from '../Molecules/TitleIcon';
import { InputSearch, InputCheckIcon } from '../Molecules/Inputs';

const MainActionHeader = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleBlur = () => {
        setSearchTerm('');
    };
    return (
        <div className='header_container action_header'>
            <TitleIcon
                name='Statuses'
                icon='visibility'
                containerClasses='action_status'
                titleClasses='action_status_title'
            />
            <div className='action_header_options'>
                <div className='filter_content'>
                    <IconButton
                        iconName='filter_list'
                        buttonName='Filter'
                        buttonClasses='action_header_options_filter'
                        nameClasses='action_header_options_filter_title'
                    />
                    <div className='tags_container'>
                        <InputCheckIcon name='SEO article' />
                        <InputCheckIcon name='longform' />
                        <InputCheckIcon name='Blog post' />
                    </div>
                </div>
                <IconButton
                    iconName='sort'
                    buttonName='Sort'
                    buttonClasses='action_header_options_filter'
                    nameClasses='action_header_options_filter_title'
                />
                <InputSearch
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder={'Search'}
                    onBlur={handleBlur}
                />
            </div>
        </div>
    );
};

export default MainActionHeader;
