import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Login, loginSchema } from './accountLoginForm.types';
import { useMutation } from '@tanstack/react-query';
import { login } from './accountLoginForm.api';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@libs/router/data';
import { toast } from 'react-toastify';

const useAccountLoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: ({ data }) => {
      if (data.data !== null) {
        sessionStorage.setItem('user', JSON.stringify(data.data));
        navigate(ROUTES.INDEX.path);
      }
      if (data.status === 900) {
        toast.error('아이디 및 비밀번호를 확인하시기 바랍니다.');
      }
    },
  });

  const handleLogin = (login: Login) => {
    mutation.mutateAsync(login);
  };

  const handleGotoSignUpPage = () => {
    navigate(ROUTES.ACCOUNT.SIGN_UP.path);
  };

  return { register, errors, handleSubmit, handleLogin, handleGotoSignUpPage };
};

export default useAccountLoginForm;
