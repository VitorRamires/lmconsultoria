import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { AnimateRoutes } from "./components/animateroutes";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "motion/react";

function App() {
  function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
      if (!hash) {
        window.scrollTo(0, 0);
      }
    }, [pathname, hash]);

    return null;
  }

  return (
    <>
      <AnimatePresence>
        <BrowserRouter>
          <Header />
          <ScrollToTop />
          <AnimateRoutes />
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
