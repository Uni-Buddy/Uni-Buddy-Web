//package BE.UniBuddy_crud.domain;
//
//
//import lombok.*;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//import javax.persistence.*;
//import java.util.Date;
//
//@Getter
//@Setter
//@Entity
//@Data // @Getter @Setter
//@Table(name = "diarywrite")
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
//public class Diarywrite {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(nullable = false)
//    private int act_id;
//
//    @GeneratedValue
//    @Column(nullable = false)
//    private String act_name;
//
//    @Column(nullable = false)
//    private String title;
//
//    @Column(nullable = false)
//    private Date term;
//
//    @Column(nullable = false)
//    private String agency_name;
//
//    @Column
//    private String content;
//
////    @Column(nullable = false)
////    private Long id;
//
////    @ManyToOne
////    @JoinColumn(name = "id", nullable = false)
////    private Users users;
//    @ManyToOne
//    @JoinColumn(name = "users_id")
//    private Users id;
//
//    @Builder
//    public Diarywrite(String act_name, String title ,Date term, String agency_name, String content) {
//        this.act_name = act_name;
//        this.title = title;
//        this.term = term;
//        this.agency_name = agency_name;
//        this.content = content;
//    }
//
//
//    public static Diarywrite create(String act_name, String title ,Date term, String agency_name, String content) {
//        Diarywrite diarywrite = new Diarywrite();
//        diarywrite.setAct_name(act_name);
//        diarywrite.setTitle(title);
//        diarywrite.setTerm(term);
//        diarywrite.setAgency_name(agency_name);
//        diarywrite.setContent(content);
//        return diarywrite;
//
//    }
//}
package BE.UniBuddy_crud.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "diarywrite")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
public class Diarywrite {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private int act_id;

    private String act_name;
    private String title;

    private Date term;

    private String agency_name;
    private String content;

    @ManyToOne
    @JoinColumn(name = "users_id")
    private Users id;

    public int getAct_id() {
        return act_id;
    }

    public void setAct_id(int act_id) {
        this.act_id = act_id;
    }

    public String getAct_name() {
        return act_name;
    }

    public void setAct_name(String act_name) {
        this.act_name = act_name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getTerm() {
        return term;
    }

    public void setTerm(Date term) {
        this.term = term;
    }

    public String getAgency_name() {
        return agency_name;
    }

    public void setAgency_name(String agency_name) {
        this.agency_name = agency_name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Users getId() {
        return id;
    }

    public void setId(Users id) {
        this.id = id;
    }

    public void setUsers(Users user) {
    }


}
