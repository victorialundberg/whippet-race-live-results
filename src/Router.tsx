// import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Liveresultat } from "./pages/LiveResults";
import { HydrateFallback } from "./components/utils/HydrateFallback";
import { resultatLoader } from "./loaders/liveResultsLoader";
import { createHashRouter } from "react-router-dom";
// import { DeltagarlistaHanar } from "./pages/DeltagarlistaHanar";
// import { DeltagarlistaTikar } from "./pages/DeltagarlistaTikar";

export const router = createHashRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Liveresultat />,
        loader: resultatLoader,
        hydrateFallbackElement: <HydrateFallback></HydrateFallback>,
      },
      // {
      //   path: "/deltagarlista-hanar",
      //   element: <DeltagarlistaHanar />,
      //   loader: resultatLoader,
      //   hydrateFallbackElement: <HydrateFallback></HydrateFallback>,
      // },
      // {
      //   path: "/deltagarlista-tikar",
      //   element: <DeltagarlistaTikar />,
      //   loader: resultatLoader,
      //   hydrateFallbackElement: <HydrateFallback></HydrateFallback>,
      // },
    ],
  },
]);
