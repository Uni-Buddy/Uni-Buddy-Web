package BE.UniBuddy_crud.controller;

import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.dto.GoalDto;
import BE.UniBuddy_crud.service.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

@RestController
public class GoalController {

    private GoalService goalService;

    @Autowired
    public GoalController(GoalService goalService){
        this.goalService = goalService;
    }

    @PostMapping(value = "/goals")
    public GoalDto createGoal(@RequestBody GoalDto goalDto){
        int goal_num = goalDto.getGoal_num();
        String goal_content = goalDto.getGoal_content();
        LocalDate month = LocalDate.now();
        Users id = goalDto.getUsers_id();

        return goalService.saveGoal(goal_num, goal_content, month, id);
    }

    @DeleteMapping(value = "/goals/{goal_num}")
    public ResponseEntity<String> deleteGoal(@PathVariable Integer goal_num){
        boolean deleted = goalService.deleteGoal(goal_num);

        if (deleted) {
            return new ResponseEntity<>("목표가 삭제 되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("삭제 실패", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/goals/{month}")
    public GoalDto getGoal(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate month) {
        return goalService.getGoal(month);
    }
}
