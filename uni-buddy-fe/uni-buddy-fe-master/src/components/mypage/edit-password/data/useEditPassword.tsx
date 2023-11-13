import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { mypageEditPasswordSchema } from '@type/mypage/mypage.types';
import { useForm } from 'react-hook-form';
import { ROUTES } from '@libs/router/data';
import { useNavigate } from 'react-router-dom';

const useEditPassword = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mypageEditPasswordSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleGoToMypage = () => {
    navigate(ROUTES.MYPAGE.VIEW.path);
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    showPassword,
    setShowPassword,
    handleGoToMypage,
  };
};

export default useEditPassword;
