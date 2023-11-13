import { getScores, postScores } from '@components/semester-info/data/semesterInfo.api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { semesterSchema, semesterSlice } from '@libs/stores/semester';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
const semesterNames = [
  {
    id: 1,
    text: '1학년 1학기',
    value: 11,
  },
  {
    id: 2,
    text: '1학년 2학기',
    value: 12,
  },
  {
    id: 3,
    text: '2학년 1학기',
    value: 21,
  },
  {
    id: 4,
    text: '2학년 2학기',
    value: 22,
  },
  {
    id: 5,
    text: '3학년 1학기',
    value: 31,
  },
  {
    id: 6,
    text: '3학년 2학기',
    value: 32,
  },
  {
    id: 7,
    text: '4학년 1학기',
    value: 41,
  },
  {
    id: 8,
    text: '4학년 2학기',
    value: 42,
  },
];

const avgScores = [
  {
    id: 1,
    text: '4.0',
    value: 4.0,
  },
  {
    id: 2,
    text: '4.1',
    value: 4.1,
  },
  {
    id: 3,
    text: '4.2',
    value: 4.2,
  },
  {
    id: 4,
    text: '4.3',
    value: 4.3,
  },
  {
    id: 5,
    text: '4.4',
    value: 4.4,
  },
  {
    id: 6,
    text: '4.5',
    value: 4.5,
  },
];

const defaultSemesterInfo = {
  avgScore: 0,
  maxAvgScore: 4.5,
  getScore: 0,
  maxGetScore: 0,
};

const useSemesterInfoForm = () => {
  const dispach = useAppDispatch();
  const semester = useAppSelector((state) => state.semester.semester);
  const maxAvgScoreRef = useRef<HTMLInputElement>(null);
  const [maxAvgScore, setMaxAvgScore] = useState(4.5);
  const { data: response, refetch } = useQuery({
    queryKey: ['semester', semester.semesterType],
    queryFn: ({ queryKey }) => getScores(Number(queryKey[1])),
    enabled: !!semester.semesterType,
  });

  const resSemesterInfo = response?.data.data;
  useEffect(() => {
    if (!resSemesterInfo) return;
    const semesterInfo = resSemesterInfo || defaultSemesterInfo;
    setMaxAvgScore(semesterInfo.maxAvgScore);
    reset(semesterInfo);
  }, [resSemesterInfo, semester.semesterType]);

  useEffect(() => {
    if (!resSemesterInfo) return;
    handleUpdateSemester();
  }, [maxAvgScore]);

  const mutation = useMutation({
    mutationFn: postScores,
    onSuccess: () => {
      refetch();
    },
  });

  const { register, getValues, setValue, reset } = useForm({
    defaultValues: resSemesterInfo
      ? resSemesterInfo
      : {
          avgScore: 0,
          maxAvgScore: 4.5,
          getScore: 0,
          maxGetScore: 0,
        },
    resolver: yupResolver(semesterSchema),
  });

  const handleSetSemesterType = (semesterType: number) => {
    dispach(semesterSlice.actions.setSemester({ ...semester, semesterType: semesterNames[semesterType].value }));
  };

  const handleUpdateSemester = () => {
    let avgScore = Number(getValues('avgScore'));
    const maxAvgScore = Number(maxAvgScoreRef.current?.value);

    let getScore = Number(getValues('getScore'));
    const maxGetScore = Number(getValues('maxGetScore'));

    if (avgScore > maxAvgScore) {
      setValue('avgScore', 0);
      avgScore = 0;
    }

    if (getScore > maxGetScore) {
      setValue('getScore', 0);
      getScore = 0;
    }

    const newSemester = {
      avgScore,
      maxAvgScore,
      getScore,
      maxGetScore,
      semesterType: semester.semesterType,
    };

    mutation.mutateAsync(newSemester);
  };
  return {
    semesterNames,
    avgScores,
    handleSetSemesterType,
    handleUpdateSemester,
    resSemesterInfo,
    register,
    setValue,
    maxAvgScore,
    setMaxAvgScore,
    maxAvgScoreRef,
  };
};

export default useSemesterInfoForm;
