package com.unibuddy.be.subject.service;

import com.unibuddy.be.score.model.dao.ScoreMapper;
import com.unibuddy.be.score.model.dto.TimeScoreDTO;
import com.unibuddy.be.subject.model.dao.SubjectMapper;
import com.unibuddy.be.users.model.dao.UsersMapper;
import com.unibuddy.be.subject.model.dto.TimeSubjectDTO;
import com.unibuddy.be.users.model.dto.UsersDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubjectServiceImpl implements SubjectService {
    private final ScoreMapper scoreMapper;
    private final SubjectMapper subjectMapper;
    private final UsersMapper usersMapper;

    @Override
    public List<TimeSubjectDTO> getSubjectForTheSemester(int semester, String email) {
        UsersDTO user = usersMapper.getUserForEmail(email);
        TimeScoreDTO scoreDTO = new TimeScoreDTO();
        scoreDTO.setSemesterType(semester);
        scoreDTO.setUsersId(user.getId());

        TimeScoreDTO semesterDTO = scoreMapper.getScoreForTheSemester(scoreDTO);

        List<TimeSubjectDTO> result = subjectMapper.getSubjectForTheSemester(semesterDTO.getSemester());
        if(result == null) {
            throw new IllegalArgumentException("데이터가 존재하지 않습니다.");
        }

        return result;
    }

    @Override
    public void saveSubjectForTheSemester(TimeSubjectDTO subjectDTO, String email) {
        UsersDTO user = usersMapper.getUserForEmail(email);
        TimeScoreDTO scoreDTO = new TimeScoreDTO();
        scoreDTO.setSemesterType(subjectDTO.getSemester());
        scoreDTO.setUsersId(user.getId());

        TimeScoreDTO semesterDTO = scoreMapper.getScoreForTheSemester(scoreDTO);
        subjectDTO.setSemester(semesterDTO.getSemester());
        subjectMapper.saveSubjectForTheSemester(subjectDTO);
    }

    @Override
    public void deleteSubjectForTheSemester(int subNum, String email) {
        TimeSubjectDTO subjectDTO = new TimeSubjectDTO();
        subjectDTO.setSubNum(subNum);

        subjectMapper.deleteSubjectForTheSemester(subNum);
    }
}
