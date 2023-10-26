//시간표 열 

import React, { memo } from 'react';
import Timetablecell from './Timetablecell';

function Timetablerow({ ...props }) {
    return (
        <>
            <Timetablecell day="mon" {...props} />
            <Timetablecell day="tue" {...props} />
            <Timetablecell day="wed" {...props} />
            <Timetablecell day="thu" {...props} />
            <Timetablecell day="fri" {...props} />
        </>
    );
}

export default memo(Timetablerow);