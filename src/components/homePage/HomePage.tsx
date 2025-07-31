import { useEffect } from "react";
import { Footer } from "../footer";
import { Banner } from "./banner/banner";
import { Contact } from "./contato";
import { ProjectsHome } from "./projetosHome";
import { Sobre } from "./sobre";
import { useLocation } from "react-router-dom";
import { Highlight } from "./highlights";

export function HomePage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <Banner />
      <Sobre />
      <Highlight />
      <ProjectsHome />
      <Contact />
      <Footer />
    </>
  );
}
