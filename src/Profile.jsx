import React, { useEffect, useState } from 'react'
import { useContext } from 'react'

import { LoginContext } from './Helpers/LoginContext'

export default function Profile() {


    const {user, loading}= useContext(LoginContext)

    console.log(user)
  return (
    <>
    {loading ? <p>Loading... </p> : (<div><h3>{user?.username}</h3></div>)}
   </>
  )
}
