import React, { useContext } from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import AuthContext from "../context/auth";

// Componente que renderiza as rotas da aplicação
const Routes: React.FC = () => {
  // Obtém o estado de autenticação do contexto
  const { signed }: { signed: boolean } = useContext(AuthContext) ?? {
    signed: false,
  };

  // Renderiza as rotas de autenticação se o usuário não estiver logado
  // ou as rotas da aplicação se o usuário estiver logado
  return <>{!signed ? <AuthRoutes /> : <AppRoutes />}</>;
};

export default Routes;
