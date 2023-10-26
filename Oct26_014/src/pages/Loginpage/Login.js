// 로그인 페이지

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Login.css';

function Loginpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  console.log(errors);

  // 유효성 검사
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  return (
    <div className="Login">
      <form autoComplete="on" onSubmit={handleSubmit(submitForm)}>
        <h3 className="Login_h3">로그인</h3>

        {/* 이메일 input */}
        <div>
          <label className="Login_email_label" htmlFor="email">이메일</label>
          <br />
          <input
            className="Login_email_input"
            type="email"
            id="email"
            //input을 useForm과 연결하기 위해 register 사용. 첫번째 인수는 해당 input의 고유 아이디
            {...register("email", {
              required: true, //필수 입력
              pattern: emailRegex, //유효성 검사
            })}
          />

          {errors?.email?.type === 'pattern' && (
            <p className="Login_email_input_error">
              이메일 양식에 맞게 입력해주세요</p> //양식에 안맞을 시 오류 메세지
          )}
        </div>

        {/* 비밀번호 input */}
        <div>
          <label className="Login_pw_label" htmlFor="pw">비밀번호</label>
          <input // 이메일과 마찬가지
            className="Login_pw_input"
            type="password"
            id="pw"
            {...register('pw', {
              required: true,
              pattern: passwordRegex,
            })}
          />
          {errors?.pw?.type === 'pattern' && (
            <p className="Login_pw_input_error">
              영문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.
            </p>
          )}
        </div>
        <button className="Login_button" type="submit">LOGIN</button>
        {/* 회원가입으로 페이지 이동 */}
        <div className='Login_GotoRegister'>
          <Link to="/register" >회원가입</Link>
        </div>
      </form>
    </div>
  );
}

export default Loginpage;

//label은 input의 이름을 적는 태그 htmlFor에 input의 아이디나 네임을 적어 인풋과 연결
// form autoComplete : 자동완성 기능