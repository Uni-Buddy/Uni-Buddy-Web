import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@libs/router/data';
import { signUp } from './accountSignUpForm.api';
import { ReqSignUp, SignUp, signUpSchema } from '.';
import { useState } from 'react';

const useAccountSignUpForm = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: async () => {
      toast.success('회원가입 완료');
      navigate(ROUTES.ACCOUNT.LOG_IN.path);
    },
  });

  const [isShowModal, setIsShowModal] = useState(false);

  const handleSignUp = (account: SignUp) => {
    const reqSignUp: ReqSignUp = {
      ...account,
    };

    try {
      mutation.mutateAsync(reqSignUp);
    } catch (e) {
      console.log(e);
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      terms: false,
    },
    resolver: yupResolver(signUpSchema),
  });

  return {
    mutation,
    handleSignUp,
    register,
    handleSubmit,
    errors,
    control,
    isShowModal,
    setIsShowModal,
    setValue,
  };
};

export default useAccountSignUpForm;
