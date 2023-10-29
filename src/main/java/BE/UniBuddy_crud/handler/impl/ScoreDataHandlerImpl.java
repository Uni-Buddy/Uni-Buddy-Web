package BE.UniBuddy_crud.handler.impl;

import BE.UniBuddy_crud.dao.ScoreDAO;
import BE.UniBuddy_crud.domain.Time_score;
import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.handler.ScoreDataHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ScoreDataHandlerImpl implements ScoreDataHandler {

    ScoreDAO scoreDAO;

    @Autowired
    public ScoreDataHandlerImpl(ScoreDAO scoreDAO){
        this.scoreDAO = scoreDAO;
    }


    @Override
    public Time_score saveTime_score(int semester, float avg_score, int get_score, Users users) {
        Time_score time_score = new Time_score(semester, avg_score, get_score, users);

        return scoreDAO.saveScore(time_score);
    }

    @Override
    public Time_score getTime_score(int semester) {
        return scoreDAO.getScore(semester);
    }



    //학기를 기반으로 디비에서 조회하고 반환
    @Override
    public Time_score findBySemester(int semester) {
        return scoreDAO.getScore(semester);
    }

    //데이터 저장
    //Time_score를 scoreDAO.saveScore(timeScore)을 호출하여 디비에 저장
    @Override
    public void save(Time_score timeScore) {
        scoreDAO.saveScore(timeScore);
    }

    //time_score를 이용하여 dao를 통해 디비에서 데이터 삭제
    @Override
    public void delete(Time_score timeScore) {
        scoreDAO.deleteScore(timeScore);

    }
}
