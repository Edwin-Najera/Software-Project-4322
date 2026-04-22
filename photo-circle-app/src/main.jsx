import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./firebase/firebase.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase.js";
import { useState } from "react";

function Root() {
  const [user, loading] = useAuthState(auth);
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    queryClient.clear();
  }, [user?.uid]);

  if (loading) return <p>Loading...</p>;

  return (
    <QueryClientProvider client={queryClient} key={user?.uid ?? "logged-out"}>
      <App />
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>,
);
