package com.unibuddy.be.users.controller;

import com.unibuddy.be.users.model.dto.UsersDTO;
import com.unibuddy.be.users.service.UsersService;
import com.unibuddy.be.util.EnumResponseCode;
import com.unibuddy.be.util.EnumResponseMessage;
import com.unibuddy.be.util.ResponseMessage;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

@Tag(name = "USERS", description = "USERS API")
@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UsersController {
    private final UsersService usersService;

    @PostMapping("/register")
    public ResponseEntity<ResponseMessage> registerUser(@RequestBody UsersDTO usersDTO) {
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            usersService.registerUser(usersDTO);

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseMessage> getLogin(@RequestBody UsersDTO usersDTO){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            Object data = usersService.getLogin(usersDTO);

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
            rm.setData(data);
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

//    @PostMapping("/logout")

    @GetMapping("/{email}")
    public ResponseEntity<ResponseMessage> getUserForEmail(@PathVariable(value = "email") final String email)
    {
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            Object data = usersService.getUserForEmail(email);

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
            rm.setData(data);
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{email}")
    public ResponseEntity<ResponseMessage> deleteUserForEmail(@PathVariable(value = "email") final String email){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            usersService.deleteUserForEmail(email);

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @PutMapping("/info")
    public ResponseEntity<ResponseMessage> updateUserInfo(@RequestBody UsersDTO usersDTO){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            usersService.updateUserInfo(usersDTO);

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @PutMapping("/info/pw")
    public ResponseEntity<ResponseMessage> updateUserPw(@RequestBody UsersDTO usersDTO){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            usersService.updateUserPw(usersDTO);

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }
}
