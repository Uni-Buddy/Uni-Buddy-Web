import { useNavigate } from 'react-router-dom';

const useLandingHeaderline = () => {
  const navigate = useNavigate();
  return { navigate };
};

export default useLandingHeaderline;
