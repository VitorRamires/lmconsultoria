// Importações das imlogo
import americanexpress from "@/assets/icons/AEX.svg";
import apple from "@/assets/icons/apple.svg";
import arcelormittal from "@/assets/icons/arcelor.svg";
import autoliv from "@/assets/icons/autoliv.svg";
import avery from "@/assets/icons/avery.svg";
import exlon from "@/assets/icons/exlon.svg";
import fairisaac from "@/assets/icons/fair.svg";
import frontier from "@/assets/icons/frontier.svg";
import boticario from "@/assets/icons/boticario.svg";
import nextera from "@/assets/icons/NEE.svg";
import petrobras from "@/assets/icons/petrobras.svg";
import roche from "@/assets/icons/roche.svg";
import selective from "@/assets/icons/selectivelogo.svg";
import siteimprove from "@/assets/icons/siteimprove.svg";
import triptri from "@/assets/icons/triptri-placeholder.svg";
import yara from "@/assets/icons/yara.svg";

import eua from "@/assets/icons/us.svg";
import brasil from "@/assets/icons/br.svg";
import uruguay from "@/assets/icons/ug.svg";
import argentina from "@/assets/icons/ar.svg";
import { technologies } from "./technologies";

const techsData = technologies.reduce((acc, tech) => {
  acc[tech.name] = tech.url;
  return acc;
}, {} as { [key: string]: string });

