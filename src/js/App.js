import React from "react";
import HomeView from './views/Home'
import Navbar from "./components/Navbar";
import LoginView from './views/Login'
import RegisterView from './views/Register'
import SettingsView from './views/Settings'

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

export default function App() {
  return (

    <Router>
      <Navbar />
      <div className='content-wrapper'>
        <Routes>
          <Route path="/settings" Component={SettingsView} />
          <Route path="/login" Component={LoginView} />
          <Route path="/register" Component={RegisterView} />
          <Route path="/" Component={HomeView} />
        </Routes>
      </div >
    </Router >

  )

}