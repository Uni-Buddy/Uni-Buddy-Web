package com.unibuddy.be.plan.controller;

import com.unibuddy.be.plan.model.dto.CalendarDTO;
import com.unibuddy.be.plan.service.PlanService;
import com.unibuddy.be.util.EnumResponseCode;
import com.unibuddy.be.util.EnumResponseMessage;
import com.unibuddy.be.util.ResponseMessage;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Plan", description = "Plan API")
@RestController
@RequestMapping("/schedules")
@RequiredArgsConstructor
public class PlanController {
    private final PlanService planService;

    @GetMapping("/month/{year}/{month}")
    public ResponseEntity<ResponseMessage> getSchedulesToMonth(
            @PathVariable(value="year") final String year
            , @PathVariable(value="month") final String month
            , @AuthenticationPrincipal User user) {
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
            rm.setData(planService.getSchedulesToMonth(year, month, user.getUsername()));
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @GetMapping("/{month}/{day}")
    public ResponseEntity<ResponseMessage> getSchedulesToMonthAndDay(
            @PathVariable(value="month") final String month
            , @PathVariable(value="day") final String day
            , @AuthenticationPrincipal User user) {
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
            rm.setData(planService.getSchedulesToMonthAndDay(month, day, user.getUsername()));
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<ResponseMessage> saveSchedules(
            @RequestBody CalendarDTO calendarDTO, @AuthenticationPrincipal User user) {
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            planService.saveSchedules(calendarDTO, user.getUsername());

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @DeleteMapping("/{calNum}")
    public ResponseEntity<ResponseMessage> deleteSchedules(
            @PathVariable(value="calNum") final int calNum, @AuthenticationPrincipal User user) {
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            planService.deleteSchedules(calNum);

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }
}
