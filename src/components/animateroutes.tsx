import { Route, Routes } from "react-router-dom";
import { Experiences } from "./experiencias/experiecias";
import { Volunteer } from "./voluntario/voluntario";
import { HomePage } from "./homePage/HomePage";
import { Project } from "./projetos/projeto";

export function AnimateRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}
