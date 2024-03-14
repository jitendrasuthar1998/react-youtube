import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import Watch from './components/Watch';
import MainContainer from './components/MainContainer';
import LiveWatchPage from './components/LiveWatchPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch/",
        element:<Watch/>
      }
    ]
  },
]);

function App() {
  return (
    <div>
      <Head />
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
