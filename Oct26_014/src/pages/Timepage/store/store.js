import { atom } from 'recoil';

// `timeTableState`라는 atom을 정의합니다.
export const timeTableState = atom({
    key: 'timeTableState', // 고유한 키 값으로 atom을 식별합니다.
    default: {
        mon: [], // 월요일의 데이터 배열
        tue: [], // 화요일의 데이터 배열
        wed: [], // 수요일의 데이터 배열
        thu: [], // 목요일의 데이터 배열
        fri: [], // 금요일의 데이터 배열
    },
    // 로컬 스토리지 연동 효과를 제거합니다.
    // effects: [localStorageEffect('timeTable')],
});