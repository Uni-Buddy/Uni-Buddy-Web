package BE.UniBuddy_crud.dto;

import BE.UniBuddy_crud.domain.Users;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
//Calender 테이블 사용
public class ScheduleDto {
    //달 일정 조회 - GET /schedule/{month}
    //일 일정 조회 - GET /schedule/{day}
    //일 일정 추가 - POST /schedule
    //일 일정 삭제 - DELETE /schedule/{cal_num}

    private int cal_num;
    private LocalDate day;
    private int month;
    private String add_content;
    private Users id;

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public Users getUsers_id() {
        return id;
    }

    public void setUsers_id(Users id) {
        this.id = id;
    }

    public int getCal_num() {
        return cal_num;
    }

    public void setCal_num(int cal_num) {
        this.cal_num = cal_num;
    }

    public LocalDate getDay() {
        return day;
    }

    public void setDay(LocalDate day) {
        this.day = day;
    }

    public String getAdd_content() {
        return add_content;
    }

    public void setAdd_content(String add_content) {
        this.add_content = add_content;
    }

    public void setMonthStartDate(LocalDate monthStartDate) {
    }

    public void setMonthEndDate(LocalDate monthEndDate) {
    }

    public void setSchedules(List<String> scheduleList) {
    }
}
