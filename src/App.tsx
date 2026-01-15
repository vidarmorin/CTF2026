import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Test from './pages/Test'
import Robots from './pages/Robots'
import AdminPanelOld from './pages/AdminPanelOld'
import RobotsFile from './components/RobotsFile'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (page: string) => {
    setCurrentPage(page)
  }

  return (
    <div className="app-container">
      {currentPage === 'home' && <Home navigate={navigate} />}
      {currentPage === 'test' && <Test navigate={navigate} />}
      {currentPage === 'robots' && <Robots navigate={navigate} />}
      {currentPage === 'admin' && <AdminPanelOld navigate={navigate} />}
      {currentPage === 'robots-file' && <RobotsFile navigate={navigate} />}
    </div>
  )
}
