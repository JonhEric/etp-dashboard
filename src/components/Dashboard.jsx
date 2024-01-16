import React from 'react'
import { useState } from 'react'
import Professors from './Professors'

export default function Dashboard() {
  return (    
// Dashboard.jsx

    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 text-white p-4">
        {/* Sidebar Content */}
        <ul>
          <li className='p-3 hover:bg-slate-400'><a href="">Professeurs</a></li>
          <li className='p-3 hover:bg-slate-400'><a href="">Salles</a></li>
          <li className='p-3 hover:bg-slate-400'><a href="">Cours</a></li>
          <li className='p-3 hover:bg-slate-400'><a href="">Élèves</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-4">
        {/* Content goes here */}
        <h1 className="text-2xl font-bold mb-4">Tableau de Bord</h1>
        {/* Add more content as needed */}
        <Professors />
      </div>
    </div>
  )
}

