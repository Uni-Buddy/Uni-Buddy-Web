package com.unibuddy.be.plan.service;

import com.unibuddy.be.plan.model.dao.PlanMapper;
import com.unibuddy.be.plan.model.dto.CalendarDTO;
import com.unibuddy.be.users.model.dao.UsersMapper;
import com.unibuddy.be.users.model.dto.UsersDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlanServiceImpl implements PlanService {
    private final PlanMapper planMapper;
    private final UsersMapper usersMapper;

    @Override
    public List<CalendarDTO> getSchedulesToMonth(String year, String month, String email) {
        UsersDTO user = usersMapper.getUserForEmail(email);

        CalendarDTO req = new CalendarDTO();
        req.setYear(year);
        req.setMonth(month);
        req.setUsersId(user.getId());

        return planMapper.getSchedulesToMonth(req);
    }

    @Override
    public CalendarDTO getSchedulesToMonthAndDay(String month, String day, String email) {
        UsersDTO user = usersMapper.getUserForEmail(email);
        CalendarDTO req = new CalendarDTO();
        req.setMonth(month);
        req.setDay(day);
        req.setUsersId(user.getId());

        return planMapper.getSchedulesToMonthAndDay(req);
    }

    @Override
    public void saveSchedules(CalendarDTO calendarDTO, String email) {
        UsersDTO user = usersMapper.getUserForEmail(email);
        calendarDTO.setUsersId(user.getId());

        List<CalendarDTO> data = planMapper.getSchedulesToMonth(calendarDTO);
        if(data.isEmpty()){
            planMapper.saveSchedules(calendarDTO);
        } else {
            planMapper.updateSchedules(calendarDTO);
        }
    }

    @Override
    public void deleteSchedules(int calNum) {
        planMapper.deleteSchedules(calNum);
    }
}
