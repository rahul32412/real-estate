import { createBrowserRouter } from "react-router-dom";
import Hero from "./routes/Home";
import Property from "./routes/Property";
import Contact from "./routes/Contact";
import Root from "./routes/root";
import Properties from "./routes/Properties";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/property/:id",
        element: <Property />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
