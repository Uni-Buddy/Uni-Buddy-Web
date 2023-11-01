package BE.UniBuddy_crud.dto;

import BE.UniBuddy_crud.domain.Users;
import lombok.*;


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
    private String hash;
    private String sns;
    private String education;
    private String phone;
    private String new_password;
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHash() {
        return hash;
    }

    public void setHash(String hash) {
        this.hash = hash;
    }

    public String getSns() {
        return sns;
    }

    public void setSns(String sns) {
        this.sns = sns;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getNew_password() {
        return new_password;
    }

    public void setNew_password(String new_password) {
        this.new_password = new_password;
    }

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

