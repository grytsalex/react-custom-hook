import { intervalToDuration } from 'date-fns'

export const calculateTimeDiff = (endDate, startDate) => {
    const diffDate = intervalToDuration({
        start: new Date(startDate),
        end: new Date(endDate),
    });

    const countMonth = diffDate?.months === 0 ? diffDate?.years * 12 : diffDate?.months;

    return { countYears: diffDate.years, countMonth, countDays: diffDate.days };
};
