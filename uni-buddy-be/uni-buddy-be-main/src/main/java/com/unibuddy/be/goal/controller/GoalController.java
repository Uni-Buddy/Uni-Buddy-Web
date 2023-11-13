package com.unibuddy.be.goal.controller;

import com.unibuddy.be.goal.model.dto.GoalDTO;
import com.unibuddy.be.goal.service.GoalService;
import com.unibuddy.be.util.EnumResponseCode;
import com.unibuddy.be.util.EnumResponseMessage;
import com.unibuddy.be.util.ResponseMessage;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Goal", description = "Goal API")
@RestController
@RequestMapping("/goals")
@RequiredArgsConstructor
public class GoalController {
    private final GoalService goalService;

    @GetMapping("/{yearMonth}")
    public ResponseEntity<ResponseMessage> getGoalToMonth(@PathVariable(value="yearMonth") final String yearMonth){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            GoalDTO data = goalService.getGoalToMonth(yearMonth);

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
            rm.setData(data);
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<ResponseMessage> saveGoalToMonth(@RequestBody GoalDTO goalDTO){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            goalService.saveGoalToMonth(goalDTO);

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @DeleteMapping("/{goalNum}")
    public ResponseEntity<ResponseMessage> deleteGoalToMonth(@PathVariable(value="goalNum") final int goalNum){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            goalService.deleteGoalToMonth(goalNum);

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }
}
