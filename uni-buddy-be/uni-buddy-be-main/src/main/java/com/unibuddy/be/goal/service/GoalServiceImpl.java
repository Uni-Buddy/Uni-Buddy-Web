package com.unibuddy.be.goal.service;

import com.unibuddy.be.goal.model.dao.GoalMapper;
import com.unibuddy.be.goal.model.dto.GoalDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GoalServiceImpl implements GoalService {
    private final GoalMapper goalMapper;
    @Override
    public GoalDTO getGoalToMonth(String yearMonth) {
        return goalMapper.getGoalToMonth(yearMonth);
    }

    @Override
    public void saveGoalToMonth(GoalDTO goalDTO) {
        goalMapper.saveGoalToMonth(goalDTO);
    }

    @Override
    public void deleteGoalToMonth(int goalNum) {
        goalMapper.deleteGoalToMonth(goalNum);
    }
}
