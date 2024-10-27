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
    <div className="bg-[url('/images/wp8470860-naruto-symbols-wallpapers.jpg')] min-h-screen bg-cover">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
