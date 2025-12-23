
import './App.css'
import Dashboard from './components/Dashboard'
import { Routes,Route } from 'react-router'
import UserDetailed from './components/UserDetailed'
import Navbar from './components/Navbar'
function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path="/job/:id" element={<UserDetailed></UserDetailed>}></Route>
      </Routes>
    </>
  )
}

export default App
