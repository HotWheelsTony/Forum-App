import React from "react";
import AuthProvider from "./Controller/Auth";
import Routes from "./View/navigation/Routes";

export default function App() {
    return (
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    );
}
