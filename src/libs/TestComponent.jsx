import React from 'react';
import { calculateTimeDiff } from './date-fns';

export const TestComponent = () => {
    const startDate = '2010-09-12T10:06:56.581846+00:00'

    const { countYears, countMonth, countDays } = calculateTimeDiff(
        new Date().toDateString(),
        new Date(startDate).toDateString(),
    );

    return (
        <div style={{ width: '100px', height: '100px'}}>
            <span>{`Time: Years: ${countYears} Month: ${countMonth} Days:  ${countDays}`}</span>
        </div>
    );
}

