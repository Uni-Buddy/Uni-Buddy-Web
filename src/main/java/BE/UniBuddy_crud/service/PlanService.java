package BE.UniBuddy_crud.service;

import BE.UniBuddy_crud.domain.Calendar;
import BE.UniBuddy_crud.dto.ScheduleDto;

import java.time.LocalDate;
import java.util.List;

public interface PlanService {
    ScheduleDto savePlan(ScheduleDto scheduleDto);

    boolean deletePlan(Integer calNum);

    List<Calendar> getDayPlan(LocalDate day);

    List<Calendar> getMonPlan(Integer month);
}
