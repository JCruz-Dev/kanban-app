import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import StageCard from '../Molecules/StageCard';

const StageColumn = ({ name, items, data }) => {
    return (
        <div className='column_content'>
            <div className='column_title'>
                <span
                    className='column_title_task_number'
                    data-color={`${data}`}
                >
                    {items.length}
                </span>
                <p className='column_title_name'>{name}</p>
            </div>
            <StageCard />
        </div>
    );
};

export default StageColumn;
