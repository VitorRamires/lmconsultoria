import { useEffect } from "react";
import { Footer } from "../footer";
import { Banner } from "./banner/banner";
import { Contact } from "./contato";
import { ProjectsHome } from "./projetosHome";
import { Services } from "./serviços";
import { Sobre } from "./sobre";
import { Technologies } from "./tecnologias";
import { useLocation } from "react-router-dom";

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
      <Technologies />
      <ProjectsHome />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
