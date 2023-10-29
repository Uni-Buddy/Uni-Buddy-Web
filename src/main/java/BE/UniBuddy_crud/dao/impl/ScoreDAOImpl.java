package BE.UniBuddy_crud.dao.impl;

import BE.UniBuddy_crud.dao.ScoreDAO;
import BE.UniBuddy_crud.domain.Time_score;
import BE.UniBuddy_crud.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoreDAOImpl implements ScoreDAO {

    ScoreRepository scoreRepository;

    @Autowired
    public ScoreDAOImpl(ScoreRepository scoreRepository){
        this.scoreRepository = scoreRepository;
    }


    //scoredao에서 정의한 savescore메서드 구현
    //timescore데이터를 repository를 통해 저장하고 데이터 반환
    @Override
    public Time_score saveScore(Time_score time_score) {
        //repository를 통해 time_score데이터 저장
        scoreRepository.save(time_score);
        return time_score;
    }

    //semester 값을 받아와 time_score데이터를 repository를 통해 반환
    @Override
    public Time_score getScore(Integer semester) {
        //repository를 통해 semester 값에 해당하는 데이터 조회
        Time_score time_score = scoreRepository.getById(semester);
        return time_score;
    }



    @Override
    public void deleteScore(Time_score timeScore) {
        scoreRepository.delete(timeScore);
    }
}
