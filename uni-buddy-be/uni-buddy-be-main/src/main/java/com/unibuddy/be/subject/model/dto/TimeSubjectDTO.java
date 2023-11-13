package com.unibuddy.be.subject.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TimeSubjectDTO {
    private int subNum;
    private String subName;
    private String proName;
    private String classroom;
    private String date;
    private int startTime;
    private int endTime;
    private String color;
    private int semester;
    private String email;
}
