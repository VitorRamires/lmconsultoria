import { Footer } from "../footer";
import { VolunteerList } from "./voluntario-list";

export function Volunteer() {
  return (
    <>
      <div className="page-banner volunteer-banner">
        <div className="title-page">
          <h2>Trabalho voluntário</h2>
          <div className="title-line"></div>
        </div>
        <div className="overlay"></div>
        <div className="center">
          <VolunteerList />
        </div>
        <Footer />
      </div>
    </>
  );
}
