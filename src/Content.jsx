import React from 'react';
import MainContentHeader from './components/Organism/MainContentHeader';
import MainActionHeader from './components/Organism/MainActionHeader';
const Content = () => {
    return (
        <div className='content'>
            <MainContentHeader />
            <MainActionHeader />
        </div>
    );
};

export default Content;
