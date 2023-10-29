package BE.UniBuddy_crud.service;

import BE.UniBuddy_crud.domain.Diarywrite;
import BE.UniBuddy_crud.repository.DiarywriteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
public class DiarywriteService {

    private final DiarywriteRepository diarywriteRepository;

    public Diarywrite write(Diarywrite diarywrite) {
        //일지 작성
        Diarywrite diarywriteEntity = diarywriteRepository.save(diarywrite);
        return diarywriteEntity;
    }
}
