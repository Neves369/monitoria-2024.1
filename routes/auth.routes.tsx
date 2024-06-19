import React from "react";
import Entrar from "../screens/login/Login";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

type StackNavigation = {
  Entrar: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type LoginProps = NativeStackScreenProps<StackNavigation, "Entrar">;

const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator initialRouteName="Entrar" screenOptions={{ headerShown: false }}>
      <Screen
        name="Entrar"
        component={Entrar}
        options={{
          animation: "slide_from_left",
        }}
      />
    </Navigator>
  );
};

export default AuthRoutes;
