import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Archive, Home, Lebels, Login, Signup, Trash } from '../Pages'

export const Routers = () => {
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/lebels' element={<Lebels/>}/>
          <Route path='archive' element={<Archive/>}/>
          <Route path='/trash' element={<Trash/>}/>
      </Routes>
  )
}
