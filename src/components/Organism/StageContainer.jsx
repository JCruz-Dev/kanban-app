import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { columnsFromBackend } from '../../data';
import StageColumn from '../Molecules/StageColumn';

const StageContainer = (props) => {
    const onDropEnd = (result, columns, setColumns) => {};
    const [columns, setColumns] = React.useState(columnsFromBackend);
    return (
        <div className='column_grid'>
            <DragDropContext>
                {Object.entries(columns).map(([id, column], index) => {
                    return (
                        <StageColumn
                            droppableId={id}
                            key={index}
                            name={column.name}
                            items={column.items}
                            data={index}
                        />
                    );
                })}
            </DragDropContext>
        </div>
    );
};

export default StageContainer;
