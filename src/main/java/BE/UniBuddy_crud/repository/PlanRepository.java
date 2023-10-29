package BE.UniBuddy_crud.repository;

import BE.UniBuddy_crud.domain.Calendar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface PlanRepository extends JpaRepository<Calendar, Integer> {
    List<Calendar> getByDay(LocalDate day);

    List<Calendar> getByMonth(Integer month);
}
