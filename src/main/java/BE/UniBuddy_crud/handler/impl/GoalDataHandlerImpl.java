package BE.UniBuddy_crud.handler.impl;

import BE.UniBuddy_crud.dao.GoalDAO;
import BE.UniBuddy_crud.domain.Goal;
import BE.UniBuddy_crud.handler.GoalDataHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@Transactional
public class GoalDataHandlerImpl implements GoalDataHandler {

    GoalDAO goalDAO;

    @Autowired
    public GoalDataHandlerImpl(GoalDAO goalDAO){
        this.goalDAO = goalDAO;
    }

    @Override
    public void save(Goal goal) {
        goalDAO.saveGoal(goal);
    }

    @Override
    public void delete(Goal gOal) {
        goalDAO.deleteGoal(gOal);
    }

    @Override
    public Goal findByGoalNum(Integer goalNum) {
        return goalDAO.getGoal(goalNum);
    }

    @Override
    public Goal getDayGoal(LocalDate month) {
        return goalDAO.getDGoal(month);
    }

}
