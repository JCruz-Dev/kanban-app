import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Icon } from '@material-ui/core';
const StageCard = () => {
    return (
        <article className='card_item'>
            <h2 className='card_item_title'>Flow Meter Measurement Errors</h2>
            <a
                href='https://blog.gesrepair.com/'
                className='card_item_description'
            >
                https://blog.gesrepair.com/
            </a>
            <div className='card_item_tag'>
                <Icon fontSize='small' id='tag-id'>
                    category
                </Icon>
                <span>Logform</span>
            </div>
            <div className='card_item_date'>
                <Icon fontSize='small' id='tag-date'>
                    calendar_today
                </Icon>
                <span className='card_item_date_info'>09/15/2019</span>
            </div>
        </article>
    );
};

export default StageCard;
