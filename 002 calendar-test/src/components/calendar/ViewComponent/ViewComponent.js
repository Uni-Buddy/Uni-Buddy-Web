import React from "react";
import styled, { css } from "styled-components";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DoneIcon from "@material-ui/icons/Done";
const borderColor = "#D5D5D5";

// 스타일드 컴포넌트를 사용하여 달력 컨테이너 스타일 정의
const StyledCalendar = styled.div`
  float: left;
  width: 65%;
  margin-left: 70px;
  padding: 20px 0 20px 0;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  text-align: center;
`;

// 달력 상단 날짜 표시 스타일 정의
const StyledDate = styled.div`
  margin-bottom: 10px;
`;

// 년도 표시 스타일 정의
const StyledYear = styled.div`
  vertical-align: top;
  font-size: 15px;
  text-align: right;
  margin-right: 3%;
`;

// 월 표시 스타일 정의
const StyledMonth = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
`;

// 월 텍스트 스타일 정의
const StyledMonthtext = styled.span`
  vertical-align: top;
  display: inline-block;
  width: 120px;
  text-align: center;
  font-size: 28px;
`;

// 테이블 스타일 정의
const StyledTable = styled.table`
  margin: 0 3% 0 3%;
  border-top: 1px solid ${borderColor};
  border-left: 1px solid ${borderColor};
`;

// 테이블 헤더 셀 스타일 정의
const StyledTh = styled.th`
  vertical-align: bottom;
  width: 80px;
  height: 30px;
  border-bottom: 1px solid ${borderColor};
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  &:last-child {
    border-right: 1px solid ${borderColor};
  }
`;

// 테이블 데이터 셀 스타일 정의
const StyledTd = styled.td`
  width: 110px;
  height: 90px;
  padding: 5px;
  font-size: 16px;
  border-right: 1px solid ${borderColor};
  border-bottom: 1px solid ${borderColor};
  &:first-child div {
    color: #cc3d3d;
  }

  &:last-child div {
    color: #4641d9;
  }
`;

// 날짜 표시 스타일 정의
const StyledDay = styled.div`
  float: right;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  & div {
    margin-top: -0.5px;
  }
  ${(props) =>
    props.today &&
    css`
      background: #38d9a9;
      color: white;
    `}
`;

// 체크 아이콘 스타일 정의
const CheckCircle = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0;
  border-radius: 7px;
  border: 1px solid #ced4da;
  font-size: 10px;
  vertical-align: middle;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

// 할 일 정보를 표시하는 섹션 스타일 정의
const StyledSection = styled.div`
  width: 100%;
  margin-top: 4px;
  text-align: left;
  &:first-child {
    margin-top: 28px;
  }
  & span {
    margin-left: 6px;
    vertical-align: middle;
    color: black;
  }
  & path {
    color: #38d9a9;
  }
`;

// 할 일을 표시하는 컴포넌트
const CalendarTodo = ({ ToDay, DoDay }) => {
  return (
    <div>
      <StyledSection>
        <CheckCircle />
        <span>{ToDay}</span>
      </StyledSection>
      <StyledSection>
        <CheckCircle done>
          <DoneIcon style={{ fontSize: 15 }} />
        </CheckCircle>
        <span>{DoDay}</span>
      </StyledSection>
    </div>
  );
};

// 달력 컴포넌트
const ViewComponent = ({
  today,
  currentMonth,
  currentYear,
  fixMonth,
  fixYear,
  previous,
  next,
  selectCalendar,
  dayTodos,
}) => {
  // 현재 달의 첫 날과 해당 월의 총 일 수 계산
  let firstDay = new Date(currentYear, currentMonth).getDay();
  let daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
  const items = [];
  let date = 1;
  let end = false;

  // 달력의 주차와 날짜를 생성
  for (let i = 0; i < 6; i++) {
    const weekly = [];
    let did = false;
    for (let j = 0; j < 7; j++) {
      let innerDate = date;
      let innerWeek = j;
      const innerSelect = () => {
        selectCalendar({
          currentDay: innerDate,
          currentMonth: currentMonth + 1,
          currentWeek: innerWeek,
          currentYear: currentYear,
        });
      };

      // 첫 주에서 공백 처리
      if (i === 0 && j < firstDay) {
        weekly.push(<StyledTd></StyledTd>);
      } else if (date > daysInMonth) {
        weekly.push(<StyledTd></StyledTd>);
        end = true;
      } else {
        let check = false;
        // 오늘 날짜인지, 선택한 날짜인지 확인
        if (
          today === innerDate &&
          currentMonth === fixMonth &&
          fixYear === currentYear
        ) {
          check = true;
        }
        did = true;
        weekly.push(
          //          <StyledTd onClick={() => innerSelect()}>
          <StyledTd key={i * 7 + j} onClick={() => innerSelect()}>
            <StyledDay today={check}>
              <div>{date}</div>
            </StyledDay>
            {/* 할 일이 있는 경우 표시 */}
            {dayTodos[innerDate].to + dayTodos[innerDate].do !== 0 && (
              <CalendarTodo
                ToDay={dayTodos[innerDate].to}
                DoDay={dayTodos[innerDate].do}
              />
            )}
          </StyledTd>
        );
        date++;
      }
    }
    if (end && did === false) {
      break;
    }
    //    items.push(<tr valign="top">{weekly}</tr>);
    items.push(
      <tr key={i} valign="top">
        {weekly}
      </tr>
    );
  }

  return (
    <StyledCalendar>
      <StyledDate>
        <StyledMonth>
          {/* 이전 월, 다음 월로 이동하는 버튼 */}
          <NavigateBeforeIcon onClick={previous} style={{ marginTop: "5%" }}>
            previous
          </NavigateBeforeIcon>
          <StyledMonthtext>{currentMonth + 1}월</StyledMonthtext>
          <NavigateNextIcon onClick={next} style={{ marginTop: "5%" }}>
            next
          </NavigateNextIcon>
        </StyledMonth>
        <StyledYear>{currentYear}</StyledYear>
      </StyledDate>

      {/* 달력의 요일 표시 */}
      <StyledTable>
        <tr>
          <StyledTh>일요일</StyledTh>
          <StyledTh>월요일</StyledTh>
          <StyledTh>화요일</StyledTh>
          <StyledTh>수요일</StyledTh>
          <StyledTh>목요일</StyledTh>
          <StyledTh>금요일</StyledTh>
          <StyledTh>토요일</StyledTh>
        </tr>
        {items}
      </StyledTable>
    </StyledCalendar>
  );
};

export default ViewComponent;
