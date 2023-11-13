package com.unibuddy.be.diary.service;

import com.unibuddy.be.diary.model.dto.DiaryWriteDTO;

import java.util.List;

public interface DiaryWriteService {
    void saveDiaryWrite(DiaryWriteDTO diaryWriteDTO, String email);

    DiaryWriteDTO getDiaryWrite(int actId, String email);

    List<DiaryWriteDTO> getDiaryWriteList(String email);

    void deleteDiaryWrite(int actId);
}
