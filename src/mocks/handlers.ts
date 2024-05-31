// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { pokemons } from "./mockData.ts";

export const handlers = [
  http.get("https://pokeapi.co/api/v2/pokemon", () => {
    console.log("I'm here man");
    return HttpResponse.json(pokemons);
  }),
];
