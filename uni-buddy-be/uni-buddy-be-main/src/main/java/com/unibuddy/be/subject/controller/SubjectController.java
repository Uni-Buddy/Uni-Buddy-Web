package com.unibuddy.be.subject.controller;

import com.unibuddy.be.subject.service.SubjectService;
import com.unibuddy.be.subject.model.dto.TimeSubjectDTO;
import com.unibuddy.be.util.EnumResponseCode;
import com.unibuddy.be.util.EnumResponseMessage;
import com.unibuddy.be.util.ResponseMessage;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Subject", description = "Subject API")
@RestController
@RequestMapping("/subject")
@RequiredArgsConstructor
public class SubjectController {
    private final SubjectService subjectService;

    @Operation(summary = "subject")
    @GetMapping("/{semester}")
    public ResponseEntity<ResponseMessage> getSubjectForTheSemester(
            @PathVariable(value="semester") final int semester, @AuthenticationPrincipal User user) {
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
            rm.setData(subjectService.getSubjectForTheSemester(semester, user.getUsername()));
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<ResponseMessage> saveSubjectForTheSemester(
            @RequestBody TimeSubjectDTO subjectDTO, @AuthenticationPrincipal User user){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            subjectService.saveSubjectForTheSemester(subjectDTO, user.getUsername());

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @DeleteMapping("/{subNum}")
    public ResponseEntity<ResponseMessage> deleteSubjectForTheSemester(
            @PathVariable(value="subNum") final int subNum, @AuthenticationPrincipal User user){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            subjectService.deleteSubjectForTheSemester(subNum, user.getUsername());

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }
}
