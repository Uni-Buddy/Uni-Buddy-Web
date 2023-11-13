package com.unibuddy.be.subject.service;

import com.unibuddy.be.subject.model.dto.TimeSubjectDTO;

import java.util.List;

public interface SubjectService {
    List<TimeSubjectDTO> getSubjectForTheSemester(int semester, String email);

    void saveSubjectForTheSemester(TimeSubjectDTO subjectDTO, String email);

    void deleteSubjectForTheSemester(int subNum, String email);
}
