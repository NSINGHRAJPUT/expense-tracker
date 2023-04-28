
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Home from './Home';
import UpdateProfile from './UpdateProfile';

const router = createBrowserRouter([
  {path:'/home',element:<Home/>},
  {path:'/signup', element:<Signup/>},
  {path: '/profile', element:<UpdateProfile/>}
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
