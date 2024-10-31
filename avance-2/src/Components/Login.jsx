import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, TextField, Typography, Link } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material'; // Iconos de Material UI
import './Login.css'; // Archivo CSS para el estilo

function Login() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Creación del tema claro y oscuro
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  // Función para cambiar entre modo claro y oscuro
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`login-container ${isDarkMode ? 'dark' : 'light'}`}>
        <Button 
          variant="outlined" 
          onClick={toggleTheme}
          style={{ position: 'absolute', top: 20, right: 20 }}
        >
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}
        </Button>
        <Typography variant="h4" gutterBottom>
          Iniciar Sesión
        </Typography>
        <form>
          <TextField
            label="Correo Electrónico"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Ingresar
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: '16px' }}>
          No tiene cuenta?{' '}
          <Link href="/register" variant="body2">
            Regístrate
          </Link>
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default Login;
