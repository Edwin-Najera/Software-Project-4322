import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useCreateUser } from "../../dataconnect-generated/react";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { mutate: createUser } = useCreateUser();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const cleanEmail = email.trim().toLowerCase();

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, cleanEmail, password);
      } else {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          cleanEmail,
          password,
        );

        await createUser({
          displayName: email.split("@")[0],
          email: user.email,
          firebaseUid: user.uid,
        });
      }
      //Redirect after sign in
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>{isLogin ? "Login" : "Create Account"}</h1>

      <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
        <form
          className="row g-3 d-flex justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="form-floating col-12">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              id="floatingEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingEmail">Email</label>
          </div>
          <div className="form-floating col-12">
            <input
              className="form-control"
              type="password"
              placeholder="********"
              id="floatingPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          {error && <p>{error}</p>}
          <button
            className="btn btn-primary w-25"
            type="submit"
            disabled={loading}
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <span className="row">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button
              className="btn btn-primary p-0"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
