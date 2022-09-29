import React, { useState } from 'react'
import { CREATE_USER } from '../Graphql/Mutations'
import {useMutation} from '@apollo/client'

function CreateUser(){
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [createUser] = useMutation(CREATE_USER)
    const resetValues = () => {
        setName('')
        setUserName('')
        setPassword('')
        console.log(name,userName,password)
    }

    return (
        <div className="createUser" >
        <input type="text" placeholder="name" onChange={(event) => {setName(event.target.value)}}/>
        <input type="text" placeholder="username" onChange={(event) => {setUserName(event.target.value)}}/>
        <input type="password" placeholder="password" onChange={(event) => {setPassword(event.target.value)}}/>
        <button onClick={() => {createUser({variables: { name: name, username: userName, password: password}})}}>Create User</button>
        <button onClick={resetValues}>reset</button>
      </div>
    )
}

export default CreateUser