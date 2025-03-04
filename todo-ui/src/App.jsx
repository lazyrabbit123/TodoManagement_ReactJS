import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListToDoComponent from './component/ListToDoComponent'
import HeaderComponent from './component/HeaderComponent'
import FooterComponent from './component/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoComponent from './component/TodoComponent'
import RegisterComponent from './component/RegisterComponent'
import LoginComponent from './component/LoginComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListToDoComponent />} ></Route>
          <Route path='/todos' element={<ListToDoComponent />} ></Route>
          <Route path='/add-todo' element={<TodoComponent />} ></Route>
          <Route path='/update-todo/:id' element={<TodoComponent />} ></Route>

          <Route path='/register' element={<RegisterComponent />} ></Route>
          <Route path='/login' element={<LoginComponent />} ></Route>

        </Routes>
        <FooterComponent />

      </BrowserRouter>
    </>
  )
}

export default App
