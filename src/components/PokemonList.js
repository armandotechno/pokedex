import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = (props) => {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons} //Data es un array con los datos que quieras renderizar
      numColumns={2} // Cuantos items por columnas queremos
      showsVerticalScrollIndicator={false} // cuando se hace scroll no sale la barra
      keyExtractor={(pokemon) => String(pokemon.id)} // Esto es obligatorio
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.FlatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
