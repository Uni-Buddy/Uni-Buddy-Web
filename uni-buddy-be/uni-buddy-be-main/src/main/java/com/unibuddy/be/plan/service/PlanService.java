package com.unibuddy.be.plan.service;

import com.unibuddy.be.plan.model.dto.CalendarDTO;

import java.util.List;

public interface PlanService {
    List<CalendarDTO> getSchedulesToMonth(String year, String month, String email);

    CalendarDTO getSchedulesToMonthAndDay(String month, String day, String email);

    void saveSchedules(CalendarDTO calendarDTO, String email);

    void deleteSchedules(int calNum);
}
