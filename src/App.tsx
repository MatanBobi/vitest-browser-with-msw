import { useQuery } from "@tanstack/react-query";
import "./App.css";

export interface Pokemon {
  name: string;
  url: string;
}

export function getPokemons(limit: number) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then((res) => res.json())
    .then((data) => data.results);
}

function App() {
  const { isPending, data } = useQuery<Array<Pokemon>>({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(151),
  });

  if (isPending) {
    return <>Loading...</>;
  }

  return (
    <>
      {data?.map((pokemon) => (
        <div
          style={{ display: "flex", alignItems: "center" }}
          key={pokemon.name}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.split("/")[6]
            }.png`}
            alt={pokemon.name}
          />
          <span>{pokemon.name}</span>
        </div>
      ))}
    </>
  );
}

export default App;
