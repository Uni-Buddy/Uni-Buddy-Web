import { RouteItem } from './appRouter.types';

const routers = {
  INDEX: {
    path: '/',
    description: 'main page',
  },
  LANDING: {
    path: '/landing',
    description: 'landing Page',
  },
  ACCOUNT: {
    path: '/account',
    description: 'account',

    SIGN_UP: {
      path: '/sign-up',
      description: 'account join',
    },
    LOG_IN: {
      path: '/log-in',
      description: 'login',
    },
  },
  BOARD: {
    path: '/board',
    description: '경력 관련 페이지',

    LIST: {
      path: '/list',
      description: '게시판. 경력 리스트 페이지',
    },
    WRITE: {
      path: '/write',
      description: '기록. 경력 작성 페이지',
    },
  },
  SCHEDULES: {
    path: '/schedules',
    description: '일정. 일정등록 및 월간 목표 캘린더 페이지',
  },
  CAREER_WRITE: {
    path: '/career-write',
    description: '기록 페이지',
  },
  SEMESTER_INFO: {
    path: '/semester-info',
    description: '시간표 페이지',
  },
  MYPAGE: {
    path: '/mypage',
    description: '마이페이지',

    VIEW: {
      path: '/view',
      description: '마이페이지',
    },
    EDIT_PROFILE: {
      path: '/edit-profile',
      description: '프로필 수정',
    },
    EDIT_PASSWORD: {
      path: '/edit-password',
      description: '비밀번호 수정',
    },
  },
};

const setNestedPathProxy: ProxyHandler<RouteItem> = {
  get(target: RouteItem, p: keyof typeof routers): RouteItem | string {
    const value = target[p];
    if (typeof value === 'object' && value !== null) {
      const parentPath = target.path ? target?.path : '';
      return new Proxy({ ...value, path: `${parentPath}${value.path}` }, setNestedPathProxy);
    }
    return value;
  },
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ROUTES = new Proxy(routers, setNestedPathProxy);
export default ROUTES;
