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
    descricao:
      "A American Express é uma das empresas líderes globais em serviços financeiros, especializada em cartões de crédito, pagamentos digitais, viagens e serviços bancários. Com mais de 160 anos de história, a American Express opera em mais de 130 países, oferecendo soluções financeiras inovadoras para consumidores, empresas e comerciantes em todo o mundo. Com uma base de clientes que inclui milhões de indivíduos e empresas de diversos portes, a empresa é reconhecida por seu compromisso com a excelência e a confiança no mercado financeiro. Este projeto de OutSystems tem como principal objetivo a transformação digital da American Express, com a criação de aplicações focadas na área financeira. A iniciativa visa otimizar os processos internos, melhorando a agilidade e a eficiência nas operações financeiras da empresa. Através do uso da plataforma OutSystems, a American Express busca desenvolver soluções inovadoras e personalizadas que atendam às crescentes demandas do setor financeiro, garantindo uma experiência mais ágil e segura para seus clientes e parceiros comerciais. Com este projeto, a American Express continua sua jornada de inovação digital, criando um impacto significativo nas suas operações e no mercado financeiro, ao adotar novas tecnologias que aprimoram a gestão de transações, pagamentos e serviços financeiros.",
    objetivos: [
      "Transformação Digital",
      "Criação de Aplicações para área Financeira",
    ],
    extras: ["OutSystems", "Uruguai", "Financeiro"],
    logo: americanexpress,
    techs: [techsData.office, techsData.outsystem],
    id: 1,
    pais: uruguay,
  },

  {
    projeto: "Apple",
    descricao:
      "A Apple é uma das maiores e mais influentes empresas de tecnologia do mundo, conhecida por sua inovação em hardware, software e serviços digitais. Com produtos icônicos como o iPhone, iPad, MacBook e Apple Watch, a Apple tem uma presença global e mais de 147.000 funcionários. Seu impacto no mercado de tecnologia é incomparável, com milhões de clientes em todo o mundo e uma sólida base de lealdade do consumidor. Este projeto de OutSystems tem como objetivo apoiar a transformação digital da Apple, com a criação de aplicações inovadoras para a área tecnológica. A iniciativa visa otimizar e acelerar o desenvolvimento de soluções internas, melhorando a integração entre equipes e sistemas, ao mesmo tempo em que proporciona agilidade na entrega de novos produtos e serviços. A utilização de OutSystems permite que a Apple crie e adapte rapidamente aplicações para atender às crescentes demandas do mercado e de seus processos internos. Através deste projeto, a Apple busca fortalecer ainda mais sua liderança em inovação, utilizando a plataforma OutSystems para criar soluções digitais mais rápidas e eficientes, alinhando-se às suas metas de transformação tecnológica e contínua evolução no mercado.",
    objetivos: [
      "Transformação Digital",
      "Criação de Aplicações para área Tecnológica",
    ],
    extras: ["OutSystems", "EUA", "Tecnologia"],
    logo: apple,
    techs: [techsData.outsystem],
    id: 2,
    pais: eua,
  },

  {
    projeto: "ArcelorMittal",
    descricao:
      "A ArcelorMittal é uma das maiores empresas siderúrgicas do mundo, atuando na produção de aço e outros metais, com uma presença global em mais de 60 países. Com mais de 190.000 colaboradores, a ArcelorMittal é líder na produção de aço e oferece produtos para diversos setores, incluindo construção, automotivo, e infraestrutura. A empresa é conhecida por seu compromisso com a inovação, sustentabilidade e excelência operacional. O projeto de RPA (Automação de Processos Robóticos), utilizando a plataforma Automation Anywhere, tem como principal objetivo promover a transformação digital da ArcelorMittal, com foco na economia de horas operacionais e na redução de custos. A automação está sendo implementada em processos críticos utilizando Microsoft Excel e SAP, otimizando fluxos de trabalho, reduzindo a dependência de tarefas manuais e aumentando a eficiência nas operações. Essa iniciativa visa não só aumentar a produtividade, mas também garantir maior precisão e consistência nos processos, permitindo que a ArcelorMittal se concentre em suas atividades estratégicas e continue liderando a indústria com soluções mais eficientes e tecnologicamente avançadas.",
    objetivos: [
      "Transformação Digital",
      "Economia de Horas",
      "Redução de Custos",
      "Diminuição de Falhas Humanas",
    ],
    extras: ["RPA", "Brasil", "Industrial"],
    logo: arcelormittal,
    techs: [techsData.automation, techsData.office],
    id: 3,
    pais: brasil,
  },

  {
    projeto: "Autoliv",
    descricao:
      "A Autoliv é uma das maiores fornecedoras globais de sistemas de segurança automotiva, especializada em airbags, cintos de segurança e outros componentes críticos para a segurança de veículos. Com mais de 70 anos de experiência, a Autoliv possui operações em mais de 27 países, empregando mais de 60.000 pessoas em sua rede global, sendo um player fundamental na indústria automotiva, com presença em todos os principais mercados de veículos. Este projeto de OutSystems tem como objetivo impulsionar a transformação digital da Autoliv, com foco na criação de aplicações inovadoras para a área de suprimentos. A solução visa otimizar processos de gestão de compras, controle de estoques e comunicação entre fornecedores, promovendo uma maior eficiência e integração entre as diversas etapas da cadeia de suprimentos. Com o uso da plataforma OutSystems, a Autoliv busca melhorar a agilidade nas operações, reduzir o tempo de resposta e aumentar a precisão das informações, alinhando a tecnologia às necessidades estratégicas da empresa. Esta iniciativa reforça o compromisso da Autoliv com a inovação e a eficiência operacional no setor automotivo.",
    objetivos: [
      "Transformação Digital",
      "Criação de Aplicações para área de Suprimentos",
    ],
    extras: ["OutSystems", "EUA", "Automotiva"],
    logo: autoliv,
    techs: [techsData.office, techsData.outsystem],
    id: 4,
    pais: eua,
  },

  {
    projeto: "Avery Dennison",
    descricao:
      "A Avery Dennison é uma multinacional americana líder global em materiais para rótulos, embalagens e soluções de identificação, com presença em mais de 50 países e mais de 30.000 funcionários ao redor do mundo. A empresa se destaca pela inovação e tecnologia aplicada a diversos setores, incluindo varejo, logística, automotivo e saúde. Para acelerar sua transformação digital, estão sendo desenvolvidas aplicações com a plataforma OutSystems, modernizando processos e impulsionando a eficiência operacional. O projeto visa criar soluções ágeis, escaláveis e personalizadas, melhorando a produtividade, reduzindo custos e elevando a experiência dos usuários internos e externos. Com essa iniciativa, a Avery Dennison reforça seu compromisso com a inovação e a digitalização, garantindo maior competitividade e adaptação às novas demandas do mercado.",
    objetivos: [
      "Transformação Digital",
      "Criação de Aplicações para área de Produção",
    ],
    extras: ["OutSystems", "EUA", "Industrial"],
    logo: avery,
    techs: [techsData.office, techsData.outsystem],
    id: 5,
    pais: eua,
  },

  {
    projeto: "Exelon",
    descricao:
      "A Exelon é uma das maiores empresas de energia dos Estados Unidos, atuando no fornecimento de eletricidade e gás para milhões de clientes. Com operações em diversos estados e um portfólio robusto de geração de energia, a Exelon se destaca pela busca contínua por inovação e eficiência operacional. Para impulsionar sua transformação digital, estão sendo implementadas soluções de RPA (Automação de Processos Robóticos) com UiPath, automatizando tarefas repetitivas e complexas. O projeto tem como principais objetivos realizar economia de horas operacionais, permitindo que os colaboradores foquem em atividades estratégicas. Além disso, reduzir de custos eliminando processos manuais demorados e ineficientes e, por fim, diminuir de falhas humanas garantindo maior precisão e conformidade nas operações. As automações são desenvolvidas principalmente para sistemas como Oracle e Microsoft Excel, otimizando fluxos financeiros, administrativos e operacionais. Com essa iniciativa, a Exelon fortalece sua eficiência, inovação e competitividade no setor de energia.",
    objetivos: [
      "Transformação Digital",
      "Economia de Horas",
      "Redução de Custos",
      "Diminuição de Falhas Humanas",
    ],
    extras: ["RPA", "EUA", "Energia"],
    logo: exlon,
    techs: [techsData.office, techsData.uipath, techsData.oracle],
    id: 6,
    pais: eua,
  },

  {
    projeto: "Fair Isaac",
    descricao:
      "A Fair Isaac Corporation (FICO) é uma empresa global líder em análise preditiva e tecnologia de decisão, amplamente reconhecida pelo desenvolvimento do FICO Score, um dos principais modelos de pontuação de crédito do mundo. Com presença em mais de 100 países, a empresa oferece soluções inovadoras para bancos, seguradoras, varejistas e diversas indústrias, ajudando organizações a tomarem decisões mais inteligentes e baseadas em dados. Visando uma transformação digital na companhia, estão sendo desenvolvidas aplicações com a plataforma OutSystems, modernizando sistemas e processos essenciais. O projeto visa criar soluções ágeis e escaláveis que atendam às necessidades do negócio, otimizar a eficiência operacional, reduzindo retrabalho e aumentando a produtividade e aprimorar a experiência dos usuários internos e clientes, tornando os processos mais intuitivos e eficazes. Com essa iniciativa, a FICO reforça seu compromisso com a inovação tecnológica, garantindo maior agilidade, competitividade e excelência no mercado de análise de crédito e inteligência de dados.",
    objetivos: [
      "Transformação Digital",
      "Criação de Aplicações para área Tecnológica",
    ],
    extras: ["OutSystems", "EUA", "Tecnologia"],
    logo: fairisaac,
    techs: [techsData.office, techsData.outsystem],
    id: 7,
    pais: eua,
  },

  {
    projeto: "Frontier",
    descricao:
      "A Frontier Communications é uma das maiores provedoras de serviços de telecomunicações nos Estados Unidos, oferecendo soluções de internet banda larga, telefonia e TV digital para milhões de clientes. Com uma infraestrutura robusta e presença nacional, a empresa busca constantemente inovação para otimizar seus processos e melhorar a experiência dos clientes. Como parte de sua transformação digital, estão sendo implementadas soluções avançadas de RPA (Automação de Processos Robóticos) utilizando as plataformas UiPath e Pegasystems. As automações são desenvolvidas principalmente para Microsoft Excel, otimizando o processamento de grandes volumes de dados e melhorando a tomada de decisões com base em informações estruturadas. Com essa iniciativa, a Frontier Communications fortalece sua eficiência operacional e competitividade no setor de telecomunicações, consolidando-se como uma empresa cada vez mais digital e inovadora.",
    objetivos: [
      "Transformação Digital",
      "Economia de Horas",
      "Redução de Custos",
    ],
    extras: ["RPA", "Brasil", "Comunicação"],
    logo: frontier,
    techs: [techsData.office, techsData.pegasystem],
    id: 8,
    pais: brasil,
  },

  {
    projeto: "Grupo Boticário",
    descricao:
      "O Grupo Boticário é uma das maiores empresas de cosméticos e produtos de beleza do Brasil, com uma presença marcante no mercado global. Com um portfólio de marcas renomadas, como O Boticário, Eudora, e quem disse, berenice?, a empresa está presente em diversos países e se destaca pela inovação no desenvolvimento de produtos e experiência do cliente. No intuito de potencializar a sua transformação digital, o Grupo Boticário vem implementando soluções de RPA (Automação de Processos Robóticos) utilizando as plataformas Automation Anywhere e Blue Prism. As automações estão sendo desenvolvidas principalmente para sistemas como Microsoft Excel e Citrix, otimizando fluxos financeiros, administrativos e operacionais, além de agilizar o processamento de grandes volumes de dados. Com essa iniciativa, o Grupo Boticário reforça seu compromisso com a inovação e a eficiência, fortalecendo sua posição no mercado de cosméticos e beleza e promovendo uma jornada digital cada vez mais eficiente e inteligente.",
    objetivos: [
      "Transformação Digital",
      "Economia de Horas",
      "Redução de Custos",
      "Diminuição de Falhas Humanas",
    ],
    extras: ["RPA", "Brasil", "Cosméticos"],
    logo: boticario,
    techs: [techsData.automation, techsData.office, techsData.BluePrism],
    id: 9,
    pais: brasil,
  },

  {
    projeto: "NextEra",
    descricao:
      "A NextEra Energy é uma das maiores empresas de energia renovável do mundo, com foco em geração de energia limpa e sustentável. Com um portfólio diversificado, incluindo energia solar e eólica, e uma presença global em vários países, a NextEra se destaca por sua liderança em sustentabilidade e inovação no setor de energia. Para a sua transformação digital, a NextEra está implementando o ServiceNow para otimizar a gestão de operações e melhorar a eficiência da infraestrutura tecnológica. O projeto tem como principais objetivos: Monitoramento de atividades tecnológicas, garantindo a visibilidade em tempo real das operações e identificando possíveis falhas antes que impactem os serviços. Melhoria da infraestrutura, promovendo a automação e agilizando processos para garantir maior eficiência operacional. Transformação Digital, permitindo uma abordagem mais ágil e estratégica na gestão de serviços e processos, alinhando a tecnologia às necessidades do negócio. Com essa iniciativa, a NextEra Energy reforça seu compromisso com a inovação e a sustentabilidade, garantindo operações mais eficientes, ágeis e integradas, para continuar sua liderança no mercado de energia renovável.",
    objetivos: [
      "Transformação Digital",
      "Monitoramento de atividades tecnológicas",
      "Melhoria de Infraestrutura",
    ],
    extras: ["ServiceNow", "EUA", "Energia"],
    logo: nextera,
    techs: [techsData.office, techsData.servicenow],
    id: 10,
    pais: eua,
  },

  {
    projeto: "Petrobras - RPA",
    descricao:
      "A Petrobras é uma das maiores empresas de energia do mundo, atuando em todas as etapas da cadeia de petróleo e gás, desde a exploração até a distribuição de combustíveis e derivados. Com uma presença global significativa e mais de 60 anos de experiência, a Petrobras é líder no setor energético, contribuindo para o desenvolvimento do Brasil e de outros países ao redor do mundo. O objetivo deste projeto de RPA (Automação de Processos Robóticos), utilizando a plataforma Automation Anywhere, é realizar uma transformação digital nas operações da Petrobras, promovendo a economia de horas operacionais e a redução de custos. A automação de processos repetitivos e complexos tem sido implementada em sistemas cruciais como Microsoft Excel, techsData.SAP, techsData.Citrix e Petronect, otimizando fluxos de trabalho e garantindo maior eficiência e precisão nas operações.",
    objetivos: [
      "Transformação Digital",
      "Economia de Horas",
      "Redução de Custos",
      "Diminuição de Falhas Humanas",
    ],
    extras: ["RPA", "Brasil", "Energia"],
    logo: petrobras,
    techs: [techsData.automation, techsData.uipath, techsData.sap],
    id: 11,
    pais: brasil,
  },
  {
    projeto: "Petrobras - OutSystems",
    descricao:
      "(Breve Participação) A Petrobras é uma das maiores empresas de energia e petróleo do mundo, especializada na exploração, produção, refino e distribuição de petróleo, gás natural e derivados. Fundada em 1953, a Petrobras tem uma presença significativa no Brasil e em diversos países, com operações em mais de 20 países e uma força de trabalho de mais de 50.000 colaboradores. A empresa desempenha um papel essencial no desenvolvimento do setor energético global e é reconhecida por sua liderança em inovação e sustentabilidade na indústria de energia. Este projeto de OutSystems tem como principal objetivo apoiar a transformação digital da Petrobras, com a modernização de aplicações legadas utilizando .NET. A iniciativa visa atualizar e integrar sistemas antigos, proporcionando maior agilidade, escalabilidade e eficiência operacional. O uso da plataforma OutSystems permite à Petrobras modernizar seus processos de TI, otimizar o desenvolvimento de novas aplicações e aumentar a flexibilidade para adaptar-se rapidamente às mudanças no mercado de energia. Através dessa transformação, a Petrobras fortalece sua posição no setor de energia, buscando maior eficiência e inovação nos seus processos internos e oferecendo soluções mais ágeis e modernas para seus desafios operacionais e estratégicos. Este projeto é um verdadeiro case global de sucesso, com resultados excepcionais, incluindo uma economia de mais de R$ 6 bilhões em um ano e R$ 120 milhões em apenas 3 semanas. A implementação da automação tem gerado ganhos expressivos em produtividade, reduzido erros humanos e acelerado processos ",
    objetivos: ["Transformação Digital", "Modernização de Aplicações Legado"],
    extras: ["OutSystems", "Brasil", "Energia"],
    logo: petrobras,
    techs: [
      techsData.automation,
      techsData.sap,
      techsData.office,
      techsData.citrix,
    ],
    id: 13,
    pais: brasil,
  },

  {
    projeto: "Roche",
    descricao:
      "A Roche é uma das principais empresas farmacêuticas e de diagnóstico do mundo, especializada no desenvolvimento de medicamentos inovadores e tecnologias de diagnóstico avançadas. Com mais de 120 anos de história, a Roche tem presença global, com operações em mais de 100 países e uma força de trabalho de mais de 90.000 colaboradores. A empresa é reconhecida por sua liderança no combate a doenças graves e por seu compromisso com a saúde global. Este projeto de desenvolvimento utilizando Java tem como objetivo impulsionar a transformação digital da Roche, através da criação de aplicações PMO (Project Management Office) que otimizem o gerenciamento de projetos e aprimorem a colaboração entre equipes. Com foco na inovação e na melhoria contínua dos processos internos, o projeto visa integrar soluções tecnológicas que aumentem a eficiência, agilidade e precisão no acompanhamento e execução de projetos. A iniciativa é parte da estratégia digital da Roche para fortalecer a gestão de seus projetos, garantindo maior controle, transparência e alinhamento com os objetivos estratégicos da empresa.",
    objetivos: ["Desenvolvimento de Aplicações PMO"],
    extras: ["Development", "EUA", "Farmacêutico"],
    logo: roche,
    techs: [techsData.automation, techsData.uipath, techsData.sap],
    id: 14,
    pais: eua,
  },

  {
    projeto: "Selective",
    descricao:
      "A Selective é uma renomada seguradora dos Estados Unidos, especializada em oferecer uma ampla gama de soluções de seguros para indivíduos e empresas, com foco em automóveis, imóveis e seguros comerciais. Com mais de 90 anos de experiência, a Selective é reconhecida pela sua excelência em serviços personalizados e pela sólida posição no mercado de seguros, operando em diversos estados americanos. Este projeto de OutSystems tem como objetivo apoiar a transformação digital da Selective, com a criação de aplicações inovadoras para a área de seguros. A implementação de soluções ágeis e escaláveis visa otimizar processos, melhorar a experiência do cliente e aumentar a eficiência operacional. O projeto busca modernizar a forma como a empresa gerencia e oferece seus produtos e serviços de seguros, permitindo uma melhor integração e automação de processos internos, e uma experiência mais fluida e digital para os clientes. Com essa iniciativa, a Selective fortalece sua posição como uma líder no setor de seguros, ao adotar tecnologias de ponta que transformam e aprimoram a maneira como interage com seus clientes e gere suas operações.",
    objetivos: [
      "Transformação Digital",
      "Criação de Aplicações para área de Seguros",
    ],
    extras: ["OutSystems", "EUA", "Seguros"],
    logo: selective,
    techs: [techsData.automation, techsData.uipath, techsData.sap],
    id: 15,
    pais: brasil,
  },

  {
    projeto: "Site Improve",
    descricao:
      "A SiteImprove é uma empresa líder no fornecimento de soluções de otimização de websites, especializada em ferramentas de análise de performance digital, acessibilidade e SEO. Com uma base de clientes global e uma forte presença no mercado, a SiteImprove ajuda empresas a melhorar a experiência do usuário e a garantir que seus sites estejam otimizados para desempenho, segurança e conformidade com as normas. O projeto de RPA (Automação de Processos Robóticos), utilizando a plataforma Automation Anywhere, tem como objetivo promover a transformação digital da SiteImprove, com a economia de horas operacionais e a redução de custos. A automação foi implementada em processos críticos, utilizando sistemas como Microsoft Excel, techsData.SAP, techsData.Citrix e Salesforce, para otimizar fluxos de trabalho, reduzir erros humanos e melhorar a eficiência operacional. A iniciativa visa não apenas aumentar a produtividade, mas também garantir maior precisão nos processos internos, permitindo que as equipes da SiteImprove se concentrem em atividades de maior valor estratégico. Com essa abordagem, a SiteImprove continua a se posicionar na vanguarda da inovação digital, oferecendo soluções mais eficientes e de maior qualidade para seus clientes.",
    objetivos: [
      "Transformação Digital",
      "Economia de Horas",
      "Redução de Custos",
      "Diminuição de Falhas Humanas",
    ],
    extras: ["RPA", "EUA", "Tecnologia"],
    logo: siteimprove,
    techs: [techsData.automation, techsData.uipath, techsData.sap],
    id: 16,
    pais: eua,
  },

  {
    projeto: "Trip Tri",
    descricao:
      "A TripTri é uma empresa inovadora no setor de viagens e turismo, especializada em fornecer soluções personalizadas para clientes que buscam experiências únicas em destinos ao redor do mundo. A TripTri oferece pacotes turísticos, passagens aéreas, hospedagens e serviços exclusivos, atendendo tanto viajantes individuais quanto grupos. Com um forte foco em atendimento ao cliente e inovação, a empresa está posicionada para expandir sua presença no mercado de turismo global. Este projeto tem como principal objetivo a transformação digital da TripTri, com a modernização da empresa para a realização de vendas online e controle geral da empresa via administração online. A criação de uma plataforma de eCommerce permitirá à TripTri oferecer seus serviços de forma ágil e acessível, proporcionando uma experiência de compra simplificada para os clientes. Além disso, a implementação de um sistema de gestão integrado permitirá o controle eficiente de vendas, estoques, reservas e dados dos clientes, tudo em tempo real. Com essa transformação, a TripTri se moderniza, conquistando mais autonomia e flexibilidade, ao mesmo tempo em que oferece uma experiência de compra digital mais intuitiva e eficiente para seus clientes. Isso permitirá à empresa expandir seu alcance, melhorar sua competitividade e continuar a fornecer um serviço excepcional no setor de turismo.",
    objetivos: [
      "Transformação Digital",
      "Melhoria no Processo de Venda",
      "Controle Geral dos Setores",
    ],
    extras: ["Desenvolvimento de E-Commerce", "Brasil", "Turismo"],
    logo: triptri,
    techs: [techsData.automation, techsData.uipath, techsData.sap],
    id: 17,
    pais: brasil,
  },

  {
    projeto: "Yara Internacional",
    descricao:
      "A Yara Internacional é uma líder global no setor de fertilizantes e soluções agrícolas, com foco em promover uma agricultura sustentável e aumentar a segurança alimentar em todo o mundo. Fundada na Noruega, a Yara opera em mais de 60 países, com uma equipe de aproximadamente 17.000 colaboradores, e é reconhecida pela inovação em produtos e serviços voltados para a otimização de recursos agrícolas e proteção ambiental. O projeto de ServiceNow implementado para a Yara tem como objetivo principal a transformação digital das operações tecnológicas da empresa, focando em monitoramento de atividades tecnológicas e na melhoria da infraestrutura de TI. A solução permite otimizar processos internos, melhorar a visibilidade em tempo real das operações de TI e garantir maior eficiência no gerenciamento de incidentes e serviços. A iniciativa visa tornar as operações da Yara mais ágeis e integradas, melhorando o gerenciamento e a resposta às necessidades tecnológicas da empresa. A adoção do ServiceNow possibilita uma abordagem mais eficaz e estratégica, alinhando a infraestrutura tecnológica aos objetivos globais da empresa e promovendo uma transformação contínua e sustentável.",
    objetivos: [
      "Transformação Digital",
      "Monitoramento de atividades tecnológicas",
      "Melhoria de Infraestrutura",
    ],
    extras: ["ServiceNow", "Argentina", "Agricola"],
    logo: yara,
    techs: [techsData.automation, techsData.uipath, techsData.sap],
    id: 18,
    pais: argentina,
  },
];
