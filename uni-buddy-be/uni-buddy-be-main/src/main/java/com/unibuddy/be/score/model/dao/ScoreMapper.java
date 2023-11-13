package com.unibuddy.be.score.model.dao;

import com.unibuddy.be.score.model.dto.TimeScoreDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface ScoreMapper {

    TimeScoreDTO getScoreForTheSemester(TimeScoreDTO scoreDTO);

    void saveScoreForTheSemester(TimeScoreDTO scoreDTO);

    void deleteScoreForTheSemester(TimeScoreDTO scoreDTO);

    void updateScoreForTheSemester(TimeScoreDTO scoreDTO);
}
