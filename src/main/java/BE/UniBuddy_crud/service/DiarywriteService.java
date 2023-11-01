package BE.UniBuddy_crud.service;

import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.dto.DiarywriteDto;


import java.util.Date;



public interface DiarywriteService {

 DiarywriteDto saveDiarywrite(int actId, String actName, String title, String agencyName, String content, Date term, Users id) ;
}
