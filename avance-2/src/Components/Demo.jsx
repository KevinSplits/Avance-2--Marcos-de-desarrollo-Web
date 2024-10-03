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
    segment: 'integration2',
    title: 'Proveedores',
    icon: <LayersIcon />,
  },
  {
    segment: 'integration3',
    title: 'Cuentas de Usuario',
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

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        title: 'Phanthom',
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
      <Typography variant="h4">Dashboard</Typography>
      <Typography>Welcome to the Dashboard section.</Typography>
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

function ReportsContent() {
  return (
    <Box>
      <Typography variant="h4">Reports</Typography>
      <Typography>Welcome to the Reports section.</Typography>
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
    { name: "Proveedor 1", performance: "80%" },
    { name: "Proveedor 2", performance: "65%" },
  ];

  return (
    <Box>
      <Typography variant="h4">Análisis de Proveedores</Typography>
      <List>
        {suppliers.map((supplier, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={supplier.name}
              secondary={`Rendimiento: ${supplier.performance}`}
            />
          </ListItem>
        ))}
      </List>
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
    case '/integration2':
      return <UserAccountsContent />; // Cuentas de Usuario
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
