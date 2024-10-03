import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TablaProveedor from './TablaProveedor';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { List, ListItem, ListItemText } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, CardContent, Grid, Chip } from '@mui/material';
import TablaProductos from './TablaProductos';
import PersonIcon from '@mui/icons-material/Person';
import TablaClientes from './TablaClientes';
import TablaVentas from './TablaVentas';
import ResumenVentas from './ResumenVentas';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import StarIcon from '@mui/icons-material/Star';
import ProductosMasVendidos from './ProductosMasVendidos'
import StorefrontIcon from '@mui/icons-material/Storefront';
import SellIcon from '@mui/icons-material/Sell';
import { LinearProgress, Divider } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Paper } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import Dashboard from './Dashboard';
import Perfil from './Perfil';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Secciones Principales',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'paneldeventas',
    title: 'Panel de Ventas',
    icon: <StorefrontIcon />,
    children: [
      {
        segment: 'resumenventas',
        title: 'Resumen de Ventas',
        icon: <EventAvailableIcon />,
      },
      {
        segment: 'productosmasvendidos',
        title: 'Productos más Vendidos',
        icon: <StarIcon />,
      },
    ],
  },
  {
    segment: 'gestiondeventas',
    title: 'Gestión de Ventas',
    icon: <SellIcon />,
    children: [
      {
        segment: 'proveedores',
        title: 'Proveedores',
        icon: <PersonIcon />,
      },
      {
        segment: 'productos',
        title: 'Productos',
        icon: <SportsEsportsIcon />,
      },
      {
        segment: 'clientes',
        title: 'Clientes',
        icon: <PeopleAltIcon />,
      },
      {
        segment: 'ventas',
        title: 'Ventas',
        icon: < ShoppingCartIcon />,
      },
    ],
  },

  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Secciones Adicionales',
  },
  {
    segment: 'reports',
    title: 'Soporte el Cliente',
    icon: <SupportAgentIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Centro de tickets',
        icon: <ConfirmationNumberIcon />,
      },
      {
        segment: 'traffic',
        title: 'Preguntas Frecuentes',
        icon: <QuestionAnswerIcon />,
      },
    ],
  },
  {
    segment: 'integration1',
    title: 'Análisis',
    icon: <AnalyticsIcon />,
  },
  {
    segment: 'OpcionesUsuario',
    title: 'Opciones de Usuario',
    icon: <ManageAccountsIcon />,
  },
];



const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// function DemoPageContent({ pathname }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <Typography>Dashboard content for {pathname}</Typography>
//     </Box>
//   );
// }



DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    // preview-start
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      branding={{
        title: 'Phanthom Admin',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutBasic.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

function DashboardContent() {
  return (
    <Box>
      <Dashboard />
    </Box>
  );
}

function ProveedoresContent() {
  return (
    <Box>
      <TablaProveedor />
    </Box>
  );
}

function ProductosContent() {
  return (
    <Box>
      <TablaProductos />
    </Box>
  );
}

function ClientesContent() {
  return (
    <Box>
      <TablaClientes />
    </Box>
  );
}

function VentasContent() {
  return (
    <Box>
      <TablaVentas />
    </Box>
  );
}

function ResumenVentasContent() {
  return (
    <Box>
      <ResumenVentas />
    </Box>
  );
}

function ProductosMasVendidosContent() {
  return (
    <Box>
      <ProductosMasVendidos />
    </Box>
  );
}

function PerfilContent() {
  return (
    <Box>
      <Perfil />
    </Box>
  );
}

function SalesContent() {
  const [tickets, setTickets] = React.useState([
    { id: 1, subject: "Problema con pedido", status: "Abierto", description: "El pedido llegó dañado." },
    { id: 2, subject: "No puedo acceder a mi cuenta", status: "Cerrado", description: "Problema con la recuperación de contraseña." },
    { id: 3, subject: "Pago duplicado", status: "Abierto", description: "Se cobró dos veces por el mismo pedido." },
    { id: 4, subject: "Problema con entrega", status: "Abierto", description: "El pedido no ha llegado a la dirección indicada, a pesar de estar marcado como entregado." },
    { id: 5, subject: "Producto defectuoso", status: "En Proceso", description: "El producto recibido presenta fallas en su funcionamiento y no enciende correctamente." },
    { id: 6, subject: "Reembolso solicitado", status: "Cerrado", description: "El cliente ha solicitado un reembolso debido a un error en la facturación." }
  ]);

  const getStatusChipColor = (status) => {
    return status === "Abierto" ? "success" : "default";
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
        Centro de Tickets
      </Typography>
      <Grid container spacing={3}>
        {tickets.map((ticket) => (
          <Grid item xs={12} sm={6} md={4} key={ticket.id}>
            <Card sx={{ m: 1 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Ticket #{ticket.id} - {ticket.subject}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {ticket.description}
                </Typography>
                <Chip label={ticket.status} color={getStatusChipColor(ticket.status)} sx={{ mb: 2, mx: 1, mt: 2 }} />
                <Button variant="contained" color="primary">
                  Ver detalles
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}





function TrafficContent() {
  const faqs = [
    { question: "¿Cómo rastrear mi pedido?", answer: "Puedes rastrear tu pedido desde la sección de pedidos." },
    { question: "¿Qué hago si recibí un producto defectuoso?", answer: "Contacta con soporte y abre un ticket." },
    { question: "¿Cómo puedo restablecer mi contraseña?", answer: "Para restablecer tu contraseña, ve a la sección de 'Mi cuenta' y selecciona 'Olvidé mi contraseña'. Recibirás un enlace en tu correo electrónico para restablecerla." },
    { question: "¿Cuáles son los métodos de pago aceptados?", answer: "Aceptamos tarjetas de crédito, débito y transferencias bancarias." },
    { question: "¿Cómo puedo seguir el estado de mi pedido?", answer: "Para seguir el estado de tu pedido, inicia sesión en tu cuenta y ve a la sección 'Mis pedidos'." },
    { question: "¿Cómo puedo contactar al soporte?", answer: "Puedes contactar al soporte enviando un ticket a través del Centro de Soporte, o llamando a nuestro número de atención al cliente." }
  ];

  return (
    <Box sx={{ mx: 'auto', maxWidth: 800, p: 2 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
        Preguntas Frecuentes
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="textSecondary">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}




function SupplierAnalysisContent() {
  const suppliers = [
    { name: "Game Suppliers Inc.", performance: 80, delivery: "A tiempo", cost: "Moderado" },
    { name: "VideoGames Unlimited", performance: 65, delivery: "Retraso leve", cost: "Alto" },
    { name: "Gaming World", performance: 90, delivery: "A tiempo", cost: "Bajo" },
  ];

  const barData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Ventas por Mes',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55]
      }
    ]
  };

  const cities = [
    { name: "San Miguel", lat: -12.076707905159928, lng: -77.08220316931151 },
    { name: "Jockey Plaza", lat: -12.086138940532926, lng: -76.97773028836062 },
    { name: "Tienda Puruchuco", lat: -12.038261121591061, lng: -76.931977 },
    { name: "Centro Cívico", lat: -12.056296789316637, lng: -77.03736445767214 },
    { name: "Santa Anita", lat: -12.056555742676238, lng: -76.97079091534425 },
    { name: "Mall del Sur", lat: -12.154595885398011, lng: -76.98209708465576 },
    { name: "Plaza Norte", lat: -12.00666272941323, lng: -77.06025737301637 },
    { name: "Tienda Salaverry", lat: -12.08958170976282, lng: -77.05257378922079 },
    { name: "Tienda Larcomar", lat: -12.131573898590519, lng: -77.03048408465575 },
    { name: "La Rambla San Borja", lat: -12.088339781264985, lng: -77.00486208465574 },
    { name: "Tienda Mega Plaza", lat: -11.994054667086134, lng: -77.06179 },
    { name: "Trujillo", lat: -8.10195375197262, lng: -79.04804391534425 },
    { name: "Piura", lat: -5.1819285457517195, lng: -80.62224545767214 },
    { name: "Cuzco", lat: -13.52383347080274, lng: -71.95047836441803 },
    { name: "Chimbote", lat: -9.10210215663841, lng: -78.55790054232787 },
    { name: "Chiclayo", lat: -6.777715807444322, lng: -79.83260716931152 },
    { name: "Arequipa", lat: -16.389912750397254, lng: -71.54656345767214 },
    { name: "Arequipa", lat: -16.417291542969267, lng: -71.51377600000002 },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', mt: 2 }}>Análisis de Proveedores y Métricas Clave</Typography>

      {/* Grid de tarjetas */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card sx={{ m: 2 }}>
            <CardContent>
              <Typography variant="h6">Visitantes</Typography>
              <Typography variant="h4">2,540</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ m: 2 }}>
            <CardContent>
              <Typography variant="h6">Actividad</Typography>
              <Typography variant="h4">1,200</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ m: 2 }}>
            <CardContent>
              <Typography variant="h6">Tiempo Real</Typography>
              <Typography variant="h4">50</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ m: 2 }}>
            <CardContent>
              <Typography variant="h6">Tasa de Rebote</Typography>
              <Typography variant="h4">35%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Gráfico de barras */}
      <Typography variant="h5" gutterBottom sx={{ m: 2 }}>
        Actividad por Mes
      </Typography>

      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper
          sx={{
            width: '80%',
            p: 2,
            borderRadius: '8px', // Bordes redondeados
            boxShadow: 3 // Sombra opcional
          }}
        >
          <Box sx={{ height: '400px', width: '100%' }}> {/* Ajustar altura */}
            <Bar
              data={barData}
              options={{
                responsive: true, // Hace el gráfico adaptable
                maintainAspectRatio: false, // Permite ajustar la altura sin distorsión
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      callback: function (value) {
                        return value + ' unidades'; // Añadir texto a las etiquetas
                      },
                    },
                  },
                },
              }}
            />
          </Box>
        </Paper>
      </Box>


      {/* Mapa */}
      <Box mt={4} sx={{ m: 3 }}> {/* Agregar margen en todos los lados */}
        <Typography variant="h5" gutterBottom sx={{ m: 2 }}>
          Tiendas Phantom en Perú
        </Typography>

        <MapContainer
          center={[-9.19, -75.0152]}
          zoom={5}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {cities.map((city, index) => (
            <Marker key={index} position={[city.lat, city.lng]}>
              <Popup>{city.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>

      {/* Lista de Proveedores */}
      <Box mt={4}>
        <Typography variant="h5" gutterBottom sx={{ m: 2 }}>Análisis de Proveedores</Typography>
        <List>
          {suppliers.map((supplier, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={supplier.name}
                  secondary={`Entrega: ${supplier.delivery}, Costo: ${supplier.cost}`}
                />
                <Box sx={{ width: '30%', marginLeft: '20px' }}>
                  <Typography variant="body2">Rendimiento: {supplier.performance}%</Typography>
                  <LinearProgress variant="determinate" value={supplier.performance} />
                </Box>
              </ListItem>
              {index < suppliers.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
}


function DemoPageContent({ pathname }) {
  switch (pathname) {
    case '/dashboard':
      return <DashboardContent />;
    case '/paneldeventas/resumenventas':
      return <ResumenVentasContent />;
    case '/paneldeventas/productosmasvendidos':
      return <ProductosMasVendidosContent />;
    case '/gestiondeventas/proveedores':
      return <ProveedoresContent />;
    case '/gestiondeventas/productos':
      return <ProductosContent />;
    case '/gestiondeventas/clientes':
      return <ClientesContent />;
    case '/gestiondeventas/ventas':
      return <VentasContent />;
    case '/reports/sales':
      return <SalesContent />; // Centro de Tickets
    case '/reports/traffic':
      return <TrafficContent />; // Preguntas Frecuentes
    case '/integration1':
      return <SupplierAnalysisContent />; // Análisis de Proveedores
    case '/OpcionesUsuario':
      return <PerfilContent />; // Cuentas de Usuario
    case '/reports':
      return <ReportsContent />;
    default:
      return <Typography variant="h6">Page not found: {pathname}</Typography>;
  }
}


DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};



export default DashboardLayoutBasic;
