package BE.UniBuddy_crud.handler.impl;

import BE.UniBuddy_crud.dao.DiarywriteDAO;
import BE.UniBuddy_crud.domain.Diarywrite;
import BE.UniBuddy_crud.handler.DiarywriteDataHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class DiarywriteDataHandlerImpl implements DiarywriteDataHandler {

    DiarywriteDAO diarywriteDAO;

    @Autowired
    public DiarywriteDataHandlerImpl(DiarywriteDAO diarywriteDAO){
        this.diarywriteDAO = diarywriteDAO;
    }

    @Override
    public void save(Diarywrite diarywrite) {
        diarywriteDAO.saveDiarywrite(diarywrite);
    }

}
