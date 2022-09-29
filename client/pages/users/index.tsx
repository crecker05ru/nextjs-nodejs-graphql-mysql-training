import router from "next/router"
import Router from "next/router"
import { useEffect, useState } from "react"
import LogForm from "../../components/LogForm"
import Link from 'next/link'
import {user} from '../../interfaces/user'
import RegisterForm from "../../components/RegisterForm"
import ListOfUsers from "../../components/ListOfUsers"
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

interface UserPageProps {
    users: user[]
}

export default function Users ( {users} : UserPageProps) {
    const client = new ApolloClient({
        uri:"http://localhost:3001/graphql",
        cache: new InMemoryCache()
    })
    const clickHandler = () => {
        Router.push('/')
    }
    // const [users,setUsers] = useState([])

//      async  function loadUsers () {
//         const response =  await fetch("https://jsonplaceholder.typicode.com/users")
//         const json = await response.json()
//         setUsers(json)
//  }
    // useEffect( () => {
    //     async function load() {
    //         const response =  await fetch("https://jsonplaceholder.typicode.com/users")
    //         const json = await response.json()
    //         setUsers(json)
    //     }
    //     load()
    // },[])
    function loadUsers () {
        
    }
    return (
        <>
        <h1>Users Page</h1>
        <ApolloProvider client={client} >
        <RegisterForm/>
        <LogForm />
        <ListOfUsers/>
        <h4>Fetched users</h4>
        </ApolloProvider>
        <button onClick={clickHandler}>To Main Page</button>
        <button onClick={() => Router.push('users/111')}>To User 111 </button>
        <button onClick={loadUsers}>load users</button>
            {users.map(user => {
               return  <li key={user.id}><Link href={`/users/[userId]`} as={`/users/${user.id}`}><a>{user.username}</a></Link></li>
            })}
        </>
    )
}

// Users.getServerSideProps = async () => {
//     const response =  await fetch("https://jsonplaceholder.typicode.com/users")
//     const users = await response.json()
//     return { users }
// }
{

}
export async function getServerSideProps () {
    const response =  await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    return {
        props: {users}
    }
}
