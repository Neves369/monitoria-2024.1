import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./context/auth";
import Routes from "./routes";

/**
 * O componente principal da aplicação.
 * Este componente serve como ponto de entrada para a aplicação.
 */
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
