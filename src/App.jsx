import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Viewall from './components/Viewall';
import Adduser from './components/Adduser';
import UpdateAuser from './components/UpdateAuser';
import DeleteUser from './components/DeleteUser';

//http://localhost:3000/users

const router = createBrowserRouter([
  {
    path: "/",
    element: <Viewall/>
  },
  {
    path: "/adduser",
    element: <Adduser/>
  },
  {
    path: "/updateuser",
    element: <UpdateAuser/>
  },
  {
    path: "/deleteauser",
    element: <DeleteUser/>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
