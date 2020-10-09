import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Icon } from '@material-ui/core';

const StageCard = ({ title, description, tag, date, id, index }) => {
    return (
        <Draggable draggableId={id} index={index} key={id}>
            {(provided) => {
                return (
                    <article
                        className='card_item'
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={{ ...provided.draggableProps.style }}
                    >
                        <h2 className='card_item_title'>{title}</h2>

                        <p className='card_item_description'>{description}</p>
                        <div className='card_item_tag'>
                            <Icon fontSize='small' id='tag-id'>
                                category
                            </Icon>
                            <span>{tag}</span>
                        </div>
                        <div className='card_item_date'>
                            <Icon fontSize='small' id='tag-date'>
                                calendar_today
                            </Icon>
                            <span className='card_item_date_info'>{date}</span>
                        </div>
                    </article>
                );
            }}
        </Draggable>
    );
};
StageCard.defaultProps = {
    title: 'Empty Title',
    description: 'Empty Url ',
    tag: 'unknow tag',
    date: Date.now(),
};

export default StageCard;
