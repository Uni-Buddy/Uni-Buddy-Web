package com.unibuddy.be.users.service;

import com.unibuddy.be.config.TokenProvider;
import com.unibuddy.be.users.model.dto.UsersDTO;
import com.unibuddy.be.users.model.dao.UsersMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsersServiceImpl implements UsersService {
    private final UsersMapper usersMapper;
    private final TokenProvider tokenProvider;

    @Override
    public void registerUser(UsersDTO usersDTO) {
        UsersDTO user = usersMapper.getUserForEmail(usersDTO.getEmail());
        if(user != null) {
            throw new IllegalArgumentException("이미 등록된 이메일입니다 : " + usersDTO.getEmail());
        }

        usersMapper.registerUser(usersDTO);
    }

    @Override
    public UsersDTO getLogin(UsersDTO usersDTO) {
        UsersDTO user = usersMapper.getLogin(usersDTO.getEmail(), usersDTO.getPw());

        if(user == null) {
            throw new IllegalArgumentException("이메일 또는 패스워드를 확인해주세요" + usersDTO.getEmail());
        }
        assert user != null;
        String token = tokenProvider.createToken(String.format("%s:%s", user.getEmail(), user.getId()));
        user.setToken(token);

        return user;
    }

    @Override
    public UsersDTO getUserForEmail(String email) {
        UsersDTO user = usersMapper.getUserForEmail(email);
        if(user == null) {
            throw new IllegalArgumentException("이메일 정보를 찾을 수 없습니다." + email);
        }

        return usersMapper.getUserForEmail(email);
    }

    @Override
    public void deleteUserForEmail(String email) {
        UsersDTO user = usersMapper.getUserForEmail(email);
        if(user == null) {
            throw new IllegalArgumentException("이메일 정보를 찾을 수 없습니다." + email);
        }
        usersMapper.deleteUserForEmail(email);
    }

    @Override
    public void updateUserInfo(UsersDTO usersDTO) {
        usersMapper.updateUserInfo(usersDTO);
    }

    @Override
    public void updateUserPw(UsersDTO usersDTO) {
        usersMapper.updateUserPw(usersDTO);
    }
}
