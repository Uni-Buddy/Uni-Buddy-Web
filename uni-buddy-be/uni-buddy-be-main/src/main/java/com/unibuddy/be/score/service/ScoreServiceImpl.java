package com.unibuddy.be.score.service;

import com.unibuddy.be.score.model.dao.ScoreMapper;
import com.unibuddy.be.score.model.dto.TimeScoreDTO;
import com.unibuddy.be.users.model.dao.UsersMapper;
import com.unibuddy.be.users.model.dto.UsersDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ScoreServiceImpl implements ScoreService{
    private final ScoreMapper scoreMapper;
    private final UsersMapper usersMapper;

    @Override
    public TimeScoreDTO getScoreForTheSemester(int semesterType, String email) {
        UsersDTO user = usersMapper.getUserForEmail(email);
        TimeScoreDTO scoreDTO = new TimeScoreDTO();
        scoreDTO.setSemesterType(semesterType);
        scoreDTO.setUsersId(user.getId());

        TimeScoreDTO resultDto = scoreMapper.getScoreForTheSemester(scoreDTO);
        if(resultDto == null) {
            throw new IllegalArgumentException("데이터가 존재하지 않습니다.");
        }
        return resultDto;
    }

    @Override
    public void saveScoreForTheSemester(TimeScoreDTO scoreDTO, String email) {
        UsersDTO user = usersMapper.getUserForEmail(email);
        scoreDTO.setUsersId(user.getId());

        TimeScoreDTO dto = scoreMapper.getScoreForTheSemester(scoreDTO);
        if(dto == null) {
            scoreMapper.saveScoreForTheSemester(scoreDTO);
        } else {
            scoreMapper.updateScoreForTheSemester(scoreDTO);
        }

    }

    @Override
    public void deleteScoreForTheSemester(int semesterType, String email) {
        UsersDTO user = usersMapper.getUserForEmail(email);
        TimeScoreDTO scoreDTO = new TimeScoreDTO();
        scoreDTO.setSemesterType(semesterType);
        scoreDTO.setUsersId(user.getId());
        scoreMapper.deleteScoreForTheSemester(scoreDTO);
    }
}
