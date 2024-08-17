const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

// Simulación de base de datos (deberías usar una base de datos real)
const users = [];

// Registro de usuario
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    // Verifica si el usuario ya existe
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Hashea la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Guarda el usuario
    users.push({ email, password: hashedPassword });
    res.status(201).json({ message: 'Usuario registrado con éxito' });
});

// Inicio de sesión
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Busca el usuario
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Verifica la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Genera un token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
});

// Inicializar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
