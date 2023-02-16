import { BlogPost } from "./pages/BlogPost";
import{createBrowserRouter, RouterProvider} from 'react-router-dom'



const router = createBrowserRouter([
  {
    path:"/blog",
    element:<BlogPost/>
  },
])


function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
