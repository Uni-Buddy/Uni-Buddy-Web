package com.unibuddy.be.users.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UsersDTO {
        private int id;
        private String email;
        private String pw;
        private String university;
        private String name;
        private String hash;
        private String sns;
        private String phone;
        private String education;
        private String newPw;
        private String birthday;
        private String comment;
        private String token;
}
