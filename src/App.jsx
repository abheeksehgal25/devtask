import { Routes, Route } from 'react-router-dom'
import LandingScreen from './components/LandingScreen'
import LoginScreen from './components/LoginScreen'
import SignupScreen from './components/SignupScreen'
import ProfileScreen from './components/ProfileScreen'
import './App.css'

function App() {
  return (
    <div className="mobile-frame-container">
      <div className="mobile-frame">
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
