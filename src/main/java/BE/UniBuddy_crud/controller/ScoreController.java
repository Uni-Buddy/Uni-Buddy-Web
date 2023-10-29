package BE.UniBuddy_crud.controller;

import BE.UniBuddy_crud.dto.ScoreDto;
import BE.UniBuddy_crud.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ScoreController {

    private ScoreService scoreService;

    @Autowired
    public ScoreController(ScoreService scoreService) {
        this.scoreService = scoreService;
    }

    //http://localhost:8080/scores/{semester}
    //학점 조회 - GET /scores/{semester}
    //semester을 통해 받아온 값을 리턴
    @GetMapping(value = "/scores/{semester}")
    public ScoreDto getScore(@PathVariable Integer semester) {

        return scoreService.getScore(semester);
    }

    //http://localhost:8080/scores
    //학점 정보 작성 - POST /scores *평균 학점과 취득 학점 모두 작성*
    //scoredto 객체의 값을 받아옴, 동일한 값을 받아서 내뱉음
    @PostMapping(value = "/scores")
    public ScoreDto createScore(@RequestBody ScoreDto scoreDto) {

        //scoreService를 통해 time_score 객체 저장
        return scoreService.saveScore(scoreDto);
    }

    //http://localhost:8080/scores/{semester}
    //학점 삭제 - DELETE /scores/{semester}
    @DeleteMapping(value = "/scores/{semester}")
    public ResponseEntity<String> deleteScore(@PathVariable Integer semester) {
        //deleteScoreBySemester -> 해당되는 학기 점수를 삭제
        //메서드가 성공하면 deleted에 true가 반환
        boolean deleted = scoreService.deleteScore(semester);

        //성공 여부에 따라 다른 결과 메시지 반환
        if (deleted) {
            return new ResponseEntity<>("'" + semester + "' 학기 정보가 삭제 되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("삭제 실패", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}


