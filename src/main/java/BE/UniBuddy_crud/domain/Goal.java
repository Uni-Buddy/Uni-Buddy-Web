package BE.UniBuddy_crud.domain;


import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.persistence.*;
import java.time.LocalDate;


@Entity //JPA 엔티티 클래스임을 나타냄
@Data // @Getter @Setter 자동 생성
@Table(name = "goal") //goal 테이블이랑 매핑
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Goal {

    @Id //기본키
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false) //제약 조건 not null
    private int goal_num;

    private String goal_content;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private  LocalDate month;

    @ManyToOne //다대일관계, 여러 개의 목표는 하나의 사용자에 속함
    @JoinColumn(name = "users_id")
    // 외래키 관계 설정, users_id 열이 users 엔티티의 id 열 참조
    private Users id; //users 엔티티와의 관계를 나타냄, 사용자와 목표 연결

    public Goal(int goal_num, LocalDate month, String goal_content, Users id) {
        this.goal_num = goal_num;
        this.month = month;
        this.goal_content = goal_content;
        this.id = id;
    }

    public Users getId() {
        return id;
    }
    public int getGoal_num() {
        return goal_num;
    }
    public String getGoal_content() {
        return goal_content;
    }
    public LocalDate getMonth() {
        return month;
    }
    public Users getUsers_id() {
        return id;
    }


    public void setId(Users id) {
        this.id = id;
    }
    public void setGoal_num(int goal_num) {
        this.goal_num = goal_num;
    }
    public void setGoal_content(String goal_content) {
        this.goal_content = goal_content;
    }
    public void setMonth(LocalDate month) {
        this.month = month;
    }
    public void setUsers_id(Users id) {
        this.id = id;
    }
}
