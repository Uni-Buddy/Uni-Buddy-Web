package com.unibuddy.be.util;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Objects;

@Tag(name = "File", description = "File upload")
@RestController
@RequiredArgsConstructor
public class FileController {
    @GetMapping("/upload")
    public String showUploadForm() {
        return "upload";
    }

    @PostMapping("/upload")
    public String handleFileUpload(@RequestParam("file") MultipartFile file, Model model) {
        if (!file.isEmpty()) {
            try {
                // 파일 저장 경로 설정 (프로젝트 루트 기준)
                String uploadDir = "src/main/resources/static/uploads/";
                String filePath = new File(uploadDir, Objects.requireNonNull(file.getOriginalFilename())).getAbsolutePath();

                // 파일 저장
                file.transferTo(new File(filePath));

                model.addAttribute("message", "File uploaded successfully: " + file.getOriginalFilename());
            } catch (IOException e) {
                model.addAttribute("message", "File upload failed: " + e.getMessage());
            }
        } else {
            model.addAttribute("message", "Please select a file to upload.");
        }

        return "upload";
    }
}
