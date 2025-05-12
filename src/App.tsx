import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Experiences } from "./components/experiencias/experiecias";
import { Volunteer } from "./components/voluntario/voluntario";
import { HomePage } from "./components/homePage/HomePage";
import { Project } from "./components/projetos/projeto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
