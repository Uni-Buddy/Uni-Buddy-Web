package BE.UniBuddy_crud.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.persistence.*;


@Entity
@Data // @Getter @Setter
@Table(name = "time_subject")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Time_subject {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    private int sub_num;

    @Column(nullable = false)
    private String sub_name;

    private String pro_name;

    private String classroom;

    @Column(nullable = false)
    private String date;

    @Column(nullable = false)
    private int start_time;

    @Column(nullable = false)
    private int end_time;

    @ManyToOne
    @JoinColumn(name = "semester", nullable = false)
    private Time_score time_score;

    public Time_subject(int sub_num, String sub_name, String pro_name, String classroom, String date, int start_time, int end_time) {
        this.sub_num = sub_num;
        this.sub_name = sub_name;
        this.pro_name = pro_name;
        this.classroom = classroom;
        this.date = date;
        this.start_time = start_time;
        this.end_time = end_time;
    }
}
