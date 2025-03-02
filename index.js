const app = require('./app')
const config = require('./config/config')
const connectDB = require('./config/database')

const PORT = config.port
connectDB() //database connection


//server
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:"+PORT);
})