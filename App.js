import React from "react";
import AuthProvider from "./authentication/Auth";
import Routes from "./navigation/Routes";

export default function App() {
    return (
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    );
}
