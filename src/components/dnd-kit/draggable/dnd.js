import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';

import Draggable  from './Draggable';
import Dropable from './Dropable';

const Dnd = () => {

    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
        <Draggable>Drag me</Draggable>
    );

    return (
        <DndContext onDragEnd={handleDragEnd}>
            {!isDropped ? draggableMarkup : null}
            <Dropable>
                {isDropped ? draggableMarkup : 'Drop here'}
            </Dropable>
        </DndContext>
    );

    function handleDragEnd(event) {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true);
        }
    }

}

export default Dnd;