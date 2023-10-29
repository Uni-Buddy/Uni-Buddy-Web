package BE.UniBuddy_crud.handler;

import BE.UniBuddy_crud.domain.Calendar;

import java.time.LocalDate;
import java.util.List;

public interface PlanDataHandler {

    Calendar saveDayPlan(Calendar calendar);

    Calendar findByCalNum(Integer calNum);

    void delete(Calendar cAlendar);

    List<Calendar> getDaySubPlan(LocalDate day);

    List<Calendar> getMonSubPlan(Integer month);
}
