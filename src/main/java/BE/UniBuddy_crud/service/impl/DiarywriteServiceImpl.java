package BE.UniBuddy_crud.service.impl;

import BE.UniBuddy_crud.domain.Diarywrite;
import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.dto.DiarywriteDto;
import BE.UniBuddy_crud.handler.DiarywriteDataHandler;
import BE.UniBuddy_crud.service.DiarywriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class DiarywriteServiceImpl implements DiarywriteService {

    private final DiarywriteDataHandler diarywriteDataHandler;

    @Autowired
    public DiarywriteServiceImpl(DiarywriteDataHandler diarywriteDataHandler) {
        this.diarywriteDataHandler = diarywriteDataHandler;
    }

    @Override
    public DiarywriteDto saveDiarywrite(int actId, String actName, String title, String agencyName, String content, Date term, Users id) {
        Diarywrite diarywrite = new Diarywrite(actId, actName, title, term, agencyName, content, id);
        diarywriteDataHandler.save(diarywrite);
        return convertToDiarywriteDto(diarywrite);
    }

    @Override
    public DiarywriteDto ggetDiarywrite(String title) {
        Diarywrite diarywrite = diarywriteDataHandler.getDDiarywrite(title);

        if (diarywrite != null) {
            return convertToDiarywriteDto(diarywrite);
        } else {
            return null; // 또는 다른 처리를 수행하십시오.
        }
    }

    private DiarywriteDto convertToDiarywriteDto(Diarywrite diarywrite) {
        DiarywriteDto diarywriteDto = new DiarywriteDto();
        diarywriteDto.setAct_id(diarywrite.getAct_id());
        diarywriteDto.setUId(diarywrite.getUId());
        diarywriteDto.setAct_name(diarywrite.getAct_name());
        diarywriteDto.setTitle(diarywrite.getTitle());
        diarywriteDto.setTerm(diarywrite.getTerm());
        diarywriteDto.setAgency_name(diarywrite.getAgency_name());
        diarywriteDto.setContent(diarywrite.getContent());

        return diarywriteDto;
    }
}
