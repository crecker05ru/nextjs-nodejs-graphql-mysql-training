import "reflect-metadata"
import express from "express"
import bodyParser from "body-parser"
import helmet from "helmet"
import {schema} from './Schema'
import { graphqlHTTP } from "express-graphql"
import cors from "cors"
import {createConnection} from "typeorm"
import { Users } from "./Entities/Users"
require('dotenv').config()

const main = async () => {

    await createConnection({
        type:"mysql",
        database:"cruddb",
        username:"root",
        password: "q1w2e3r4t5y6",
        logging: true,
        synchronize: true,
        entities: [Users],

    })

    const app = express()
    const PORT = process.env.PORT 
    app.use(cors())
    app.use(express.json())
    app.use(
        "/graphql",graphqlHTTP({
        schema,
        graphiql: true
    }))
    app.listen(PORT,()=>{
        console.log('server running on port ',PORT)
    } )
}

// let userabc = {
//     user: "ssss",
//     token: "wdfwrbewvfn",
//     isActive: true
// }
// console.log(userabc)
// console.log({userabc})
// console.log({...userabc})
main().catch((err) => {
    console.log(err)
})
