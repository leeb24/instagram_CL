//Morgan -- logger
//Yarn to manage version stability

//IMPORT PROCESS ENV
import dotenv from "dotenv";
import path from "path";
dotenv.config({path:path.resolve(__dirname, '.env')})

import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import{sendSecretEmail} from "./utils"
import { buildASTSchema } from "graphql";

const PORT = process.env.PORT || 4000

const server = new GraphQLServer({
   schema
});

//MIDDLEWARE
server.express.use(logger("dev"));

//SERVER
server.start({port:PORT},()=>console.log(`✅ Server running on http://localhost:${PORT}`)) 