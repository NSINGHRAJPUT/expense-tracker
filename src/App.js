
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Home from './Home';
import UpdateProfile from './UpdateProfile';
import Profile from './Profile';
import Email from './Email';
import Header from './components/Header/Header';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Header />,
    errorElement:<Error/>,
    children:[
      {path:'/', element: <div><Signup/></div>},
      {path:'/updateprofile', element: <UpdateProfile/>},
      {path:'/home', element:<Home/>},
      {path:'/profile', element : <Profile/>},
      {path: '/email', element : <Email />}
    ]
  }
  ])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
