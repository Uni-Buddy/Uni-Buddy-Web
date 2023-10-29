//package BE.UniBuddy_crud.dto;
//
//import BE.UniBuddy_crud.domain.Diarywrite;
//import lombok.Data;
//import org.springframework.format.annotation.DateTimeFormat;
//import java.util.Date;
//
//@Data
//public class DiarywriteDto {
//    private String act_name;
//    private String title;
//
//    @DateTimeFormat(pattern = "yyyy-MM-dd")
//    private Date term;
//
//    private String agency_name;
//    private String content;
//
//    public Diarywrite toEntity() {
//        return Diarywrite.builder()
//                .act_name(act_name)
//                .title(title)
//                .term(term)
//                .agency_name(agency_name)
//                .content(content)
//                .build();
//    }
//
//    public static DiarywriteDto fromEntity(Diarywrite diarywrite) {
//        DiarywriteDto dto = new DiarywriteDto();
//        dto.setAct_name(diarywrite.getAct_name());
//        dto.setTitle(diarywrite.getTitle());
//        dto.setTerm(diarywrite.getTerm());
//        dto.setAgency_name(diarywrite.getAgency_name());
//        dto.setContent(diarywrite.getContent());
//        return dto;
//    }
//
//
//}

package BE.UniBuddy_crud.dto;

import BE.UniBuddy_crud.domain.Diarywrite;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class DiarywriteDto {
    private String act_name;
    private String title;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date term;

    private String agency_name;
    private String content;

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

    public Diarywrite toEntity() {
        return Diarywrite.builder()
                .act_name(act_name)
                .title(title)
                .term(term)
                .agency_name(agency_name)
                .content(content)
                .build();
    }

    public static DiarywriteDto fromEntity(Diarywrite diarywrite) {
        DiarywriteDto dto = new DiarywriteDto();
        dto.setAct_name(diarywrite.getAct_name());
        dto.setTitle(diarywrite.getTitle());
        dto.setTerm(diarywrite.getTerm());
        dto.setAgency_name(diarywrite.getAgency_name());
        dto.setContent(diarywrite.getContent());
        return dto;
    }
}
