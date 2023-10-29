package BE.UniBuddy_crud.dto;

import BE.UniBuddy_crud.domain.Users;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
//Goal 테이블 사용
public class GoalDto {

    //목표 조회 - GET /goal/{month}
    //목표 작성 - POST /goal
    //목표 수정 - PATCH /goal/{goal_num}
    //목표 삭제 - DELETE /goal/{goal_num}

    private int goal_num;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate month;
    private String goal_content;
    private Users users_id;

    public LocalDate getMonth() {
        return month;
    }

    public void setMonth(LocalDate month) {
        this.month = month;
    }

    public int getGoal_num() {
        return goal_num;
    }

    public void setGoal_num(int goal_num) {
        this.goal_num = goal_num;
    }

    public String getGoal_content() {
        return goal_content;
    }

    public void setGoal_content(String goal_content) {
        this.goal_content = goal_content;
    }

    public Users getUsers_id() {
        return users_id;
    }

    public void setUsers_id(Users id) {
        this.users_id = id;
    }

}
