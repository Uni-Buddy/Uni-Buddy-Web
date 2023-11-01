//package BE.UniBuddy_crud.service.impl;
//
//import BE.UniBuddy_crud.domain.Users;
//import BE.UniBuddy_crud.dto.SignupDto;
//import BE.UniBuddy_crud.handler.InfoDataHandler;
//import BE.UniBuddy_crud.service.InfoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class InfoServiceImpl implements InfoService {
//
//   InfoDataHandler infoDataHandler;
//
//    @Autowired
//    public InfoServiceImpl(InfoDataHandler infoDataHandler) {
//        this.infoDataHandler = infoDataHandler;
//    }
//    @Override
//    public SignupDto addInfo(String hash, String sns, String education, String phone, Long id) {
//        Users users = new Users(hash, sns,education, phone, id);
//        infoDataHandler.save(users);
//
//        return convertToInfoDto(users);
//    }
//
//    private SignupDto convertToInfoDto(Users users) {
//        SignupDto signupDto = new SignupDto();
//        signupDto.setHash(users.getHash());
//        signupDto.setEducation(users.getEducation());
//        signupDto.setSns(users.getSns());
//        signupDto.setPhone(users.getPhone());
//        signupDto.setId(users.getId());
//
//        return signupDto;
//    }
//
//}
package BE.UniBuddy_crud.service.impl;

import BE.UniBuddy_crud.domain.Users;
import BE.UniBuddy_crud.dto.SignupDto;
import BE.UniBuddy_crud.handler.InfoDataHandler;
import BE.UniBuddy_crud.service.InfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InfoServiceImpl implements InfoService {

    private InfoDataHandler infoDataHandler;

    @Autowired
    public InfoServiceImpl(InfoDataHandler infoDataHandler) {
        this.infoDataHandler = infoDataHandler;
    }

    @Override
    public SignupDto addInfo(String hash, String sns, String education, String phone, Long id) {
        Users users = new Users(hash, sns, education, phone, id);
        infoDataHandler.save(users);

        return convertToInfoDto(users);

    }

    private SignupDto convertToInfoDto(Users users) {
        SignupDto signupDto = new SignupDto();
        signupDto.setHash(users.getHash());
        signupDto.setEducation(users.getEducation());
        signupDto.setSns(users.getSns());
        signupDto.setPhone(users.getPhone());
        signupDto.setId(users.getId());

        return signupDto;
    }
}

