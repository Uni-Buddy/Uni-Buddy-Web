package com.unibuddy.be.diary.service;

import com.unibuddy.be.diary.model.dao.DiaryWriteMapper;
import com.unibuddy.be.diary.model.dto.DiaryWriteDTO;
import com.unibuddy.be.users.model.dao.UsersMapper;
import com.unibuddy.be.users.model.dto.UsersDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DiaryWriteServiceImpl implements DiaryWriteService{
    private final DiaryWriteMapper diaryWriteMapper;
    private final UsersMapper usersMapper;
    @Override
    public void saveDiaryWrite(DiaryWriteDTO diaryWriteDTO, String email) {
        UsersDTO user = usersMapper.getUserForEmail(email);
        diaryWriteDTO.setUsersId(user.getId());
        diaryWriteMapper.saveDiaryWrite(diaryWriteDTO);
    }

    @Override
    public DiaryWriteDTO getDiaryWrite(int actId, String email) {
        DiaryWriteDTO diaryWriteDTO = new DiaryWriteDTO();
        UsersDTO user = usersMapper.getUserForEmail(email);
        diaryWriteDTO.setActId(actId);
        diaryWriteDTO.setUsersId(user.getId());
        return diaryWriteMapper.getDiaryWrite(diaryWriteDTO);
    }

    @Override
    public List<DiaryWriteDTO> getDiaryWriteList(String email) {
        DiaryWriteDTO diaryWriteDTO = new DiaryWriteDTO();
        UsersDTO user = usersMapper.getUserForEmail(email);
        diaryWriteDTO.setUsersId(user.getId());
        return diaryWriteMapper.getDiaryWriteList(diaryWriteDTO);
    }

    @Override
    public void deleteDiaryWrite(int actId) {
        diaryWriteMapper.deleteDiaryWrite(actId);
    }
}
