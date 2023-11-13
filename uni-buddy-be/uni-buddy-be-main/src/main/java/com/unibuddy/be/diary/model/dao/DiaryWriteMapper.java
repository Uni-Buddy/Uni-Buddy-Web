package com.unibuddy.be.diary.model.dao;

import com.unibuddy.be.diary.model.dto.DiaryWriteDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface DiaryWriteMapper {
    void saveDiaryWrite(DiaryWriteDTO diaryWriteDTO);

    DiaryWriteDTO getDiaryWrite(DiaryWriteDTO diaryWriteDTO);

    List<DiaryWriteDTO> getDiaryWriteList(DiaryWriteDTO diaryWriteDTO);

    void deleteDiaryWrite(int actId);
}
