import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CareerAdd, careerAddSchema } from './boardWrite.types';
const useBoardWrite = () => {
  // FIXME:TESTCODE
  const careerNames = [
    { id: 1, text: '교내활동' },
    { id: 2, text: '교외활동' },
    { id: 3, text: '자격증' },
    { id: 4, text: '어학' },
  ];

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(careerAddSchema),
  });

  const handleCareerWrite = (newCareer: CareerAdd) => {
    console.log(newCareer);
  };
  return { careerNames, register, handleSubmit, handleCareerWrite };
};

export default useBoardWrite;
