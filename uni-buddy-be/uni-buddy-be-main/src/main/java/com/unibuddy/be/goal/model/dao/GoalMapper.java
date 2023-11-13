package com.unibuddy.be.goal.model.dao;

import com.unibuddy.be.goal.model.dto.GoalDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface GoalMapper {
    GoalDTO getGoalToMonth(String yearMonth);

    void saveGoalToMonth(GoalDTO goalDTO);

    void deleteGoalToMonth(int goalNum);
}
