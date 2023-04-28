
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './components/User/Signup';
import Home from './Home';
import UpdateProfile from './components/User/UpdateProfile';
import Profile from './components/User/Profile';
import Email from './components/User/Email';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import PasswordReset from './components/User/PasswordReset';
import Expense from './components/Expenses/Expense';

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
      {path: '/passwordreset', element : <PasswordReset/>},
      {path: '/expense' , element : <Expense/>}
    ]
  }
  ])
function App() {
  return (
   
      <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
