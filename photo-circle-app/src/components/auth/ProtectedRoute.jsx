import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

function ProtectedRoute({ children, userKey }) {
  const [user, authLoading] = useAuthState(auth);

  if (authLoading) return <p>Loading</p>;
  if (!user) return <Navigate to="/" />;

  return <div key={userKey}>{children}</div>;
}

export default ProtectedRoute;
