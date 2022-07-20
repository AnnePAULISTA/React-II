import { useState, useEffect } from "react";
import "./repositories.css";

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://api.github.com/users/AnnePAULISTA/repos"
      );
      const data = await response.json();

      setRepos(data);
    };
    getData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredRepos(repos.filter((repo) => repo.name.includes(search)));
  }, [repos, search]);

  return (
    <>
      <h1 className="header-repos">Outros repositórios no meu Github:</h1>
      <div className="infos">
        {filteredRepos.map((repo) => {
          return <p key={repo.id}>{repo.name}</p>;
        })}
      </div>
    </>
  );
};

export default Repositories;
