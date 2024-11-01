import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TablaProveedor from './Tables/TablaProveedor';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TablaProductos from './Tables/TablaProductos';
import PersonIcon from '@mui/icons-material/Person';
import TablaClientes from './Tables/TablaClientes';
import TablaVentas from './Tables/TablaVentas';
import ResumenVentas from './ResumenVentas';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import StarIcon from '@mui/icons-material/Star';
import ProductosMasVendidos from './ProductosMasVendidos'
import StorefrontIcon from '@mui/icons-material/Storefront';
import SellIcon from '@mui/icons-material/Sell';
import 'leaflet/dist/leaflet.css';
import Dashboard from './Dashboard';
import Perfil from './Perfil';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import CentroDeTickets from './CentroDeTickets';
import Analisis from './Analisis';

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
  return (
    <Box>
      <CentroDeTickets />
    </Box>
  );
}





function TrafficContent() {
  return (
    <Box>
      <PreguntasFrecuentes />
    </Box>
  );
}




function SupplierAnalysisContent() {
  return (
    <Box>
      <Analisis />
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
