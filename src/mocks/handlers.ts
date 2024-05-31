// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { pokemons } from "./mockData.ts";

export const handlers = [
  http.get("https://pokeapi.co/api/v2/pokemon", () => {
    return HttpResponse.json(pokemons);
  }),
];
