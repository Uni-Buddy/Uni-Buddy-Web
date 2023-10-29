package BE.UniBuddy_crud.service;

import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.dto.GoalDto;

import java.time.LocalDate;

public interface GoalService {
    GoalDto saveGoal(int goalNum, String goalContent, LocalDate currentDate, Users users_id);

    boolean deleteGoal(Integer goalNum);

    GoalDto getGoal(LocalDate month);
}
