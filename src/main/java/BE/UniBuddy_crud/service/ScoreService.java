package BE.UniBuddy_crud.service;

import BE.UniBuddy_crud.dto.ScoreDto;

public interface ScoreService {

    //인자로 받은 정보를 디비에 저장
    //저장된 정보를 Dto로 변환해서 반환
    ScoreDto saveScore(ScoreDto scoreDto);

    //특정 학기의 성적 정보를 조회하는 추상 메서드
    //semester을 인자로 받아 성적 정보를 dto로 반환
    ScoreDto getScore(int semester);

    boolean deleteScore(Integer semester);
}
