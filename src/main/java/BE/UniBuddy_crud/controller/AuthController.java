package BE.UniBuddy_crud.controller;

import BE.UniBuddy_crud.dto.SignupDto;
import BE.UniBuddy_crud.repository.UsersRepository;
import BE.UniBuddy_crud.service.AuthService;
import BE.UniBuddy_crud.service.InfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import BE.UniBuddy_crud.domain.Users;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
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
    public String login(@RequestParam String email, @RequestParam String password, Model model) {
        Users user = authService.login(email, password);

        if (user != null) {
            // 로그인 성공
            model.addAttribute("user", user);
            return "Test"; // 로그인 성공 페이지로 이동
        } else {
            // 로그인 실패
            model.addAttribute("error", "Invalid email or password");
            return "loginPage"; // 로그인 페이지로 이동 (로그인 실패 메시지 표시)
        }
    }

    @GetMapping("/{email}") //유저 정보 조회
    public Users getUserByName(@PathVariable String email) {
        return usersRepository.findByEmail(email);
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

    @PostMapping("/info")
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

//
//        SignupDto result = infoService.addInfo(hash, sns, education, phone, id);
//        return result;
    }

