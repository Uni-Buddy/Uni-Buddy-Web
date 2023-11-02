package BE.UniBuddy_crud.handler;

import BE.UniBuddy_crud.domain.Diarywrite;
import BE.UniBuddy_crud.handler.impl.DiarywriteDataHandlerImpl;

public interface DiarywriteDataHandler {

    void save(Diarywrite diarywrite);

    Diarywrite getDDiarywrite(String title);





}
