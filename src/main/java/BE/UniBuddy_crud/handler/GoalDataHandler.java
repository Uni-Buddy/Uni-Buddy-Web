package BE.UniBuddy_crud.handler;

import BE.UniBuddy_crud.domain.Goal;
import java.time.LocalDate;

public interface GoalDataHandler {
    void save(Goal goal);

    void delete(Goal gOal);

    Goal findByGoalNum(Integer goalNum);
    Goal getDayGoal(LocalDate month);
}
