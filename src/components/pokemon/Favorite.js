import Icon from "react-native-vector-icons/FontAwesome5";

export const Favorite = (props) => {
  const { id } = props;

  const addFavorite = () => {
    console.log("Añadir a favoritos", id);
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
