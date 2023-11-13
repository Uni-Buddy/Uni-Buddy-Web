package com.unibuddy.be.users.service;

import com.unibuddy.be.users.model.dto.UsersDTO;

public interface UsersService {
    void registerUser(UsersDTO usersDTO);

    UsersDTO getLogin(UsersDTO usersDTO);

    UsersDTO getUserForEmail(String email);

    void deleteUserForEmail(String email);

    void updateUserInfo(UsersDTO usersDTO);

    void updateUserPw(UsersDTO usersDTO);
}
