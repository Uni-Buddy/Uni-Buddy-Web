package BE.UniBuddy_crud.controller;

import BE.UniBuddy_crud.domain.Calendar;
import BE.UniBuddy_crud.dto.ScheduleDto;
import BE.UniBuddy_crud.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
public class PlanController {
    private PlanService planService;

    @Autowired
    public PlanController(PlanService planService) {
        this.planService = planService;
    }

    @PostMapping(value = "/schedules")
    public ScheduleDto createDayPlan(@RequestBody ScheduleDto scheduleDto) {

        return planService.savePlan(scheduleDto);
    }

    @DeleteMapping(value = "/schedules/{cal_num}")
    public ResponseEntity<String> deletePlan(@PathVariable Integer cal_num){
        boolean deleted = planService.deletePlan(cal_num);

        if (deleted) {
            return new ResponseEntity<>("일정이 삭제 되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("삭제 실패", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/schedules/{day}")
    public List<ScheduleDto> getDayPlan(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate day) {
        // day 변수에 해당하는 데이터를 조회하는 코드
        List<Calendar> calendars = planService.getDayPlan(day);

        // 조회된 데이터를 ScheduleDto로 변환
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

        return scheduleDtos;
    }

    @GetMapping(value = "/schedules/month/{month}")
    public List<ScheduleDto> getMonPlan(@PathVariable Integer month) {
        List<Calendar> calendars = planService.getMonPlan(month);

        // 조회된 데이터를 ScheduleDto로 변환
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

        return scheduleDtos;
    }
}
