import React from "react";
import { AuthProvider } from "./navigation/AuthProvider";
import Routes from "./navigation/routes";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
