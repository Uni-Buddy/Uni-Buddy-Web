
package BE.UniBuddy_crud.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.Builder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String university;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String name;

    @Column
    private String hash;

    @Column
    private String sns;

    @Column
    private String education;

    @Column
    private String phone;

    @Column
    private String new_pw;


    public String getNew_pw() {
        return new_pw;
    }

    public void setNew_pw(String new_pw) {
        this.new_pw = new_pw;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHash() {
        return hash;
    }

    public void setHash(String hash) {
        this.hash = hash;
    }

    public String getSns() {
        return sns;
    }

    public void setSns(String sns) {
        this.sns = sns;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

//
//    @OneToMany(mappedBy = "id")
//    private List<Calendar> calendarList = new ArrayList<>();
//
//    @OneToMany(mappedBy = "id")
//    private List<Diarywrite> diarywriteList = new ArrayList<>();
//
//    @OneToMany(mappedBy = "id")
//    private List<Time_score> timeScoreList = new ArrayList<>();
//
//    @OneToMany(mappedBy = "id")
//    private List<Goal> goalList = new ArrayList<>();

    @Builder
    public Users(String email, String name, String password, String university, Long id) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.university = university;
    }
}

