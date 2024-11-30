import CustomCalendar from './CustomCalendar'
import CalendarDialog from './CalendarDialog'
import useBigCalendar from './useBigCalendar'

const CalendarAndDialog = ({ events, url, setters }) => {
    const {
        calevents,
        open,
        setOpen,
        formData,
        setFormData,
        update,
        setUpdate,
        ColorVariation,
    } = useBigCalendar({ events })

    return (
        <>
            {/* ------------------------------------------- */}
            {/*  Calendar*/}
            {/* ------------------------------------------- */}
            <CustomCalendar {...{ calevents, setOpen, setFormData, formData, setUpdate }} />

            {/* ------------------------------------------- */}
            {/*  Dialog */}
            {/* ------------------------------------------- */}
            <CalendarDialog {...{
                ColorVariation,
                setOpen, open,
                setFormData, formData,
                setUpdate, update,
                url, setters
            }} />
        </>
    )
}

export default CalendarAndDialog