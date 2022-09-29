"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
// const main = async () => {
//     await createConnection({
//         type:"mysql",
//         database:"cruddb",
//         username:"root",
//         password: "q1w2e3r4t5y6",
//         logging: true,
//         synchronize: false,
//         entities: [Users],
//     })
//     const app = express()
//     app.use(cors())
//     app.use(express.json())
//     app.use(
//         "/graphql",graphqlHTTP({
//         schema,
//         graphiql: true
//     }))
//     app.listen(3001,()=>{
//         console.log('server running on port 3001')
//     } )
// }
// main().catch((err) => {
//     console.log(err)
// })
//Connects to the Database -> then starts the express
typeorm_1.createConnection()
    .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    // Create a new express application instance
    const app = express_1.default();
    // Call midlewares
    app.use(cors_1.default());
    app.use(helmet_1.default());
    app.use(body_parser_1.default.json());
    //Set all routes from routes folder
    app.use("/", routes_1.default);
    app.listen(3001, () => {
        console.log("Server started on port 3001!");
    });
}))
    .catch(error => console.log(error));
//# sourceMappingURL=index.js.map