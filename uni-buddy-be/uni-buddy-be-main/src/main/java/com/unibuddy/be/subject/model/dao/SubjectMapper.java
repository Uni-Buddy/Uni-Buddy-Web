package com.unibuddy.be.subject.model.dao;

import com.unibuddy.be.subject.model.dto.TimeSubjectDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface SubjectMapper {
    List<TimeSubjectDTO> getSubjectForTheSemester(int semester);

    void saveSubjectForTheSemester(TimeSubjectDTO subjectDTO);

    void deleteSubjectForTheSemester(int subNum);
}
