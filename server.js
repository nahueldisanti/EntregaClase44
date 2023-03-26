import express from 'express'
import GraphQLController from './controller/graphqlController.js'

const app = express ();
app.use(express.static("public"));
app.use('/graphql', new GraphQLController());

const server  = app.listen(process.env.PORT, () => {
    console.log(`Servidor express escuchando en http://localhost:${PORT} - PID ${process.pid}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
