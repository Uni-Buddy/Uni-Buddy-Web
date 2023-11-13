package com.unibuddy.be.goal.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GoalDTO {
    private int goalNum;
    private String goalContent;
    private String yearMonth;
    private int usersId;
}
