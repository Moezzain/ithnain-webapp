import { Suspense, useEffect } from "react";
import { Container } from "@mantine/core";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { LoadingOverlay } from "@mantine/core";
import useToggleOverlay from "../app/hookFiles/useToggleOverlay";
import { useAppSelector } from "../app/hooks";
// import NavLinks from "../components/NavLinks";

const RootLayout = () => {
  const { loadingPatientExist } = useAppSelector((state) => state.auth);
  const { loading } = useAppSelector((state) => state.invoice);

  return (
    <Container
      fluid
      h={50}
      bg="var(--mantine-color-blue-light)"
      className="!NotoKufiArabic"
    >
      <Toaster />

      <LoadingOverlay
        visible={loadingPatientExist || loading}
        overlayBlur={2}
        zIndex={1000}
        transitionDuration={500}
        loaderProps={{
          size: "md",
          color: "#eb4063",
          variant: "bars",
          overflow: "hidden",
        }}
      />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default RootLayout;
