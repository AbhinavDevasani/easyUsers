
import './App.css'
import UserContext from './context/userContext'
import { useContext } from 'react'
import Dashboard from './components/Dashboard'
import { Routes,Route } from 'react-router'
import UserDetailed from './components/UserDetailed'
import CreateUser from './components/CreateUser'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
function App() {
 const {isOpen,setIsOpen}=useContext(UserContext)

  return (
    <>
    <div className='min-h-screen flex flex-col'>
    {
                isOpen && <CreateUser setIsOpen={(setIsOpen)}/>
            }
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path="/job/:id" element={<UserDetailed></UserDetailed>}></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default App
