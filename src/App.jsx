import React from 'react';
import Aside from './components/Organism/Aside';
import Content from './Content';
import useCollection from './hooks/useCollection';

const App = () => {
    useCollection();
    return (
        <div className='main_content'>
            <Aside />
            <Content />
        </div>
    );
};

export default App;
