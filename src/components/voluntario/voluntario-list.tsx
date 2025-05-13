import { volunteer } from "../../utils/volunteer";

export function VolunteerList() {
  return (
    <div className="volunteer-list-wrapper">
      <div className="center">
        <div className="recolocation">
          <h3 className="volunteer-title">
            Mentoria de Recolocação no Mercado de Trabalho (TI)
          </h3>
          <div className="recolocation-box">
            <h4>
              Ajudo as pessoas a se recolocarem no mercado de TI, auxiliando em
              itens como:
            </h4>
            <div className="recolocation-list">
              <ul>
                {volunteer.map((item, index) => (
                  <li key={index}>
                    <span>{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="leader-formation">
          <h3 className="volunteer-title">Mentoria de Formação de Líderes</h3>
          <p>
            Realizo mentorias com outras pessoas para trocarmos ideias e
            experiências acerca da formação de uma liderança voltada à pessoas e
            ampliando a visão macro em responsabilidades mais gerenciais.
          </p>
        </div>
      </div>
    </div>
  );
}
