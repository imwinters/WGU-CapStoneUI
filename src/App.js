import './App.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';

import PositiveImage1 from './images/positive/MIDRC-RICORD-1C-419639-000002-10161-0.png';
import PositiveImage2 from './images/positive/MIDRC-RICORD-1C-419639-000025-04760-0.png';
import PositiveImage3 from './images/positive/MIDRC-RICORD-1C-419639-000025-17477-0.png';
import PositiveImage4 from './images/positive/MIDRC-RICORD-1C-419639-000025-39552-0.png';
import PositiveImage5 from './images/positive/MIDRC-RICORD-1C-419639-000025-39552-1.png';
import PositiveImage6 from './images/positive/MIDRC-RICORD-1C-419639-000025-50888-0.png';
import PositiveImage7 from './images/positive/MIDRC-RICORD-1C-419639-000025-53641-0.png';
import PositiveImage8 from './images/positive/MIDRC-RICORD-1C-419639-000025-56001-0.png';
import PositiveImage9 from './images/positive/MIDRC-RICORD-1C-419639-000025-56207-0.png';




const XRayImages = [
  {
    img: PositiveImage1,
    title: 'Positive1',
  },
  {
    img: PositiveImage2,
    title: 'Positive2',
  },
  {
    img: PositiveImage3,
    title: 'Positive3',
  },
  {
    img: PositiveImage4,
    title: 'Positive4',
  },
  {
    img: PositiveImage5,
    title: 'Positive5',
  },
  {
    img: PositiveImage6,
    title: 'Positive6',
  },
  {
    img: PositiveImage7,
    title: 'Positive7',
  },
  {
    img: PositiveImage8,
    title: 'Positive8',
  },
  {
    img: PositiveImage9,
    title: 'Positive9',
  }
];


function App() {

  const [selectedImage, setImage] = useState(PositiveImage1);
  const [analysisResponse, setResponse] = useState(null);

  const handleSubmitImage = (image) => 
  {
    setImage(image);
    axios.post("", image).then(res => setResponse(res.data));
  }

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
          <Paper variant="outlined" sx={{
            width: '75vw',
            height: '88vh',
            margin: 1,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            padding: 1
          }}>
            <Grid container sx={{ justifyContent: "center", }}>
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    height: '60vh'
                  }}
                  alt="X-Ray study of a human torso"
                  src={selectedImage}
                />
              </Grid>
              <Grid item>
                <ImageList sx={{ height: '20vh', width: '50vw' }} cols={3}>
                  {XRayImages.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        onClick={() => handleSubmitImage(item.img)}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper variant="outlined" sx={{ height: '88vh', width: '20vw', margin: 1, padding: 1 }}>
            <Typography>
              Data used up until now to creat the model:
              Images Analyzed: 100000 <br />
              Alannahs Impressed: 0 <br />
              Model Accuracy as Evaulated by .NET 6: 97.6%

            </Typography>
            <hr />
            <Typography>
              Details for Selected Image: <br/>
              Probability of Covid-19 Diagnosis: 100% <br/>
              Probability of a Covid-19 Negative Diagnosis: 100%
            </Typography>


          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>

  );
}

export default App;
