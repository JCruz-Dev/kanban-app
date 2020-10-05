import React from 'react';
import { IconButton } from './components/Atoms/Button';
import SelectInput from './components/Atoms/SelectInput';

export const Content = () => {
    return (
        <>
            <SelectInput />
            <IconButton iconName='add' buttonName='Create New' />
        </>
    );
};
