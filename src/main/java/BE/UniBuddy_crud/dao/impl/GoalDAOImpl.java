package BE.UniBuddy_crud.dao.impl;

import BE.UniBuddy_crud.dao.GoalDAO;
import BE.UniBuddy_crud.domain.Goal;
import BE.UniBuddy_crud.dto.GoalDto;
import BE.UniBuddy_crud.repository.GoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class GoalDAOImpl implements GoalDAO {

    GoalRepository goalRepository;

    @Autowired
    public GoalDAOImpl(GoalRepository goalRepository){
        this.goalRepository = goalRepository;
    }

    @Override
    public Goal saveGoal(Goal goal) {
        goalRepository.save(goal);
        return goal;
    }

    @Override
    public Goal getGoal(Integer goalNum) {
        Goal goal = goalRepository.getById(goalNum);
        return goal;
    }

    @Override
    public void deleteGoal(Goal gOal) {
        goalRepository.delete(gOal);
    }


    @Override
    public Goal getDGoal(LocalDate month) {
        Goal goal = goalRepository.getByMonth(month);
        return goal;
    }
}
