import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Head />
      <RouterProvider router={router} />

      {/* 
  Head
  Body
    Sidebar
      MenuItems
    MainContainer
      ButtonList
      Videocontainer
        VideoCard

*/}
    </div>
  );
}

export default App;
