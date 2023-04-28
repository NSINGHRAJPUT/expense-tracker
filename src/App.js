
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Home from './Home';
import UpdateProfile from './UpdateProfile';
import Profile from './Profile';

const router = createBrowserRouter([
  {path:'/home',element:<Home/>},
  {path:'/signup', element:<Signup/>},
  {path: '/updateprofile', element:<UpdateProfile/>},
  {path: '/profile', element : <Profile />}
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