export const projectsInfos = [
  {
    projeto: "American Express",
    descricaoCliente: "projectsInfo.description.aboutClient.0",
    descricaoProjeto: "projectsInfo.description.aboutProject.0",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.1",
    ],
    extras: ["OutSystems", "Uruguai", "projectsInfo.extras.6"],
    logo: americanexpress,
    techs: [techsData.office, techsData.outsystem],
    id: 1,
    pais: uruguay,
  },
  {
    projeto: "Apple",
    descricaoCliente: "projectsInfo.description.aboutClient.1",
    descricaoProjeto: "projectsInfo.description.aboutProject.1",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.2",
    ],
    extras: ["OutSystems", "EUA", "projectsInfo.extras.3"],
    logo: apple,
    techs: [techsData.outsystem],
    id: 2,
    pais: eua,
  },
  {
    projeto: "ArcelorMittal",
    descricaoCliente: "projectsInfo.description.aboutClient.2",
    descricaoProjeto: "projectsInfo.description.aboutProject.2",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.3",
      "projectsInfo.objectives.tags.4",
      "projectsInfo.objectives.tags.5",
    ],
    extras: ["RPA", "Brasil", "projectsInfo.extras.4"],
    logo: arcelormittal,
    techs: [techsData.automation, techsData.office],
    id: 3,
    pais: brasil,
  },
  {
    projeto: "Autoliv",
    descricaoCliente: "projectsInfo.description.aboutClient.3",
    descricaoProjeto: "projectsInfo.description.aboutProject.3",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.6",
    ],
    extras: ["OutSystems", "EUA", "projectsInfo.extras.5"],
    logo: autoliv,
    techs: [techsData.office, techsData.outsystem],
    id: 4,
    pais: eua,
  },
  {
    projeto: "Avery Dennison",
    descricaoCliente: "projectsInfo.description.aboutClient.4",
    descricaoProjeto: "projectsInfo.description.aboutProject.4",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.6",
    ],
    extras: ["OutSystems", "EUA", "projectsInfo.extras.4"],
    logo: avery,
    techs: [techsData.office, techsData.outsystem],
    id: 5,
    pais: eua,
  },
  {
    projeto: "Exelon",
    descricaoCliente: "projectsInfo.description.aboutClient.5",
    descricaoProjeto: "projectsInfo.description.aboutProject.5",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.3",
      "projectsInfo.objectives.tags.4",
      "projectsInfo.objectives.tags.5",
    ],
    extras: ["RPA", "EUA", "projectsInfo.extras.0"],
    logo: exlon,
    techs: [techsData.office, techsData.uipath, techsData.oracle],
    id: 6,
    pais: eua,
  },
  {
    projeto: "Fair Isaac",
    descricaoCliente: "projectsInfo.description.aboutClient.6",
    descricaoProjeto: "projectsInfo.description.aboutProject.6",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.2",
    ],
    extras: ["OutSystems", "EUA", "projectsInfo.extras.3"],
    logo: fairisaac,
    techs: [techsData.office, techsData.outsystem],
    id: 7,
    pais: eua,
  },
  {
    projeto: "Frontier",
    descricaoCliente: "projectsInfo.description.aboutClient.7",
    descricaoProjeto: "projectsInfo.description.aboutProject.7",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.3",
      "projectsInfo.objectives.tags.4",
    ],
    extras: ["RPA", "Brasil", "projectsInfo.extras.2"],
    logo: frontier,
    techs: [techsData.office, techsData.pegasystem],
    id: 8,
    pais: brasil,
  },
  {
    projeto: "Grupo Boticário",
    descricaoCliente: "projectsInfo.description.aboutClient.8",
    descricaoProjeto: "projectsInfo.description.aboutProject.8",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.3",
      "projectsInfo.objectives.tags.4",
      "projectsInfo.objectives.tags.5",
    ],
    extras: ["RPA", "Brasil", "projectsInfo.extras.1"],
    logo: boticario,
    techs: [techsData.automation, techsData.office, techsData.BluePrism],
    id: 9,
    pais: brasil,
  },
  {
    projeto: "NextEra",
    descricaoCliente: "projectsInfo.description.aboutClient.9",
    descricaoProjeto: "projectsInfo.description.aboutProject.9",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.7",
      "projectsInfo.objectives.tags.8",
    ],
    extras: ["ServiceNow", "EUA", "projectsInfo.extras.0"],
    logo: nextera,
    techs: [techsData.office, techsData.servicenow],
    id: 10,
    pais: eua,
  },

  {
    projeto: "Petrobras",
    descricaoCliente: "projectsInfo.description.aboutClient.10",
    id: 11,
    pais: brasil,
    extras: ["RPA / Outsystem", "Brasil", "projectsInfo.extras.0"],
    logo: petrobras,
    segmentos: {
      rpa: {
        nome: "RPA",
        descricaoProjeto: "projectsInfo.description.aboutProject.10",
        objetivos: [
          "projectsInfo.objectives.tags.0",
          "projectsInfo.objectives.tags.3",
          "projectsInfo.objectives.tags.4",
          "projectsInfo.objectives.tags.5",
        ],
        techs: [techsData.automation, techsData.uipath, techsData.sap],
      },
      outsystem: {
        nome: "Outsystem",
        descricaoProjeto: "projectsInfo.description.aboutProject.11",
        objetivos: [
          "projectsInfo.objectives.tags.0",
          "projectsInfo.objectives.tags.13",
        ],
        techs: [
          techsData.automation,
          techsData.sap,
          techsData.office,
          techsData.citrix,
        ],
      },
    },
  },

  {
    projeto: "Roche",
    descricaoCliente: "projectsInfo.description.aboutClient.12",
    descricaoProjeto: "projectsInfo.description.aboutProject.12",
    objetivos: ["projectsInfo.objectives.tags.9"],
    extras: ["Development", "EUA", "projectsInfo.extras.7"],
    logo: roche,
    techs: [techsData.automation, techsData.uipath, techsData.sap],
    id: 14,
    pais: eua,
  },
  {
    projeto: "Selective",
    descricaoCliente: "projectsInfo.description.aboutClient.13",
    descricaoProjeto: "projectsInfo.description.aboutProject.13",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.10",
    ],
    extras: ["OutSystems", "EUA", "projectsInfo.extras.8"],
    logo: selective,
    techs: [techsData.automation, techsData.uipath, techsData.sap],
    id: 15,
    pais: brasil,
  },
  {
    projeto: "Site Improve",
    descricaoCliente: "projectsInfo.description.aboutClient.14",
    descricaoProjeto: "projectsInfo.description.aboutProject.14",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.3",
      "projectsInfo.objectives.tags.4",
      "projectsInfo.objectives.tags.5",
    ],
    extras: ["RPA", "EUA", "projectsInfo.extras.3"],
    logo: siteimprove,
    techs: [techsData.automation, techsData.uipath, techsData.sap],
    id: 16,
    pais: eua,
  },
  {
    projeto: "Trip Tri",
    descricaoCliente: "projectsInfo.description.aboutClient.15",
    descricaoProjeto: "projectsInfo.description.aboutProject.15",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.11",
      "projectsInfo.objectives.tags.12",
    ],
    extras: [
      "Desenvolvimento de E-Commerce",
      "Brasil",
      "projectsInfo.extras.9",
    ],
    logo: triptri,
    techs: [techsData.automation, techsData.uipath, techsData.sap],
    id: 17,
    pais: brasil,
  },
  {
    projeto: "Yara Internacional",
    descricaoCliente: "projectsInfo.description.aboutClient.16",
    descricaoProjeto: "projectsInfo.description.aboutProject.16",
    objetivos: [
      "projectsInfo.objectives.tags.0",
      "projectsInfo.objectives.tags.7",
      "projectsInfo.objectives.tags.8",
    ],
    extras: ["ServiceNow", "Argentina", "projectsInfo.extras.10"],
    logo: yara,
    techs: [techsData.automation, techsData.uipath, techsData.sap],
    id: 18,
    pais: argentina,
  },
];
