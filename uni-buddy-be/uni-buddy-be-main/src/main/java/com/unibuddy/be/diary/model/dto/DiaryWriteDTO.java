package com.unibuddy.be.diary.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DiaryWriteDTO {
    private int actId;
    private String title;
    private String actName;
    private String agencyName;
    private Date term;
    private String content;
    private int usersId;
    private String startDate;
    private String endDate;
//    private String issueDate;
    private String regDate;
}
