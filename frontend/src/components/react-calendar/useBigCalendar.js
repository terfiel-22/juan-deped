import { useState } from 'react';
import { COLOR_VARIATIONS } from '../../constants/CalendarColorVariations';

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

  const ColorVariation = COLOR_VARIATIONS;

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
