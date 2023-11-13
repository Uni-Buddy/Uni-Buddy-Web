import { lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './data';
import AuthProvider from '@libs/hocs/auth/AuthProvider';

const DefaultLayout = lazy(() => import('@components/layouts/default-layout/DefaultLayout'));
const NonAuthLayout = lazy(() => import('@components/layouts/non-auth-layout/NonAuthLayout'));

const AccountSignUpPage = lazy(() => import('@pages/account/sign-up/AccountSignUpPage'));
const AccountLoginPage = lazy(() => import('@pages/account/log-in/AccountLoginPage'));
const LandingPage = lazy(() => import('@pages/landing/LandingPage'));
const MainPage = lazy(() => import('@pages/main/MainPage'));

const BoardListPage = lazy(() => import('@pages/board/list/BoardListPage'));
const BoardWritePage = lazy(() => import('@pages/board/write/BoardWritePage'));
const SchedulesPage = lazy(() => import('@pages/schedules/SchedulesPage'));
const SemesterInfoPage = lazy(() => import('@pages/semester-info/SemesterInfoPage'));

const MyPage = lazy(() => import('@pages/mypage/MyPage'));
const EditProfilePage = lazy(() => import('@pages/mypage/EditProfilePage'));
const EditPasswordPage = lazy(() => import('@pages/mypage/EditPasswordPage'));

const AppRouter = createBrowserRouter(
  [
    {
      element: (
        <AuthProvider>
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
        </AuthProvider>
      ),
      children: [
        {
          path: ROUTES.INDEX.path,
          element: <MainPage />,
        },
        {
          path: ROUTES.SCHEDULES.path,
          element: <SchedulesPage />,
        },
        {
          path: ROUTES.SEMESTER_INFO.path,
          element: <SemesterInfoPage />,
        },
        {
          path: ROUTES.BOARD.path,
          children: [
            {
              path: ROUTES.BOARD.LIST.path,
              element: <BoardListPage />,
            },
            {
              path: ROUTES.BOARD.WRITE.path,
              element: <BoardWritePage />,
            },
          ],
        },
        {
          path: ROUTES.MYPAGE.path,
          children: [
            {
              path: ROUTES.MYPAGE.VIEW.path,
              element: <MyPage />,
            },
            {
              path: ROUTES.MYPAGE.EDIT_PROFILE.path,
              element: <EditProfilePage />,
            },
            {
              path: ROUTES.MYPAGE.EDIT_PASSWORD.path,
              element: <EditPasswordPage />,
            },
          ],
        },
      ],
    },
    {
      element: (
        <NonAuthLayout>
          <Outlet />
        </NonAuthLayout>
      ),
      children: [
        {
          path: ROUTES.LANDING.path,
          element: <LandingPage />,
        },
        {
          path: ROUTES.ACCOUNT.path,
          children: [
            {
              path: ROUTES.ACCOUNT.SIGN_UP.path,
              element: <AccountSignUpPage />,
            },
            {
              path: ROUTES.ACCOUNT.LOG_IN.path,
              element: <AccountLoginPage />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_SERVER_DOMAIN,
  },
);

export default AppRouter;
