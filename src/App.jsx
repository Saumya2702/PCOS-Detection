import React from 'react'
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import SelfDiagnosis from "./components/SelfDiagnosis"
import DietPlanner from "./components/DietPlanner"
import YogaPlanner from "./components/YogaPlanner"
import CycleTracker from "./components/CycleTracker"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"
import LifestyleSuggestion from "./components/LifestyleSuggestion"
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/selfdiagnosis' element={<SelfDiagnosis/>}/>
          <Route path='/dietplanner' element={<DietPlanner/>}/>
          <Route path='/yogaplanner' element={<YogaPlanner/>}/>
          <Route path='/cycletracker' element={<CycleTracker/>}/>
          <Route path='/lifestylesuggestion' element={<LifestyleSuggestion/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
        <ToastContainer position="top-center" />
      </Router>
    </div>
  )
}

export default App
