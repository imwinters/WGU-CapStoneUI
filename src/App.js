import './App.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WGU Capstone
          </Typography>
          <Typography>
            Isaac M. Winters
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item>
          <Paper sx={{
            height: '80vh',
            width: '65vw',
            margin: 1,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            padding: 1
          }}>
            <Box
              component="img"
              sx={{
                height: '40vh'
              }}
              alt="X-Ray study of a human torso"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
          </Paper>
        </Grid>
        <Grid item>
          <Paper variant="outlined" sx={{ height: '80vh', width: '20vw', margin: 1, padding: 1 }}>
            Hello
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>

  );
}

export default App;
