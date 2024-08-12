const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
const cors = require('cors');
const turnosRoutes = require('./routes/turnosRoutes');


app.use(cors());
app.use(express.json()); 

// Importar rutas
const usuarioRoutes = require('./routes/usuarios');
app.use('/api/usuarios', usuarioRoutes);
app.use('/api', turnosRoutes);

// Inicializar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
