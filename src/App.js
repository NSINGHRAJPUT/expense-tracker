
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Home from './Home';
import UpdateProfile from './UpdateProfile';
import Profile from './Profile';
import Email from './Email';

const router = createBrowserRouter([
  {path:'/home',element:<Home/>},
  {path:'/', element:<Signup/>},
  {path: '/updateprofile', element:<UpdateProfile/>},
  {path: '/profile', element : <Profile />},
  {path : '/email' , element : <Email/>}
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
