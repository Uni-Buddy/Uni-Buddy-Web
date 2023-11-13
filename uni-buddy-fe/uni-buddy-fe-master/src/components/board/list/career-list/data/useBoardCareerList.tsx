import { useState } from 'react';

const useBoardCareerList = () => {
  const careerTypeNames = [
    {
      id: 1,
      text: '전체',
    },
    {
      id: 2,
      text: '교내활동',
    },
    {
      id: 3,
      text: '교외활동',
    },
    {
      id: 4,
      text: '자격증',
    },
    {
      id: 5,
      text: '어학',
    },
  ];

  //FIXME:TESTCODE. 서버의 데이터 형태에 따라 수정 필요
  const careers = {
    [`${careerTypeNames[0].text}`]: [
      {
        actId: 1,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 2,
        title: '자원봉사자호랑이늑대거북이',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 3,
        title: '자원봉사하러 순천을 다녀왔습니다. 저는 매년 자원봉사 활동을 열심히 참여합니다.',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
    ],

    [`${careerTypeNames[1].text}`]: [
      {
        actId: 1,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 2,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 3,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
    ],

    [`${careerTypeNames[2].text}`]: [
      {
        actId: 1,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 2,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 3,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
    ],

    [`${careerTypeNames[3].text}`]: [
      {
        actId: 1,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 2,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
      {
        actId: 3,
        title: '자원봉사',
        actName: '',
        agencyName: '순천대학교',
        trem: '2024-11-09',
        content: '24년 홍보 참여',
      },
    ],
  };

  const [selectedCareerTypeName, setSelectedCareerTypeName] = useState('');

  return { careerTypeNames, selectedCareerTypeName, setSelectedCareerTypeName, careers };
};

export default useBoardCareerList;
