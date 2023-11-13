const useMainUserInfo = () => {
  // FIXME: 추후 sessionStorage에서 가져와야함
  const userInfo = {
    name: '김아무개',
    birthDate: '',
    email: 'anonymous@test.ac.kr',
    introduction: '',
    avatarUrl: '',
  };
  return { userInfo };
};

export default useMainUserInfo;
