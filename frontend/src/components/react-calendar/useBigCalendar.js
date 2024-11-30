import { useState } from "react";


const useBigCalendar = ({ events }) => {
    const [calevents, setCalEvents] = useState(events);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [color, setColor] = useState('default');
    const [update, setUpdate] = useState();

    const ColorVariation = [
        {
            id: 1,
            eColor: '#1a97f5',
            value: 'default',
        },
        {
            id: 2,
            eColor: '#39b69a',
            value: 'green',
        },
        {
            id: 3,
            eColor: '#fc4b6c',
            value: 'red',
        },
        {
            id: 4,
            eColor: '#615dff',
            value: 'azure',
        },
        {
            id: 5,
            eColor: '#fdd43f',
            value: 'warning',
        },
    ];

    return {
        calevents, setCalEvents,
        open, setOpen,
        title, setTitle,
        start, setStart,
        end, setEnd,
        color, setColor,
        update, setUpdate,
        ColorVariation
    }
}

export default useBigCalendar