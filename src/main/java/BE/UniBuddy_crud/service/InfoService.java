package BE.UniBuddy_crud.service;


import BE.UniBuddy_crud.dto.SignupDto;
import BE.UniBuddy_crud.repository.UsersRepository;


public interface InfoService {
    static UsersRepository usersRepository = null;

    SignupDto addInfo(String hash, String sns, String education, String phone, Long id) ;
}
