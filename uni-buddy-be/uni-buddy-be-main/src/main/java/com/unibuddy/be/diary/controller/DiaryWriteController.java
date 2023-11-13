package com.unibuddy.be.diary.controller;

import com.unibuddy.be.util.ResponseMessage;
import com.unibuddy.be.util.EnumResponseMessage;
import com.unibuddy.be.util.EnumResponseCode;
import com.unibuddy.be.diary.model.dto.DiaryWriteDTO;
import com.unibuddy.be.diary.service.DiaryWriteService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

@Tag(name = "DiaryWrite", description = "DiaryWrite api")
@RestController
@RequestMapping("/diarywrite")
@RequiredArgsConstructor
public class DiaryWriteController {
    private final DiaryWriteService diaryWriteService;

    // 새로운 다이어리 작성 요청 처리
    @PostMapping("/add")
    public ResponseEntity<ResponseMessage> saveDiaryWrite(
            @RequestBody DiaryWriteDTO diaryWriteDTO, @AuthenticationPrincipal User user){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            // 다이어리 작성 서비스 호출
            diaryWriteService.saveDiaryWrite(diaryWriteDTO, user.getUsername());

            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    // 특정 다이어리 조회 요청 처리
    @GetMapping("/{actId}")
    public ResponseEntity<ResponseMessage> getDiaryWrite(
            @PathVariable(value="actId") final int actId, @AuthenticationPrincipal User user){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
            rm.setData(diaryWriteService.getDiaryWrite(actId, user.getUsername()));
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    // 사용자의 모든 다이어리 목록 조회 요청 처리
    @GetMapping("/")
    public ResponseEntity<ResponseMessage> getDiaryWriteList(@AuthenticationPrincipal User user){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            rm.setStatus(EnumResponseCode.OK.getValue());
            rm.setMessage(EnumResponseMessage.SUCCESS.getValue());
            rm.setData(diaryWriteService.getDiaryWriteList(user.getUsername()));
        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }

    // 특정 다이어리 삭제 요청 처리
    @DeleteMapping("/{actId}")
    public ResponseEntity<ResponseMessage> deleteDiaryWrite(
            @PathVariable(value="actId") final int actId, @AuthenticationPrincipal User user){
        ResponseMessage rm = new ResponseMessage();
        HttpHeaders headers = new HttpHeaders();

        try {
            diaryWriteService.deleteDiaryWrite(actId);

        } catch (Exception e) {
            rm.setStatus(EnumResponseCode.FAIL.getValue());
            rm.setMessage(e.getMessage());
        }

        return new ResponseEntity<>(rm, headers, HttpStatus.OK);
    }
}
