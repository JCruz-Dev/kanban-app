import React from 'react';
import MainContentHeader from './components/Organism/MainContentHeader';
import MainActionHeader from './components/Organism/MainActionHeader';
import StageContainer from './components/Organism/StageContainer';
const Content = () => {
    return (
        <div className='content'>
            <MainContentHeader />
            <MainActionHeader />
            <StageContainer />
        </div>
    );
};

export default Content;
