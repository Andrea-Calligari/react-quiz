import React from 'react';
import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import { Home, Quiz, AccountCircle } from '@mui/icons-material';
import { getAuth } from 'firebase/auth';

const drawerWidth = 200;

const Dashboard = ({ user}) => {
  // const auth = getAuth();
  // const user = auth.currentUser;
  return (
    <Box sx={{ display: 'flex', p:6 }}>
      <Drawer
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem className="cursor-pointer" button>
              <ListItemIcon>
                <Link to="/">
                  <Home />
                </Link>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem className="cursor-pointer" button>
              <ListItemIcon>
                <Quiz />
              </ListItemIcon>
              <ListItemText primary="Quiz" />
            </ListItem>
            <ListItem className="cursor-pointer" button>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Contenuto principale */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '64px' }}>
        <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Dashboard di {user.displayName}
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar /> {/* Questo aggiunge uno spazio equivalente all'altezza dell'AppBar */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6">Statistiche Quiz</Typography>
              {/* Inserisci qui i contenuti delle statistiche */}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6">Risultati Recenti</Typography>
              {/* Inserisci qui i contenuti dei risultati recenti */}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6">Prossimi Quiz</Typography>
              {/* Inserisci qui i contenuti dei prossimi quiz */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;