import { StyleSheet, View, Text, Button } from "react-native";
import useAuth from "../../hooks/useAuth";

export const UserData = () => {
  const { auth, logout } = useAuth();

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={`${auth.username}`} />
        <ItemMenu title="Email" text={`${auth.email}`} />
        <ItemMenu title="Total Favoritos" text={`0 pokemones`} />
      </View>

      <View style={styles.btnLogout}>
        <Button title="Cerrar Sesión" onPress={logout} />
      </View>
    </View>
  );
};

const ItemMenu = (props) => {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    padding: 10,
  },
});
