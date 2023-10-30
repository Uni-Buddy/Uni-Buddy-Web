package BE.UniBuddy_crud.dto;

import BE.UniBuddy_crud.domain.Diarywrite;
import BE.UniBuddy_crud.domain.Users;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class DiarywriteDto {
    private int act_id;
    private String act_name;
    private String title;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private  Date term;

    private  String agency_name;
    private  String content;
    private  Users id;

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

}
