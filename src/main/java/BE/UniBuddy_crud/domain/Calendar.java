package BE.UniBuddy_crud.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Data // @Getter @Setter
@Table(name = "calendar")
public class Calendar {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private int cal_num;

    @ManyToOne // 다른 엔티티와의 관계를 나타냄
    @JoinColumn(name = "users_id") // 외래 키 관련 열 설정
    private Users id;

    private String add_content;

    private LocalDate day;

    private int month;

    public Calendar(int cal_num, LocalDate day, int month, String add_content,Users id) {
        this.cal_num = cal_num;
        this.day = day;
        this.month = month;
        this.add_content = add_content;
        this.id = id;
    }


    public Calendar() {

    }


    public void setId(Users id) {
        this.id = id;
    }

    public Users getId(Users usersId) {
        return id;
    }

    public int getMonth(int month) {
        return this.month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public void setCal_num(int cal_num) {
        this.cal_num = cal_num;
    }

    public int getCal_num() {
        return cal_num;
    }

    public String getAdd_content(String addContent) {
        return add_content;
    }

    public void setAdd_content(String add_content) {
        this.add_content = add_content;
    }


    public LocalDate getDay(LocalDate day) {
        return this.day;
    }

    public void setDay(LocalDate day) {
        this.day = day;
    }






}


