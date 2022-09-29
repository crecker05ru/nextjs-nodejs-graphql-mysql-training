
import { CREATE_USER } from '../Graphql/Mutations'
import {useMutation} from '@apollo/client'
import { useState } from 'react'

export default function RegisterForm () {
    const [name,setName] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [createUser] = useMutation(CREATE_USER)

    return(
        <>
        <div>
        <input type="text" placeholder="name" onChange={(event) => {setName(event.target.value)}}/>
        <input type="text" placeholder="username" onChange={(event) => {setUserName(event.target.value)}}/>
        <input type="password" placeholder="password" onChange={(event) => {setPassword(event.target.value)}}/>
        <button onClick={() => {createUser({variables: { name: name, username: username, password: password}})}}>Register</button>
        </div>
        </>
    )
}