package com.unibuddy.be.goal.service;

import com.unibuddy.be.goal.model.dto.GoalDTO;

public interface GoalService {
    GoalDTO getGoalToMonth(String yearMonth);

    void saveGoalToMonth(GoalDTO goalDTO);

    void deleteGoalToMonth(int goalNum);
}
