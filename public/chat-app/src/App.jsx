import React from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Register from './pages/Register'
import Chat from './pages/Chat'
import Login from './pages/Login'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
