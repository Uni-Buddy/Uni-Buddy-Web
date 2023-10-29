package BE.UniBuddy_crud.repository;

import BE.UniBuddy_crud.domain.Diarywrite;
import BE.UniBuddy_crud.domain.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface DiarywriteRepository extends JpaRepository<Diarywrite, Long>{
    Diarywrite findByTitle(String title);

    Diarywrite deleteByTitle(String title);
}

