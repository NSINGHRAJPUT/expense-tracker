
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Home from './Home';

const router = createBrowserRouter([
  {path:'/home',element:<Home/>},
  {path:'/signup', element:<Signup/>}
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
