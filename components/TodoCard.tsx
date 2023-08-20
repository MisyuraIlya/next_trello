"use client"
import React, { useEffect, useState } from 'react';
import {DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps} from 'react-beautiful-dnd'
import { XCircleIcon} from '@heroicons/react/20/solid';
import { useBoardStore } from '@/store/boardStore';
import { getUrl } from '@/helpers/getUrl';
import Image from 'next/image';
type props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (Element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}
const TodoCard = ({todo, index, id, innerRef, draggableProps, dragHandleProps} : props) => {

    const deleteTask = useBoardStore((state) => state.deleteTask);

    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        if(todo.image) {
            const fetchImage = async () => {
                const url = await getUrl(todo.image!);
                if(url) {
                    setImageUrl(url.toString());
                }
            }
            fetchImage()
        }  
    },[todo])

    return (
        <div className='bg-white rounded-md' {...draggableProps} {...dragHandleProps} ref={innerRef}>
            <div className='flex justify-between items-center p-5'>
                <p>{todo.title}</p>
                <button className='text-red-500 hover:text-red-600' onClick={() => deleteTask(index, todo, id)}>
                    <XCircleIcon className="ml-5 h-8 w-8"/>
                </button>
            </div>
            {imageUrl && (
                <div className='h-full w-full rounded-b-md'>
                    <Image 
                        src={imageUrl}
                        alt="Task image"
                        width={400}
                        height={200}
                        className="w-full object-contain rounded-b-md"
                    />
                </div>    
            )}
        </div>
    );
};

export default TodoCard;