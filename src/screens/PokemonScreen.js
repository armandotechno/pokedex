import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import { Header } from "../components/pokemon/Header";

export const PokemonScreen = (props) => {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);
  console.log(params.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.id}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
    </ScrollView>
  );
};
