package BE.UniBuddy_crud.dto;

import BE.UniBuddy_crud.domain.Users;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
//Time_score 테이블 사용
public class ScoreDto {

    //학점 조회 - GET /scores/{semester}
    //학점 정보 작성 - POST /scores *평균 학점과 취득 학점 모두 작성*
    //학점 수정 - PATCH /scores/{semester}
    //학점 삭제 - DELETE /scores/{semester}

    private int semester;
    private float avg_score;
    private int get_score;
    private Users users_id;

    public Users getUsers_id() {
        return users_id;
    }

    public void setUsers_id(Users users_id) {
        this.users_id = users_id;
    }

    public int getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }
    public float getAvg_score() {
        return avg_score;
    }

    public void setAvg_score(float avg_score) {
        this.avg_score = avg_score;
    }

    public int getGet_score() {
        return get_score;
    }

    public void setGet_score(int get_score) {
        this.get_score = get_score;
    }

}
