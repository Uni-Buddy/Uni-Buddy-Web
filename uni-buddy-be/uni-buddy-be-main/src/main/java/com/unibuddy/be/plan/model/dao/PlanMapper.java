package com.unibuddy.be.plan.model.dao;

import com.unibuddy.be.plan.model.dto.CalendarDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface PlanMapper {
    List<CalendarDTO> getSchedulesToMonth(CalendarDTO req);

    CalendarDTO getSchedulesToMonthAndDay(CalendarDTO req);

    void saveSchedules(CalendarDTO calendarDTO);

    void deleteSchedules(int calNum);

    void updateSchedules(CalendarDTO calendarDTO);
}
