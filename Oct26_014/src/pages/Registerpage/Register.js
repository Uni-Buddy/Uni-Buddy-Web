// 회원가입 페이지

import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css"

function Registerpage() {

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    /* 비밀번호 보기/숨기기
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };
    */

    const submitForm = (data) => {
        console.log(data);
    };

    console.log(errors);


    return (
        // form autoComplete : 자동완성 기능
        <div className="Rgst">
            <form autoComplete="on" onSubmit={handleSubmit(submitForm)}>
                <h3 className="Rgst_h3">회원가입</h3>

                {/* 이메일 input */}
                <div>
                    <label className="Rgst_email_label" htmlFor="email">이메일</label>
                    <input
                        className="Rgst_email_input"
                        type="email"
                        id="email"
                        //input을 useForm과 연결하기 위해 register 사용. 첫번째 인수("email")는 해당 input의 고유 아이디
                        {...register("email", {
                            required: "올바른 이메일 형식이 아닙니다.", //필수 입력
                            pattern: {
                                value:
                                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                                message: "올바른 이메일 형식이 아닙니다."
                            }, //유효성 검사
                        })}
                    />
                    {errors.email && (<p className="Rgst_email_input_error">{errors.email.message}</p> // 오류 메세지 출력
                    )}
                </div>

                {/* 비밀번호 input */}
                <div>
                    <label className="Rgst_pw_label" htmlFor="password">비밀번호</label>
                    <input
                        className="Rgst_pw_input"
                        /*type={showPassword ? 'text' : 'password'}*/
                        type="passord"
                        id="password"
                        //input을 useForm과 연결하기 위해 register 사용. 첫번째 인수("password")는 해당 input의 고유 아이디
                        {...register('password', {
                            required: "영문자, 숫자, 특수문자를 포함한 8자리 이상 입력하세요.", // 필수 입력
                            pattern: {
                                value:
                                    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                                message: "영문자, 숫자, 특수문자를 포함한 8자리 이상 입력하세요.",
                            }, // 유효성 검사
                        })}
                    />

                    {errors.password && (
                        <p className="Rgst_pw_input_error">{errors.password.message}</p> // 오류 메세지 출력
                    )}

                </div>

                {/* 비밀번호 확인 input */}
                <div>
                    <label className="Rgst_pwc_label" htmlFor="passwordConfirmation">비밀번호 확인</label>
                    <input
                        className="Rgst_pwc_input"
                        /*type={showPassword ? 'text' : 'password'}*/
                        type="passord"
                        id="passwordConfirmation"
                        //input을 useForm과 연결하기 위해 register 사용. 첫번째 인수("passwordConfirmation")는 해당 input의 고유 아이디
                        {...register('passwordConfirmation', {
                            required: true,
                            validate: {
                                check: (val) => {
                                    const { password } = getValues();
                                    return password === val || "비밀번호가 일치하지 않습니다." // 비밀번호 input("password")과 비밀번호 확인 input ("val") 비교
                                },
                            },
                        })}
                    />
                    {errors.passwordConfirmation && (
                        <p className="Rgst_pwc_input_error">{errors.passwordConfirmation.message}</p> // 오류 메세지 출력
                    )}
                </div>



                {/* 이름 input */}
                <div>
                    <label className="Rgst_name_label" htmlFor="name">이름</label>
                    <input
                        className="Rgst_name_input"
                        type="text"
                        id="name"
                        //input을 useForm과 연결하기 위해 register 사용. 첫번째 인수("name")는 해당 input의 고유 아이디
                        {...register("name", {
                            required: "올바른 이름을 입력해주세요.", //필수 입력
                            minLength: {
                                value: 2,
                                message: "올바른 이름을 입력해주세요.",
                            }, //유효성 검사
                        })}
                    />
                    {errors.name && (<p className="Rgst_name_input_error">{errors.name.message}</p> // 오류 메세지 출력
                    )}
                </div>

                {/* 대학교 input */}
                <div>
                    <label className="Rgst_univ_label" htmlFor="university">대학교</label>
                    <input
                        className="Rgst_univ_input"
                        type="text"
                        id="university"
                        //input을 useForm과 연결하기 위해 register 사용. 첫번째 인수("university")는 해당 input의 고유 아이디
                        {...register("university", {
                            required: "올바른 대학명을 입력해주세요.", //필수 입력
                            minLength: {
                                value: 3,
                                message: "올바른 대학명을 입력해주세요.",
                            }, //유효성 검사
                        })}
                    />
                    {errors.university && (<p className="Rgst_univ_input_error">{errors.university.message}</p> // 오류 메세지 출력
                    )}
                </div>

                {/* 비밀번호 보기/숨김 체크박스 
                <label>
                    <input
                        className="Rgst_pwshow_input"
                        type="checkbox"
                        checked={showPassword}
                        onChange={handleCheckboxChange}
                    />
                    비밀번호 보기
                </label>
                */}

                <button className="Rgst_button" type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default Registerpage;