import CustomCalendar from './CustomCalendar'
import CalendarDialog from './CalendarDialog'
import useBigCalendar from './useBigCalendar'

const CalendarAndDialog = ({ events }) => {
    const {
        calevents, setCalEvents,
        open, setOpen,
        title, setTitle,
        start, setStart,
        end, setEnd,
        color, setColor,
        update, setUpdate,
        ColorVariation
    } = useBigCalendar({ events })

    return (
        <>
            {/* ------------------------------------------- */}
            {/*  Calendar*/}
            {/* ------------------------------------------- */}
            <CustomCalendar {...{ calevents, setOpen, setStart, setEnd, setColor, setTitle, setUpdate }} />

            {/* ------------------------------------------- */}
            {/*  Dialog */}
            {/* ------------------------------------------- */}
            <CalendarDialog {...{
                ColorVariation,
                setCalEvents, calevents,
                setOpen, open,
                setTitle, title,
                setColor, color,
                setStart, start,
                setEnd, end,
                setUpdate, update,
            }} />
        </>
    )
}

export default CalendarAndDialog