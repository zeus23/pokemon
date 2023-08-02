
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getAllPokemons: builder.query({
            query: ({ offset, limit }) => `pokemon/?offset=${offset}&limit=${limit}`
        }),

        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})

export const { useGetAllPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;