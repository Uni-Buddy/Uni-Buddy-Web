package BE.UniBuddy_crud.service.impl;

import BE.UniBuddy_crud.domain.Calendar;
import BE.UniBuddy_crud.domain.Goal;
import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.dto.ScheduleDto;
import BE.UniBuddy_crud.handler.PlanDataHandler;
import BE.UniBuddy_crud.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class PlanServiceImpl implements PlanService {

    PlanDataHandler planDataHandler;

    @Autowired
    public PlanServiceImpl(PlanDataHandler planDataHandler){
        this.planDataHandler = planDataHandler;
    }
    @Override
    public ScheduleDto savePlan(ScheduleDto scheduleDto) {

        String add_content = scheduleDto.getAdd_content();
        LocalDate day = scheduleDto.getDay();
        int month = scheduleDto.getMonth();
        Users id = scheduleDto.getUsers_id();

        Calendar calendar = new Calendar();
        calendar.setAdd_content(add_content);
        calendar.setDay(day);
        calendar.setMonth(month);
        calendar.setId(id);

        calendar = planDataHandler.saveDayPlan(calendar);

        scheduleDto.setAdd_content(calendar.getAdd_content());
        scheduleDto.setDay(calendar.getDay());
        scheduleDto.setMonth(calendar.getMonth());
        scheduleDto.setUsers_id(calendar.getId());

        return scheduleDto;
    }

    @Override
    public boolean deletePlan(Integer calNum) {
        try {
            Calendar calendar = planDataHandler.findByCalNum(calNum);

            if (calendar != null) {
                planDataHandler.delete(calendar);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            return false;

        }

    }

    @Override
    public List<Calendar> getDayPlan(LocalDate day) {
        List<Calendar> calendars = planDataHandler.getDaySubPlan(day);
        List<ScheduleDto> scheduleDtos = new ArrayList<>();

        for (Calendar calendar : calendars) {
            ScheduleDto scheduleDto = new ScheduleDto();
            scheduleDto.setCal_num(calendar.getCal_num());
            scheduleDto.setDay(calendar.getDay());
            scheduleDto.setMonth(calendar.getMonth());
            scheduleDto.setAdd_content(calendar.getAdd_content());
            scheduleDto.setUsers_id(calendar.getId());
            scheduleDtos.add(scheduleDto);
        }

        return calendars;
    }

    @Override
    public List<Calendar> getMonPlan(Integer month) {
        List<Calendar> calendars = planDataHandler.getMonSubPlan(month);
        List<ScheduleDto> scheduleDtos = new ArrayList<>();

        for (Calendar calendar : calendars) {
            ScheduleDto scheduleDto = new ScheduleDto();
            scheduleDto.setCal_num(calendar.getCal_num());
            scheduleDto.setDay(calendar.getDay());
            scheduleDto.setMonth(calendar.getMonth());
            scheduleDto.setAdd_content(calendar.getAdd_content());
            scheduleDto.setUsers_id(calendar.getId());
            scheduleDtos.add(scheduleDto);
        }

        return calendars;
    }


}
