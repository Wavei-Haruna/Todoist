import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import {AiOutlinePlus} from "react-icons/ai"
import { toast } from 'react-toastify'
import { useState } from 'react'
import {  LoginContextProvider } from './Helpers/LoginContext'
import Profile from './Profile'


export default function Dashboard() {
    
  return (

    <LoginContextProvider>
    <section className='grid md:grid-cols-2 w-screen mx-0'>
     {/* Side menu */}
      <div className='w-[40%] bg-green-100 h-screen'>

        <div>
          <Profile/>
        </div>
      <button className='bg-blue-500 w-full p-2 my-3 text-white font-semibold hover:scale-105 flex justify-center items-center  '> <AiOutlinePlus className='mx-1 text-xl'/> Add Task</button>


      </div>
      {/* display menu */}

      <div className='w-full'></div>
    </section>
    </LoginContextProvider>
  )
}
