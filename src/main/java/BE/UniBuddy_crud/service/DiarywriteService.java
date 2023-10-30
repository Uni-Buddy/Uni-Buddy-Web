package BE.UniBuddy_crud.service;

import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.dto.DiarywriteDto;
import org.springframework.stereotype.Service;

import java.util.Date;



public interface DiarywriteService {


    //    public Diarywrite write(Diarywrite diarywrite) {
//        //일지 작성
//        Diarywrite diarywriteEntity = diarywriteRepository.save(diarywrite);
//        return diarywriteEntity;
//    }


 DiarywriteDto saveDiarywrite(int actId, String actName, String title, String agencyName, String content, Date term, Users id) ;
}
