import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

import RootLayout from "./routes/RootLayout";
import { Protected } from "./middleware/Protected";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import rtlPlugin from "stylis-plugin-rtl";
import OtpPage from "./routes/OtpPage";

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});

const Users = lazy(() => import("./routes/Users"));
const Home = lazy(() => import("./routes/Home"));
const Invoice = lazy(() => import("./routes/invoice"));
const SignUp = lazy(() => import("./routes/signUp"));
const ChoosePlan = lazy(() => import("./routes/choosePlan"));
const ErrorPage = lazy(() => import("./routes/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/otp",
        element: <OtpPage />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
      {
        path: "/choosePlan",
        element: <ChoosePlan />,
      },
      {
        path: "users",
        element: (
          <Protected>
            <Users />
          </Protected>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          emotionCache={rtlCache}
          theme={{
            fontFamily: "SSTArabic, sans-serif",
            fontFamilyMonospace: "SSTArabic, sans-serif",
            headings: { fontFamily: "SSTArabic, sans-serif" },
            dir: "rtl",
          }}
        >
          <RouterProvider router={router} />
        </MantineProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
