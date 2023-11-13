package com.unibuddy.be.score.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TimeScoreDTO {
    private int semester;
    private int semesterType;
    private float avgScore;
    private float maxAvgScore;
    private int getScore;
    private int maxGetScore;
    private int usersId;
}
