import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavoriteApi } from "../../api/favorite";

export const Favorite = (props) => {
  const { id } = props;

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
};