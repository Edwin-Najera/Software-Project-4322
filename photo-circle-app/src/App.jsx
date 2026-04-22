import { useAuthState } from 'react-firebase-hooks/auth'
import './App.css'
import HomePage from './components/HomePage'
import AuthPage from './components/auth/AuthPage'
import { auth } from './firebase/firebase'

function App() {
  const [user, loading] = useAuthState(auth);

  if(loading) return <p>Loading...</p>;
  if(!user) return <AuthPage />; 
  return (
    <HomePage />
  )
}

export default App
