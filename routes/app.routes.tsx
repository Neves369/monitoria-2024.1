// Importações
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Dashboard from "../screens/dashboard/Dashboard";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

// Tipos de navegação
type StackNavigation = {
  Dashboard: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type DashboardProps = NativeStackScreenProps<
  StackNavigation,
  "Dashboard"
>;

// Criação do navegador de pilha
const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

// Definição das rotas
const AppRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name="Dashboard"
        options={{
          headerTitle: "EconoMes", // Título do cabeçalho
          headerRight: () => (
            <Ionicons
              name="settings-sharp"
              size={24}
              color={"black"}
              onPress={() => {}}
            />
          ),
        }}
        component={Dashboard} // Componente da tela Dashboard
      />
    </Navigator>
  );
};

export default AppRoutes; // Exporta a função AppRoutes como padrão
