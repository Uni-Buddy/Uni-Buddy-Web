package com.unibuddy.be.users.model.dao;

import com.unibuddy.be.users.model.dto.UsersDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UsersMapper {
    void registerUser(UsersDTO usersDTO);

    UsersDTO getLogin(String email, String pw);

    UsersDTO getUserForEmail(String email);

    void deleteUserForEmail(String email);

    void updateUserInfo(UsersDTO usersDTO);

    void updateUserPw(UsersDTO usersDTO);
}
