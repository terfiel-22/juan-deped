import { useState } from 'react';

const useBigCalendar = ({ events }) => {
  const [calevents, setCalEvents] = useState(events);
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState();
  const [formData, setFormData] = useState({
    title: '',
    color: 'default',
    start: new Date(),
    end: new Date(),
  });

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
    calevents,
    setCalEvents,
    open,
    setOpen,
    formData,
    setFormData,
    update,
    setUpdate,
    ColorVariation,
  };
};

export default useBigCalendar;
