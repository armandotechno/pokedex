import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

export const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  console.log("polemons --->", pokemons);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>PokedexScreen</Text>
    </View>
  );
};
