import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import IUsuario from "../models/IUsuario";

interface AuthContextData {
  signed: boolean;
  error: string;
  showError: boolean;
  user: IUsuario;
  signIn(usuario: any): Promise<void>;
  signOut(): void;
  signOutClearUser(): void;
  signOutClearAll(): void;
  showMessageError(message: string): void;
  hideMessageError(): void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>(undefined);
  const [showError, setshowError] = useState(false);
  const [signedUser, setSignedUser] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@Usuario:user");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setSignedUser(true);
      }
    }
    loadStorageData();
  }, []);

  async function signIn(usuario: any) {
    setUser(usuario);
    setSignedUser(true);
    await AsyncStorage.setItem("@Usuario:user", JSON.stringify(usuario));

    return Promise.resolve();
  }

  //Mantém o usuário setado e encerra a sessão.
  function signOut() {
    setSignedUser(false);
  }

  //Remove o usuário setado e encerra a sessão.
  async function signOutClearAll() {
    await AsyncStorage.clear().then(() => {
      setSignedUser(false);
    });
  }

  //Remove o usuário setado e encerra a sessão.
  async function signOutClearUser() {
    const keys = ["@Usuario:user"];
    await AsyncStorage.multiRemove(keys).then(() => {
      setSignedUser(false);
    });
  }

  function showMessageError(message: string) {
    setError(message);
    setshowError(true);

    setTimeout(() => {
      setError("");
      setshowError(false);
    }, 5000);
  }

  function hideMessageError() {
    setError("");
    setshowError(false);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: signedUser,
        showError,
        error,
        user,
        signIn,
        signOut,
        signOutClearAll,
        signOutClearUser,
        showMessageError,
        hideMessageError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
