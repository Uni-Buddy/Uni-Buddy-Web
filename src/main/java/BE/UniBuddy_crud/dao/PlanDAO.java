package BE.UniBuddy_crud.dao;

import BE.UniBuddy_crud.domain.Calendar;

import java.time.LocalDate;
import java.util.List;

public interface PlanDAO {
    Calendar savePlan(Calendar calendar);

    Calendar getPlan(Integer calNum);

    void deletePlan(Calendar cAlendar);

    List<Calendar> getDPlan(LocalDate day);

    List<Calendar> getMPlan(Integer month);
}
