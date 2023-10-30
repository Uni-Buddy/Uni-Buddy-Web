package BE.UniBuddy_crud.controller;


import BE.UniBuddy_crud.domain.Diarywrite;
import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.dto.DiarywriteDto;
import BE.UniBuddy_crud.dto.GoalDto;
import BE.UniBuddy_crud.repository.DiarywriteRepository;
import BE.UniBuddy_crud.service.AuthService;
import BE.UniBuddy_crud.service.DiarywriteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/diarywrite")
public class DiarywriteController {

    private final DiarywriteService diarywriteService;
    private AuthService authService;

    private final DiarywriteRepository diarywriteRepository;

    public DiarywriteController(DiarywriteService diarywriteService, AuthService authService, DiarywriteRepository diarywriteRepository) {
        this.diarywriteService = diarywriteService;
        this.authService = authService;
        this.diarywriteRepository = diarywriteRepository;
        this.authService = authService;
    }

@PostMapping(value = "/add") //일지 작성
    public DiarywriteDto write(@RequestBody DiarywriteDto diarywriteDto){
    String act_name = diarywriteDto.getAct_name();
    String title = diarywriteDto.getTitle();
    String agency_name = diarywriteDto.getAgency_name();
    String content = diarywriteDto.getContent();
    Date term = diarywriteDto.getTerm();
    Users id = diarywriteDto.getId();
    int act_id = diarywriteDto.getAct_id();

    return diarywriteService.saveDiarywrite(act_id,act_name,title, agency_name,content,term, id);
}


    @GetMapping("/{title}") //일지 조회 1개
    public Diarywrite getDiary(@PathVariable String title) {
        return diarywriteRepository. findByTitle(title);
    }

    @DeleteMapping("/delete/{title}") //일지 삭제
    @Transactional
    public ResponseEntity<String> deleteByTitle(@PathVariable String title) {
        try {
            Diarywrite diarywrite = diarywriteRepository.findByTitle(title);

            if (diarywrite != null) {
                diarywriteRepository.deleteByTitle(title);
                return ResponseEntity.ok("Deleted");
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            // 예외 처리 추가
            e.printStackTrace(); // 또는 로깅으로 변경해도 됩니다.
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }



}


