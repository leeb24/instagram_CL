//Morgan -- logger
require("dotenv").config();
import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema"

const PORT = process.env.PORT || 4000

const server = new GraphQLServer({
   schema
});

//MIDDLEWARE
server.express.use(logger("dev"));

//SERVER
server.start({port:PORT},()=>console.log(`✅ Server running on http://localhost:${PORT}`)) 