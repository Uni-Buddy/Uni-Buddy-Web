// 비밀번호 변경 페이지
import React, { useState } from 'react';
import './Changepswd.css';
import Head from './img/Start.png';
import Icon from './img/My.png';
import Nav from './Nav';
import { useForm } from "react-hook-form";



function Changepswd() {

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    // 비밀번호
    /* 비밀번호 보기/숨기기*/
    const [showPassword, setShowPassword] = useState(false);

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    const submitForm = (data) => {
        console.log(data);
    };

    console.log(errors);


    return (
        <>
            {/* 배경 및 아이콘 */}
            <header>
                <img src={Head} alt="Head" className="Pswd_Head" />
                <div className="Pswd_Icon">
                    <div className="Pswd_Bigcircle">
                        <img src={Icon} alt="Icon" className="Pswd_img" />
                    </div>
                    <div className="Pswd_Smallcircle"></div>
                    <p className="Pswd_Iconwrite">비밀번호 변경</p>
                </div>
            </header>


            {/*사이드바*/}
            <Nav />

            <div className='Pswd'>
                <form autoComplete="on" onSubmit={handleSubmit(submitForm)}>
                    {/* 현재 비밀번호 input */}
                    <div>
                        <input
                            className='Pswd_cp_input'
                            placeholder='현재 비밀번호 *'
                            type={showPassword ? 'text' : 'password'}
                            id="currentPassword"
                            //input을 useForm과 연결하기 위해 register 사용. 첫번째 인수("password")는 해당 input의 고유 아이디
                            {...register('currentPassword', {
                                required: "영문자, 숫자, 특수문자를 포함한 8자리 이상 입력하세요.", // 필수 입력
                                pattern: {
                                    value:
                                        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                                    message: "영문자, 숫자, 특수문자를 포함한 8자리 이상 입력하세요.",
                                }, // 유효성 검사
                            })}
                        />
                        {errors.currentPassword && (
                            <p className='Pswd_cp_input_error'>{errors.currentPassword.message}</p> // 오류 메세지 출력
                        )}
                    </div>

                    {/* 새 비밀번호 input */}
                    <div>
                        <input
                            className='Pswd_np_input'
                            placeholder='새 비밀번호 *'
                            type={showPassword ? 'text' : 'password'}
                            id="newPassword"
                            //input을 useForm과 연결하기 위해 register 사용. 첫번째 인수("password")는 해당 input의 고유 아이디
                            {...register('newPassword', {
                                required: "영문자, 숫자, 특수문자를 포함한 8자리 이상 입력하세요.", // 필수 입력
                                pattern: {
                                    value:
                                        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                                    message: "영문자, 숫자, 특수문자를 포함한 8자리 이상 입력하세요.",
                                }, // 유효성 검사
                            })}
                        />
                        {errors.newPassword && (
                            <p className='Pswd_np_input_error'>{errors.newPassword.message}</p> // 오류 메세지 출력
                        )}
                    </div>

                    {/* 새 비밀번호 확인 input */}
                    <div>
                        <input
                            className='Pswd_npc_input'
                            placeholder='새 비밀번호 확인 *'
                            type={showPassword ? 'text' : 'password'}
                            id="newPasswordConfirmation"
                            //input을 useForm과 연결하기 위해 register 사용. 첫번째 인수("passwordConfirmation")는 해당 input의 고유 아이디
                            {...register('newPasswordConfirmation', {
                                required: true,
                                validate: {
                                    check: (val) => {
                                        const { newPassword } = getValues();
                                        return newPassword === val || "비밀번호가 일치하지 않습니다." // 비밀번호 input("password")과 비밀번호 확인 input ("val") 비교
                                    },
                                },
                            })}
                        />
                        {errors.newPasswordConfirmation && (
                            <p className='Pswd_npc_input_error'>{errors.newPasswordConfirmation.message}</p> // 오류 메세지 출력
                        )}
                    </div>

                    {/* 비밀번호 보기/숨김 체크박스 */}
                    <label>
                        <input
                            className="Pswd_pwshow_input"
                            type="checkbox"
                            checked={showPassword}
                            onChange={handleCheckboxChange}
                        />
                        비밀번호 보기
                    </label>

                    {/* 확인 버튼, 취소 버튼 */}
                    <aside className='Pswd_Asid'>
                        <button className='Pswd_Button' type='submit'>확인</button>
                        <button className='Pswd_Button' type='submit'>취소</button>
                    </aside>

                </form>
            </div>
        </>
    );
};

export default Changepswd;