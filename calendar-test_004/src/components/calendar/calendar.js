import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { select } from "../../store/modules/date";
import { dayTodolist } from "../../store/modules/todolist";
import ViewComponent from "./ViewComponent";

const Calendar = () => {
  // 현재 날짜와 상태 관리에 필요한 변수 및 함수 정의
  let date = new Date();
  let today = date.getDate();
  let [currentMonth, setCurrentMonth] = useState(date.getMonth());
  let [currentYear, setCurrentYear] = useState(date.getFullYear());
  const fixMonth = date.getMonth();
  const fixYear = date.getFullYear();
  const dispatch = useDispatch();

  // Redux 액션 디스패치를 위한 함수 정의
  const selectCalendar = (currentDay, currentWeek, currentMonth, currentYear) =>
    dispatch(select(currentDay, currentWeek, currentMonth, currentYear));

  // 날짜별 todolist를 달력에 그려주기 위한 useEffect
  useEffect(() => {
    dispatch(
      dayTodolist({ currentMonth: currentMonth, currentYear: currentYear })
    );

  }, [dispatch, currentMonth, currentYear]);


  // Redux 스토어에서 dayTodos 데이터를 가져오기 위한 useSelector
  const { dayTodos } = useSelector((state) => ({
    dayTodos: state.todolist.dayTodos,
  }));

  // 다음 달로 이동하는 함수
  const next = () => {
    setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
    setCurrentMonth((currentMonth + 1) % 12);
  };

  // 이전 달로 이동하는 함수
  const previous = () => {
    setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
  };
  return (
    // ViewComponent에 상태 및 함수 전달
    <ViewComponent
      today={today}
      currentMonth={currentMonth}
      currentYear={currentYear}
      fixMonth={fixMonth}
      fixYear={fixYear}
      next={next}
      previous={previous}
      selectCalendar={selectCalendar}
      dayTodos={dayTodos}
    ></ViewComponent>
  );
};

export default Calendar;
