package BE.UniBuddy_crud.service.impl;

import BE.UniBuddy_crud.domain.Time_score;
import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.dto.ScoreDto;
import BE.UniBuddy_crud.handler.ScoreDataHandler;
import BE.UniBuddy_crud.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoreServiceImpl implements ScoreService {

    ScoreDataHandler scoreDataHandler;

    //의존성 주입을 통해 ScoreServiceImpl이 ScoreDataHandler를 사용할 수 있음
    @Autowired
    public ScoreServiceImpl(ScoreDataHandler scoreDataHandler) {
        this.scoreDataHandler = scoreDataHandler;
    }


    //saveScore구현 각 값을 받아와 Time_score데이터를 저장하고 ScoreDto로 변환해서 반환
    @Override
    public ScoreDto saveScore(ScoreDto scoreDto) {

        int semester = scoreDto.getSemester();
        float avg_score = scoreDto.getAvg_score();
        int get_score = scoreDto.getGet_score();
        Users id = scoreDto.getUsers_id();
        //time_score를 저장
        Time_score time_score = scoreDataHandler.saveTime_score(semester, avg_score, get_score, id);

        // 정보 추출
        scoreDto.setSemester(time_score.getSemester());
        scoreDto.setAvg_score(time_score.getAvg_score());
        scoreDto.setGet_score(time_score.getGet_score());
        scoreDto.setUsers_id(time_score.getUsers());

        return scoreDto;
    }

    //getScore구현 semester을 받아와 해당 학기의 time_score데이터를 가져와 dto로 변환 후 반환
    @Override
    public ScoreDto getScore(int semester) {
        Time_score time_score = scoreDataHandler.getTime_score(semester);

        ScoreDto scoreDto = new ScoreDto();
        scoreDto.setSemester(time_score.getSemester());
        scoreDto.setAvg_score(time_score.getAvg_score());
        scoreDto.setGet_score(time_score.getGet_score());
        scoreDto.setUsers_id(time_score.getUsers());

        return scoreDto;
    }

    public ScoreDto convertToScoreDto(Time_score time_score) {

        ScoreDto scoreDto = new ScoreDto();
        scoreDto.setSemester(time_score.getSemester());
        scoreDto.setAvg_score(time_score.getAvg_score());
        scoreDto.setGet_score(time_score.getGet_score());

        return scoreDto;
    }

    @Override
    public boolean deleteScore(Integer semester) {
        //예외 처리 땜에 씀
        //예외 발생 할 수 있는 부분 = try
        //예외 발생하면 catch 블록이 처리
        try {
            //scoreDataHandler 사용해서 해당 점수 디비에서 찾음
            //찾을라고 findBySemester 사용
            Time_score time_score = scoreDataHandler.findBySemester(semester);

            //점수 찾은 여부 확인
            //time_score에 점수 할당되었는지 검사
            if (time_score != null) {
                //점수 찾음

                //점수 삭제 위해 delete 호출
                scoreDataHandler.delete(time_score);
                return true; //삭제 완
            } else {
                return false;
            }
        } catch (Exception e) {
            return false;
        }
    }

}