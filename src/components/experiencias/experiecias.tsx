import { Footer } from "../footer.tsx";
import { ExperiencieList } from "./experince-list.tsx";

export function Experiences() {
  return (
    <>
      <section className="experiencias" id="experiencias">
        <div className="page-banner experience-banner">
          <div className="title-page">
            <h2>Experiências</h2>
            <div className="title-line"></div>
          </div>
          <div className="overlay"></div>
          <div className="project-content">
            <div className="center">
              <ExperiencieList />
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
