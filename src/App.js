import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

import ScrollTopTop from "./components/ScrollToTop";

const HomePage = lazy(() => import("./pages"));

const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <HomePage />
      </Suspense>
      <ScrollTopTop />
    </>
  );
};

export default App;
