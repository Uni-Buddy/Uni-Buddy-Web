package BE.UniBuddy_crud.handler;

import BE.UniBuddy_crud.domain.Time_score;
import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.dto.ScoreDto;

public interface ScoreDataHandler {
    Time_score getTime_score(int semester);
    Time_score findBySemester(int semester);
    void save(Time_score timeScore);

    void delete(Time_score timeScore);

    Time_score saveTime_score(int semester, float avgScore, int getScore, Users usersId);
}
