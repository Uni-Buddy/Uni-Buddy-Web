package BE.UniBuddy_crud.repository;

import BE.UniBuddy_crud.domain.Diarywrite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiarywriteRepository extends JpaRepository<Diarywrite,Integer> {
    Diarywrite findByTitle(String title);

    Diarywrite deleteByTitle(String title);

    Diarywrite getByTitle(String title);
}

