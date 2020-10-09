import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { columnsFromBackend } from '../../data';
import StageColumn from '../Molecules/StageColumn';

const StageContainer = () => {
    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems,
                },
            });
        }
    };
    const [columns, setColumns] = React.useState(columnsFromBackend);
    return (
        <div className='column_grid'>
            <DragDropContext
                onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <StageColumn
                            droppableId={columnId}
                            key={index}
                            index={columnId}
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
