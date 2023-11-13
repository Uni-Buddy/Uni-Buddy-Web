package com.unibuddy.be.score.controller;

import com.unibuddy.be.score.model.dto.TimeScoreDTO;
import com.unibuddy.be.score.service.ScoreService;
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

@Tag(name = "Score", description = "Score API")
@RestController
@RequestMapping("/scores")
@RequiredArgsConstructor
public class ScoreController {
    private final ScoreService scoreService;

    @Operation(summary = "score")
    @GetMapping("/{semester}")
    public ResponseEntity<ResponseMessage> getScoreForTheSemester(
            @PathVariable(value="semester") final int semesterType, @AuthenticationPrincipal User user){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
            rm.setData(scoreService.getScoreForTheSemester(semesterType, user.getUsername()));
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<ResponseMessage> saveScoreForTheSemester(
            @RequestBody TimeScoreDTO scoreDTO, @AuthenticationPrincipal User user){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            scoreService.saveScoreForTheSemester(scoreDTO, user.getUsername());

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    @DeleteMapping("/{semester}")
    public ResponseEntity<ResponseMessage> deleteScoreForTheSemester(
            @PathVariable(value="semester") final int semesterType, @AuthenticationPrincipal User user){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            scoreService.deleteScoreForTheSemester(semesterType, user.getUsername());

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }
}
