package BE.UniBuddy_crud.dao;

import BE.UniBuddy_crud.domain.Goal;
import BE.UniBuddy_crud.dto.GoalDto;

import java.time.LocalDate;

public interface GoalDAO {
    Goal saveGoal(Goal goal);

    Goal getGoal(Integer goalNum);

    void deleteGoal(Goal gOal);

    Goal getDGoal(LocalDate month);
}
