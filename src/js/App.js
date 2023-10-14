import React from "react";

import { Provider } from "react-redux";
import HomeView from './views/Home'
import Navbar from "./components/Navbar";
import LoginView from './views/Login'
import RegisterView from './views/Register'
import SettingsView from './views/Settings'
import ChatView from './views/Chat'

import configureStore from './store'
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store} >
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Routes>
            <Route path="/" Component={HomeView} />
            <Route path="/chat/:id" Component={ChatView} />
            <Route path="/settings" Component={SettingsView} />
            <Route path="/login" Component={LoginView} />
            <Route path="/register" Component={RegisterView} />          
          </Routes>
        </div >
      </Router >
    </Provider>

  )

}