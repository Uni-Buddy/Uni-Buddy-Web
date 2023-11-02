package BE.UniBuddy_crud.controller;

import BE.UniBuddy_crud.dto.SignupDto;
import BE.UniBuddy_crud.repository.UsersRepository;
import BE.UniBuddy_crud.service.AuthService;
import BE.UniBuddy_crud.service.InfoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import BE.UniBuddy_crud.domain.Users;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class AuthController {

    private final AuthService authService;
    private final InfoService infoService;

    private final UsersRepository usersRepository;

    @Autowired
    public AuthController(AuthService authService, InfoService infoService, UsersRepository usersRepository) {
        this.authService = authService;
        this.infoService = infoService;
        this.usersRepository = usersRepository;
    }

    @PostMapping(value = "/register") //회원가입
    public String signup(@RequestBody SignupDto signupDto) {
        Users users = signupDto.toEntity();
        Users userEntity = authService.register(users);
        return "index";
    }

    @PostMapping("/login") //로그인
    public ResponseEntity<Object> login(@RequestBody Users user) {
        String email = user.getEmail();
        String password = user.getPassword();

        if (email == null || email.isEmpty() || password == null || password.isEmpty()) {
            return ResponseEntity.badRequest().body("Email and password are required");
        }

        Users authenticatedUser = authService.login(email, password);

        if (authenticatedUser != null) {
            // 로그인 성공
            return ResponseEntity.ok("성공");
        } else {
            // 로그인 실패
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

    private SignupDto convertToUsersDto(Users user) {
        SignupDto userDto = new SignupDto();
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());

        return userDto;
    }

    @GetMapping(value="/{email}") //email로 개인정보 조회
    public SignupDto getUserByName(@PathVariable String email) {
        Users user = usersRepository.findByEmail(email);
        if (user != null) {
            SignupDto userDto = new SignupDto();
            BeanUtils.copyProperties(user, userDto);
            return userDto;
        } else {
        // 사용자가 없는 경우 처리
            return null;
        }
    }

    @DeleteMapping("/delete/{email}")
    public ResponseEntity<String> deleteUserByEmail(@PathVariable String email) {
        Users userToDelete = usersRepository.findByEmail(email);
        if (userToDelete != null) {
            usersRepository.delete(userToDelete);
            return new ResponseEntity<>("계정이 삭제 되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("삭제 실패", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value="/logout", method=RequestMethod.GET) //로그아웃
    public String logout(HttpServletRequest request) throws Exception{

        HttpSession session = request.getSession();
        session.invalidate();

        return "start";

    }

    @PostMapping("/info") //마이페이지 정보 추가 , hash,sns,education,phone,id 입력받음
    public ResponseEntity<SignupDto> addInfo(@RequestBody SignupDto signupDto) {
        String hash = signupDto.getHash();
        String sns = signupDto.getSns();
        String education = signupDto.getEducation();
        String phone = signupDto.getPhone();
        Long id = signupDto.getId();

        Optional<Users> userOptional = usersRepository.findById(id);

        if (userOptional.isPresent()) {
            Users user = userOptional.get();

            user.setHash(hash);
            user.setSns(sns);
            user.setEducation(education);
            user.setPhone(phone);

            usersRepository.save(user);

            SignupDto updatedSignupDto = convertToSignupDto(user);
            return ResponseEntity.ok(updatedSignupDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    private SignupDto convertToSignupDto(Users user) {
        SignupDto signupDto = new SignupDto();
        signupDto.setId(user.getId());
        signupDto.setHash(user.getHash());
        signupDto.setSns(user.getSns());
        signupDto.setEducation(user.getEducation());
        signupDto.setPhone(user.getPhone());
        return signupDto;
    }

    @PutMapping("/info/changePW/{email}") //비밀번호 변경 , email, password, new_pw 입력받음
    public ResponseEntity<String> changePassword(
            @PathVariable String email,
            @RequestBody Map<String, String> requestBody
    ) {
        Users user = usersRepository.findByEmail(email);

        if (user != null) {
            String newPassword = requestBody.get("new_pw"); // 새로운 비밀번호
            String currentPassword = requestBody.get("password"); // 현재 비밀번호

            if (currentPassword != null && currentPassword.equals(user.getPassword())) {
                // 현재 비밀번호 일치
                user.setPassword(newPassword); // 새로운 비밀번호로 업데이트
                usersRepository.save(user); // 업데이트된 비밀번호 저장
                return ResponseEntity.ok("Password changed successfully");
            } else {
                // 현재 비밀번호 불일치
                return ResponseEntity.badRequest().body("Invalid current password");
            }
        } else {
            return ResponseEntity.badRequest().body("Invalid email");
        }
    }




}