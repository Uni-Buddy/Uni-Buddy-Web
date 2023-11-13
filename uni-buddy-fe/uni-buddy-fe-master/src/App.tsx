import Spinner from '@components/layouts/spinner/Spinner';
import muiTheme from '@libs/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from '@libs/router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './libs/stores';
import { ToastContainer } from 'react-toastify';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import 'react-toastify/dist/ReactToastify.css';
// import { worker } from '@libs/mocks';

// if (process.env.NODE_ENV === 'development') {
// worker.start();
// }
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });

  return (
    <>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Spinner />}>
              <ThemeProvider theme={muiTheme}>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  pauseOnFocusLoss
                  pauseOnHover
                  theme="colored"
                />
                <CssBaseline />
                <RouterProvider router={AppRouter} />
              </ThemeProvider>
            </Suspense>
          </QueryClientProvider>
        </LocalizationProvider>
      </Provider>
    </>
  );
}

export default App;
