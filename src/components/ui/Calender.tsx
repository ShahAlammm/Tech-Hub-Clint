"use client";
import { Calendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone } from "@internationalized/date";

const Calender = () => {
    return (
        <Calendar
            aria-label="Date (Read Only)"
            value={today(getLocalTimeZone())}
            isReadOnly
        />
    );
};

export default Calender;