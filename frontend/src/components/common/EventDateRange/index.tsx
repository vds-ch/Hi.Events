import {Event} from "../../../types.ts";
import {formatDate} from "../../../utilites/dates.ts";

interface EventDateRangeProps {
    event: Event
}

export const EventDateRange = ({event}: EventDateRangeProps) => {
    const startDateFormatted = formatDate(event.start_date, "ddd, MMM D, YYYY h:mm A", event.timezone);
    const endDateFormatted = event.end_date ? formatDate(event.end_date, "ddd, MMM D, YYYY h:mm A", event.timezone) : null;
    const sameDayFormatted = formatDate(event.start_date, "dddd D. MMMM YYYY", event.timezone);
    const startTimeFormatted = formatDate(event.start_date, "HH:mm", event.timezone);
    const endTimeFormatted = event.end_date ? formatDate(event.end_date, "HH:mm", event.timezone) : null;
    //const timezone = formatDate(event.start_date, "z", event.timezone);

    const isSameDay = event.end_date && event.start_date.substring(0, 10) === event.end_date.substring(0, 10);

    return (
        <>
            {isSameDay ? (
                <span>
                    {sameDayFormatted} · {startTimeFormatted} - {endTimeFormatted}
                </span>
            ) : (
                <span>
                    {startDateFormatted}
                    {endDateFormatted && ` - ${endDateFormatted}`}
                </span>
            )}
        </>
    );
}

