import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCredentials } from './store/slices/authSlice';
import { useProfile } from './hooks/useProfile';
import Spinner from './components/spinner';

function App() {
  // const dispatch = useDispatch();
  // const { data, isLoading } = useProfile();

  // useEffect(() => {
  //   if (data?.user) {
  //     dispatch(setCredentials(data.user));
  //   }
  // }, [data]);

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <RouterProvider router={router} />
  )
}

export default App
