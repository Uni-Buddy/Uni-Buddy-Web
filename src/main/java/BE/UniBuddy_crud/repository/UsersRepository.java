package BE.UniBuddy_crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import BE.UniBuddy_crud.domain.Users;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    // JpaRepository를 상속받아 기본적인 CRUD 작업을 자동으로 처리할 수 있습니다.
    Users findByEmail(String email);

    Optional<Users> findById(Long id);

}
