package com.unibuddy.be.plan.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CalendarDTO {
    private int calNum;
    private String year;
    private String month;
    private String day;
    private String addContent;
    private int usersId;
}
