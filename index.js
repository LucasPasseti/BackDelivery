import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"; 
import usersRoute from "./routes/users.js"; 
import servicesRoute from "./routes/services.js"; 
import motoboysRoute from "./routes/motoboys.js"; 
const app = express();
dotenv.config();

// conexao com o mongo
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO); //integrando o .env para conexao do mongo
        console.log("Conectei no MongoDB");
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB desconectado");
})
mongoose.connection.on("connected", () => {
    console.log("MongoDB conectado");
})

//middlewares

app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/services", servicesRoute);
app.use("/motoboys", motoboysRoute);

// requisicao 
app.listen(8800, () => {
    connect()
    console.log('Connectado no BackEnd http://localhost:8800/');
})