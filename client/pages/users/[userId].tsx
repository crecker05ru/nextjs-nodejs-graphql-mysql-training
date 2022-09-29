import { useRouter } from 'next/router'

export default function  User({user}) {
    // const router = useRouter()
    console.log('user',user)
    return <>
    
    <h1>id: {user.id}</h1>
    <h2>name: {user.name} </h2>
    <h2>username: {user.username} </h2>
    <h3>address: {user.address.city} , {user.address.street}, {user.address.suite} </h3>
    <h4>email: {user.email}</h4>
    </>
}

// User.getInitialProps = async ({query}) => {
//     const response =  await fetch(`https://jsonplaceholder.typicode.com/users/${query.userId}`)
//     const user = await response.json()
//     console.log('ctx.query',query)
//     return { user }
// }

export async function getServerSideProps ({query}) {
    const response =  await fetch(`${process.env.API_URL}/users/${query.userId}`)
    const user = await response.json()
    return {
        props: {user}
    }
}
