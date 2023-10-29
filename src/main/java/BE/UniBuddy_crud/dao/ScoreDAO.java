package BE.UniBuddy_crud.dao;

import BE.UniBuddy_crud.domain.Time_score;

public interface ScoreDAO {
    Time_score saveScore(Time_score time_score);

    Time_score getScore(Integer semester);

    void deleteScore(Time_score timeScore);
}
