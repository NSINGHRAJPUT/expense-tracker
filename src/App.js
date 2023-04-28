
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Home from './Home';
import UpdateProfile from './UpdateProfile';
import Profile from './Profile';
import Email from './Email';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import PasswordReset from './PasswordReset';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Header />,
    errorElement:<Error/>,
    children:[
      {path:'/', element: <Signup/>},
      {path:'/updateprofile', element: <UpdateProfile/>},
      {path:'/home', element:<Home/>},
      {path:'/profile', element : <Profile/>},
      {path: '/email', element : <Email />},
      {path: '/passwordreset', element : <PasswordReset/>}
    ]
  }
  ])
function App() {
  return (
   
      <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
