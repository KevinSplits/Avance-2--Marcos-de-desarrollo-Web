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

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'productos',
    title: 'Productos',
    icon: <SportsEsportsIcon />,
  },
  {
    segment: 'proveedores',
    title: 'Proveedores',
    icon: <PeopleAltIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
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
      <TablaProveedor/>
    </Box>
  );
}

// function ProveedoresContent() {
//   return (
//     <Box 
//       sx={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         alignItems: 'center', 
//         justifyContent: 'center',
//         minHeight: '100vh', // Esto asegura que la tabla esté centrada verticalmente
//         textAlign: 'center'
//       }}
//     >
//       <Typography variant="h4" sx={{ mb: 3 }}>
//         Proveedores
//       </Typography>
      
//       <TablaProveedor /> {/* Aquí está la tabla centrada */}
//     </Box>
//   );
// }

function OrdersContent() {
  return (
    <Box>
      <Typography variant="h4">Orders</Typography>
      <Typography>Here is the Orders section content.</Typography>
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
  return (
    <Box>
      <Typography variant="h4">Sales Reports</Typography>
      <Typography>Sales report details go here.</Typography>
    </Box>
  );
}

function TrafficContent() {
  return (
    <Box>
      <Typography variant="h4">Traffic Reports</Typography>
      <Typography>Traffic report details go here.</Typography>
    </Box>
  );
}

function DemoPageContent({ pathname }) {
  switch (pathname) {
    case '/dashboard':
      return <DashboardContent />;
    case '/proveedores':
      return <ProveedoresContent />;
    case '/orders':
      return <OrdersContent />;
    case '/reports/sales':
      return <SalesContent />;
    case '/reports/traffic':
      return <TrafficContent />;
    case '/reports':
      return <ReportsContent />;
    default:
      return (
        <Typography variant="h6">
          Page not found: {pathname}
        </Typography>
      );
  }
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};



export default DashboardLayoutBasic;
