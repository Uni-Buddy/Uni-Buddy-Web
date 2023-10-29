package BE.UniBuddy_crud.service.impl;

import BE.UniBuddy_crud.domain.Goal;
import BE.UniBuddy_crud.domain.Time_score;
import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.dto.GoalDto;
import BE.UniBuddy_crud.dto.ScoreDto;
import BE.UniBuddy_crud.handler.GoalDataHandler;
import BE.UniBuddy_crud.service.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class GoalServiceImpl implements GoalService {

    GoalDataHandler goalDataHandler;

    @Autowired
    public GoalServiceImpl(GoalDataHandler goalDataHandler){
        this.goalDataHandler = goalDataHandler;
    }

    @Override
    public GoalDto saveGoal(int goalNum, String goalContent, LocalDate currentDate, Users users_id) {

        Goal goal = new Goal(goalNum, currentDate, goalContent, users_id);
        goalDataHandler.save(goal);

        return convertToGoalDto(goal);
    }

    public GoalDto convertToGoalDto(Goal goal){
        GoalDto goalDto = new GoalDto();
        goalDto.setGoal_num(goal.getGoal_num());
        goalDto.setMonth(goal.getMonth());
        goalDto.setGoal_content(goal.getGoal_content());
        goalDto.setUsers_id(goal.getUsers_id());

        return goalDto;
    }

    @Override
    public boolean deleteGoal(Integer goalNum) {
        try {
            Goal goal = goalDataHandler.findByGoalNum(goalNum);

            if (goal != null){
                goalDataHandler.delete(goal);
                return true;
            } else {
                return false;
            }
        }catch (Exception e){
            return false;

        }
    }

    @Override
    public GoalDto getGoal(LocalDate month) {
        Goal goal = goalDataHandler.getDayGoal(month);

        GoalDto goalDto = new GoalDto();
        goalDto.setGoal_num(goal.getGoal_num());
        goalDto.setMonth(goal.getMonth());
        goalDto.setGoal_content(goal.getGoal_content());
        goalDto.setUsers_id(goal.getUsers_id());

        return goalDto;
    }



}
