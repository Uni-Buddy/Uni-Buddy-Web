package BE.UniBuddy_crud.dao;

import BE.UniBuddy_crud.domain.Diarywrite;

public interface DiarywriteDAO {
    Diarywrite saveDiarywrite(Diarywrite diarywrite);

    Diarywrite getDiarywrite(String title);

    void deleteDiarywrite(Diarywrite DIarywrite);


}