import { View, Text } from "react-native";
import { LoginForm } from "../components/Auth/LoginForm";
import { UserData } from "../components/Auth/UserData";

export const AccountScreen = () => {
  const auth = null;

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};
