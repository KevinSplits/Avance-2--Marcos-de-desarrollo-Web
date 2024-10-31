import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import AppTheme from './AppTheme';
import ColorModeSelect from './ColorModeSelect';

// Estilo personalizado para la tarjeta
const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  maxWidth: '450px',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  fontFamily: '"Roboto", sans-serif',
  borderRadius: '12px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

// Estilo personalizado para el contenedor
const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[100],
  fontFamily: '"Roboto", sans-serif',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function IniciarSesion(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        <Card variant="outlined">
          <SitemarkIcon />
          <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', fontFamily: '"Roboto", sans-serif' }}>
            Iniciar Sesión
          </Typography>
          <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}>
            <FormControl>
              <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="tu@correo.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
                sx={{
                  fontFamily: '"Roboto", sans-serif',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'primary.main' },
                    '&:hover fieldset': { borderColor: 'primary.light' },
                    '&.Mui-focused fieldset': { borderColor: 'secondary.main' },
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <Link component="button" type="button" onClick={handleClickOpen} variant="body2" sx={{
                  alignSelf: 'baseline',
                  color: 'secondary.main',
                  textDecoration: 'underline',
                  ':hover': { color: 'secondary.dark' },
                  fontFamily: '"Roboto", sans-serif',
                }}>
                  Forgot your password?
                </Link>
              </Box>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
                sx={{ fontFamily: '"Roboto", sans-serif' }}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
              sx={{ fontFamily: '"Roboto", sans-serif' }}
            />
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: 'primary.main',
                ':hover': { backgroundColor: 'primary.dark' },
                fontWeight: 'bold',
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Iniciar Sesión
            </Button>
            <Typography sx={{ textAlign: 'center', fontFamily: '"Roboto", sans-serif' }}>
              ¿No tienes una cuenta?{' '}
              <span>
                <Link href="/material-ui/getting-started/templates/sign-in/" variant="body2" sx={{ color: 'primary.main', fontFamily: '"Roboto", sans-serif' }}>
                  Regístrate
                </Link>
              </span>
            </Typography>
          </Box>
          <Divider>o</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button fullWidth variant="outlined" onClick={() => alert('Iniciar sesión con Google')} startIcon={<GoogleIcon />} sx={{ fontFamily: '"Roboto", sans-serif' }}>
              Iniciar sesión con Google
            </Button>
            <Button fullWidth variant="outlined" onClick={() => alert('Iniciar sesión con Facebook')} startIcon={<FacebookIcon />} sx={{ fontFamily: '"Roboto", sans-serif' }}>
              Iniciar sesión con Facebook
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}
