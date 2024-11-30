import { useEffect, useState } from 'react';
import { COLOR_VARIATIONS } from '../../constants/CalendarColorVariations';
import { isoDateFormatter } from '../../utils/dateFormatter';

const useBigCalendar = ({ events }) => {
  const [calevents, setCalEvents] = useState(events);

  useEffect(() => {
    if (!events) return;
    const formattedEvents = events.map((ev) => ({
      ...ev,
      start: isoDateFormatter(ev.start),
      end: isoDateFormatter(ev.end),
    }));
    console.log(formattedEvents);
    setCalEvents(formattedEvents);
  }, [events]);

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
