import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
  ]);

  return (
<<<<<<< Updated upstream
    <div className="bg-[url('/images/wp8470860-naruto-symbols-wallpapers.jpg')] min-h-screen bg-cover">
=======
    <div className=" bg-gray-600 min-h-screen">
>>>>>>> Stashed changes
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
