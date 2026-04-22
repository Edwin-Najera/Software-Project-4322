import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import AuthPage from "./components/auth/AuthPage";
import EventPage from "./components/EventPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;
  if (!user) return <AuthPage />;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/event/:eventId"
        element={
          <ProtectedRoute>
            <EventPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
