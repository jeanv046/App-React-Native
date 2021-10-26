import React from "react";
import { AuthProvider } from "./navigation/AuthProvider";
import Routes from "./navigation/routes";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
