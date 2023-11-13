package com.unibuddy.be.score.service;

import com.unibuddy.be.score.model.dto.TimeScoreDTO;

public interface ScoreService {
    TimeScoreDTO getScoreForTheSemester(int semesterType, String email);

    void saveScoreForTheSemester(TimeScoreDTO scoreDTO, String email);

    void deleteScoreForTheSemester(int semesterType, String email);
}
