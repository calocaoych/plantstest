
import HomePage from "./views/HomePage.jsx";
import AboutPage from "./views/AboutPage.jsx";
import "./app.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./app.css";
import  PlantManagerPage from "./views/PlantManagerPage.jsx";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "plants", element: <PlantManagerPage /> },
        { path: "about", element: <AboutPage /> },
        
      ],
    },
  ],
  {
    basename: "/plantstest", // ✅ IMPORTANT: must match repo name
  }
);

function App() {
  return <RouterProvider router={router} />;
}


export default App;