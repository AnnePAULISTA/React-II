import "./projects.css";

const projects = [
  {
    id: 1,
    nome: "M de Maravilhosa",
    descrição:
      "Site desenvolvido contando a mítica vida de Dandara dos Palmares",
    imagem: "./src/assets/M-de-maravilhosa-tela.gif",
  },

  {
    id: 2,
    nome: "Buscar Digimon",
    descrição:
      "Site com uso de API para retornar listas de digimons e suas características",
    imagem: "./src/assets/Digimon-tela.gif",
  },

  {
    id: 3,
    nome: "ListToDo",
    descrição: "Site feito para criação de listas de afazeres",
    imagem: "./src/assets/listToDo-tela.gif",
  },

  {
    id: 4,
    nome: "Meus filmes Ghibli",
    descrição: "Site com uso de API para criar minha biblioteca da Ghibli",
    imagem: "./src/assets/biblioteca-ghibli-tela.gif",
  },
];

function Projects() {
  return (
    <div>
      <h2 className="projects">Alguns projetos que fiz:</h2>
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <div className="project" key={project.id}>
              <h3>{project.nome}</h3>
              <p>{project.descrição}</p>
              <img src={project.imagem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
