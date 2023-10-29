package BE.UniBuddy_crud.handler.impl;


import BE.UniBuddy_crud.dao.PlanDAO;
import BE.UniBuddy_crud.domain.Calendar;
import BE.UniBuddy_crud.handler.PlanDataHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class PlanDataHandlerImpl implements PlanDataHandler {

    PlanDAO planDAO;

    @Autowired
    public PlanDataHandlerImpl(PlanDAO planDAO){
        this.planDAO = planDAO;
    }


    @Override
    public Calendar saveDayPlan(Calendar calendar) {
        return planDAO.savePlan(calendar);
    }

    @Override
    public Calendar findByCalNum(Integer calNum) {
        return planDAO.getPlan(calNum);
    }

    @Override
    public void delete(Calendar cAlendar) {
        planDAO.deletePlan(cAlendar);

    }

    @Override
    public List<Calendar> getDaySubPlan(LocalDate day) {
        return planDAO.getDPlan(day);
    }

    @Override
    public List<Calendar> getMonSubPlan(Integer month) {
        return planDAO.getMPlan(month);
    }
}
