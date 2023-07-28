const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const getDatabase = require('./config/database');
const cors = require('cors');
const app = express()
app.use(cors());
// add middleware & static files
app.use(express.json()) //Body parser
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

let db = getDatabase();
const PORT = process.env.PORT || 5000        // Define the PORT

//listen to requests
app.listen(PORT, ()=>{
   console.log(`Server listening on port ${PORT}`)
})
