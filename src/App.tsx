import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { AnimateRoutes } from "./components/animateroutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimateRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
