package BE.UniBuddy_crud.dao.impl;

import BE.UniBuddy_crud.dao.PlanDAO;
import BE.UniBuddy_crud.domain.Calendar;
import BE.UniBuddy_crud.repository.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class PlanDAOImpl implements PlanDAO {

    PlanRepository planRepository;

    @Autowired
    public PlanDAOImpl(PlanRepository planRepository){
        this.planRepository = planRepository;
    }

    @Override
    public Calendar savePlan(Calendar calendar) {
        planRepository.save(calendar);
        return calendar;
    }

    @Override
    public Calendar getPlan(Integer calNum) {
        Calendar calendar = planRepository.getById(calNum);
        return calendar;
    }

    @Override
    public void deletePlan(Calendar cAlendar) {
        planRepository.delete(cAlendar);
    }

    @Override
    public List<Calendar> getDPlan(LocalDate day) {
        List<Calendar> calendar = planRepository.getByDay(day);
        return calendar;
    }

    @Override
    public List<Calendar> getMPlan(Integer month) {
        List<Calendar> calendar = planRepository.getByMonth(month);
        return calendar;
    }
}
