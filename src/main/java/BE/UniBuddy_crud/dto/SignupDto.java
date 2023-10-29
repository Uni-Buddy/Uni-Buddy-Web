//package BE.UniBuddy_crud.dto;
//
//import BE.UniBuddy_crud.domain.Users;
//import lombok.Data;
//
//@Data //Getter, Setter 생성
//public class SignupDto {
//    private String name;
//    private String password;
//    private String email;
//    private String university;
//
//    public Users toEntity() {
//        return Users.builder()
//                .name(name)
//                .password(password)
//                .email(email)
//                .university(university)
//                .build();
//    }
//}
package BE.UniBuddy_crud.dto;

import BE.UniBuddy_crud.domain.Users;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class SignupDto {
    private String name;
    private String password;
    private String email;
    private String university;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public Users toEntity() {
        return Users.builder()
                .name(name)
                .password(password)
                .email(email)
                .university(university)
                .build();
    }
}

