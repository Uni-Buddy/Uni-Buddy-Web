
package BE.UniBuddy_crud.service;

import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthService {

    private final UsersRepository usersRepository;

    public Users register(Users users) { //회원가입
        Users userEntity = usersRepository.save(users);
        return userEntity;
    }

    public Users login(String email, String password) { //로그인
        Users user = usersRepository.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }

    public Users findById(Long id) {
        return null;
    }
}
