import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { GET_STAGES } from '../../hooks/constants';
import { GlobalDispatchContext, GlobalStateContext } from '../../hooks/context';
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
                type: GET_STAGES,
                payload: {
                    columnsItems: {
                        ...columns,
                        [source.droppableId]: {
                            ...sourceColumn,
                            items: sourceItems,
                        },
                        [destination.droppableId]: {
                            ...destColumn,
                            items: destItems,
                        },
                    },
                },
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                type: GET_STAGES,
                payload: {
                    columnsItems: {
                        ...columns,
                        [source.droppableId]: {
                            ...column,
                            items: copiedItems,
                        },
                    },
                },
            });
        }
    };
    const { columnsItems } = React.useContext(GlobalStateContext);
    const dispatch = React.useContext(GlobalDispatchContext);

    return (
        <div className='column_grid'>
            <DragDropContext
                onDragEnd={(result) =>
                    onDragEnd(result, columnsItems, dispatch)
                }
            >
                {Object.entries(columnsItems).map(
                    ([columnId, column], index) => (
                        <StageColumn
                            droppableId={columnId}
                            key={index}
                            index={columnId}
                            name={column.name}
                            items={column.items}
                            data={index}
                        />
                    )
                )}
            </DragDropContext>
        </div>
    );
};

export default StageContainer;
