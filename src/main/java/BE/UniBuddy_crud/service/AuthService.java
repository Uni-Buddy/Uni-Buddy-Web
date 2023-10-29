//package BE.UniBuddy_crud.service;
//
//import BE.UniBuddy_crud.domain.Users;
//import BE.UniBuddy_crud.repository.UsersRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//@RequiredArgsConstructor
//@Service //1.IoC 2.트랜잭션 관리
//public class AuthService {
//
//    private final UsersRepository usersRepository;
//
//    public Users 회원가입(Users users) {
//        //회원가입 진행
//        Users userEntity = usersRepository.save(users);
//        return userEntity;
//    }
//
//    public Users 로그인(String email, String password) {
//        // 입력한 이메일과 일치하는 사용자를 데이터베이스에서 조회
//        Users user = usersRepository.findByEmail(email);
//
//        // 사용자가 존재하고 비밀번호도 일치하면 로그인 성공
//        if (user != null && user.getPassword().equals(password)) {
//            return user;
//        }
//
//        // 사용자가 존재하지 않거나 비밀번호가 일치하지 않으면 로그인 실패
//        return null;
//    }
//
//    public Users findById(Long id) {
//        return null;
//    }
//}
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
