import { StyleSheet, Text, FlatList } from "react-native";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = (props) => {
  const { pokemons } = props;
  console.log(pokemons);

  return (
    <FlatList
      data={pokemons} //Data es un array con los datos que quieras renderizar
      numColumns={2} // Cuantos items por columnas queremos
      showsVerticalScrollIndicator={false} // cuando se hace scroll no sale la barra
      keyExtractor={(pokemon) => String(pokemon.id)} // Esto es obligatorio
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.FlatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 5,
  },
});
