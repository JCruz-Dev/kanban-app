import React from 'react';
import useCollection from './hooks/useCollection';

export const Content = () => {
    const { docs } = useCollection('tasks');
    console.log(docs);
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};
