import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CountryListPage from "../pages/CountryListPage/CountryListPage.jsx";
import CountryInfoPage from "../pages/CountryInfoPage/CountryInfoPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CountryListPage />,
  },
  {
    path: "/countryInfo/:countryCode",
    element: <CountryInfoPage />,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
