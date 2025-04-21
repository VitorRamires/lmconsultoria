import { Banner } from "./banner/banner";
import { Contact } from "./contato";
import { ProjectsHome } from "./projetosHome";
import { Services } from "./serviços";
import { Sobre } from "./sobre";
import { Technologies } from "./tecnologias";

export function HomePage() {
  return (
    <>
      <Banner />
      <Sobre />
      <Technologies />
      <ProjectsHome />
      <Services />
      <Contact />
    </>
  );
}
