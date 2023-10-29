package BE.UniBuddy_crud.repository;

import BE.UniBuddy_crud.domain.Time_score;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Time_score, Integer> {
}
