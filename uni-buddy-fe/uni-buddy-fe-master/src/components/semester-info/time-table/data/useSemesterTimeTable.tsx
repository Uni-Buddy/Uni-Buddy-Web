import { useEffect, useState } from 'react';
import { SemesterTime, TimeTableEvent } from '.';
import { useAppSelector } from '@libs/stores';

/**
 * 서버에서 받은 시간표 데이터를 Scheduler 라이브러리 포멧에 맞게 파싱하는 메소드
 * Scheduler는 Date 데이터형을 사용하며 주간 스케줄은 주차가 다른 데이터면 하나의 스케줄에 표현이 불가능하니
 * 2024년 1월 1일(월)부터 5일(금)까지에 전달받은 요일(date), 시간(start, end)값을 적용하여 사용.
 */
const semesterTimeParser = (semesterTimes: SemesterTime[]) => {
  //2024-01 첫주 인덱스 1 -> 2024-01-01
  const dates = ['', '월', '화', '수', '목', '금'];
  const events = semesterTimes.map((semesterTime) => {
    const findDate = dates.findIndex((date) => date === semesterTime.date);

    return {
      event_id: semesterTime.subNum,
      title: semesterTime.subName,
      start: new Date(`2024/1/${findDate} ${semesterTime.startTime}:00`),
      end: new Date(`2024/1/${findDate} ${semesterTime.endTime}:00`),
      color: semesterTime.color,
    };
  });

  return events;
};

const useSemesterTimeTable = () => {
  const [events, setEvents] = useState<TimeTableEvent[]>([]);
  const semesterTimes = useAppSelector((state) => state.semester.semesterTimes);

  useEffect(() => {
    // 시간대 문자열 변경
    const rsTimes = document.querySelectorAll('.rs__time');
    rsTimes.forEach((time, index) => {
      if (index === 0) return false;
      time.innerHTML = `${index + 8}:00~${index + 9}:00`;
    });

    // FIXME:서버에서 받아와 처리하게 수정 필요
    setEvents(semesterTimeParser(semesterTimes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isShowModal, setIsShoModal] = useState(false);

  return { events, setEvents, semesterTimeParser, isShowModal, setIsShoModal };
};

export default useSemesterTimeTable;
