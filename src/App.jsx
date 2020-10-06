import React from 'react';
import Aside from './components/Organism/Aside';
import Content from './Content';

const App = () => {
    return (
        <div className='main_content'>
            <Aside />
            <Content />
        </div>
    );
};

export default App;
