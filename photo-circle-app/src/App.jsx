import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/firebase'
import './App.css'
import { Route, Routes, Navigate} from 'react-router-dom'
import HomePage from './components/HomePage'
import AuthPage from './components/auth/AuthPage'
import EventPage from './components/EventPage'

function App() {
  const [user, loading] = useAuthState(auth);

  if(loading) return <p>Loading...</p>;
  if(!user) return <AuthPage />; 
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/event/:eventId' element={<EventPage />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
