package BE.UniBuddy_crud.domain;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Data // @Getter @Setter
@Table(name = "time_score")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Time_score {

    @Id
    @Column(nullable = false)
    private int semester;

    private float avg_score;

    private int get_score;

    @ManyToOne
    @JoinColumn(name = "users_id")
    private Users id;

    public Time_score(int semester, float avg_score, int get_score, Users id) {
        this.semester = semester;
        this.avg_score = avg_score;
        this.get_score = get_score;
        this.id = id;
    }

    public Users getUsers() {
        return id;
    }

    public void setUsers(Users id) {
        this.id = id;
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

