
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './components/User/Signup';
import Home from './profileHome/Home';
import UpdateProfile from './components/User/UpdateProfile';
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
      {path: '/email', element : <Email />},
      {path: '/passwordreset', element : <PasswordReset/>},
      {path: '/expense' , element : <Expense/>}
    ]
  }
  ])
function App() {
  return (
    <div>
    expense tracker
      <RouterProvider router={router}></RouterProvider>
      </div>
  );
}

export default App;
