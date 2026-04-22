import { useState, useEffect } from "react"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/firebase"
import { jsx } from "react/jsx-runtime";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try{
      
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      }
      else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      //Redirect after sign in
    }
    catch(err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <h1>{isLogin ? "Login" : "Create Account"}</h1>

    <form>
      <input type="email" placeholder="myEmail@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required />
      {error && <p>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
      </button>
    </form>

    <p>
      {isLogin ? "Don't have an account?" : "Already have an account?"}
      <button onClick={() => {setIsLogin(!isLogin); setError("")}} >
        {isLogin ? "Sign Up" : "Login"}
      </button>
    </p>
    </>
  )
}

export default AuthPage