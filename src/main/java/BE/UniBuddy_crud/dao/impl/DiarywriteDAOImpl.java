package BE.UniBuddy_crud.dao.impl;

import BE.UniBuddy_crud.dao.DiarywriteDAO;
import BE.UniBuddy_crud.domain.Diarywrite;
import BE.UniBuddy_crud.repository.DiarywriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiarywriteDAOImpl implements DiarywriteDAO {

    DiarywriteRepository diarywriteRepository;

    @Autowired
    public DiarywriteDAOImpl(DiarywriteRepository diarywriteRepository){
        this.diarywriteRepository = diarywriteRepository;
    }


    @Override
    public Diarywrite saveDiarywrite(Diarywrite diarywrite) {
        diarywriteRepository.save(diarywrite);
        return diarywrite;
    }

    @Override
    public Diarywrite getDiarywrite(String title) {
        Diarywrite diarywrite = diarywriteRepository.findByTitle(title);
        return diarywrite;
    }


    @Override
    public void deleteDiarywrite(Diarywrite DIarywrite) {

    }
}