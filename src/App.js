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
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';

import PositiveImage1 from './images/positive/MIDRC-RICORD-1C-419639-000002-10161-0.png';
import PositiveImage2 from './images/positive/MIDRC-RICORD-1C-419639-000025-04760-0.png';
import PositiveImage3 from './images/positive/MIDRC-RICORD-1C-419639-000025-17477-0.png';
import PositiveImage4 from './images/positive/MIDRC-RICORD-1C-419639-000025-39552-0.png';
import PositiveImage5 from './images/positive/MIDRC-RICORD-1C-419639-000025-39552-1.png';
import PositiveImage6 from './images/positive/MIDRC-RICORD-1C-419639-000025-50888-0.png';
import PositiveImage7 from './images/positive/MIDRC-RICORD-1C-419639-000025-53641-0.png';
import PositiveImage8 from './images/positive/MIDRC-RICORD-1C-419639-000025-56001-0.png';
import PositiveImage9 from './images/positive/MIDRC-RICORD-1C-419639-000025-56207-0.png';
import SubmitImage from './submissionHelper';



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

  const [selectedImage, setImage] = useState();
  const [imageCount] = useState(30482);
  const [loading, setLoading] = useState(true);
  const [positiveValue, setPositive] = useState("");
  const [negativeValue, setNegative] = useState("Loading");
  const [predicitonValue, setPrediciton] = useState("Loading");
  const [postiveCount] = useState(2158);
  const [negativeCount] = useState(28324);

  const handleSubmitImage = (image) => {
    setLoading(true);
    setImage(image);
    SubmitImage(image)
      .then(value => handleSetAnalysisResponse(value))

  }

  const handleSetAnalysisResponse = (value) => {
    setLoading(false);
    setPositive(value.data.score[1]);
    setNegative(value.data.score[0]);
    setPrediciton(value.data.prediction);
  }

  return (
    <React.Fragment>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WGU Capstone
          </Typography>
          <Typography>
            Isaac M. Winters - Isaac@McPhee-Winters.com
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
                {selectedImage == null ?
                  <Typography variant="h2" gutterBottom component="div">
                    Select and Image below to explore the AI
                  </Typography> :
                  <Box
                    component="img"
                    sx={{
                      height: '55vh'
                    }}
                    alt="X-Ray study of a human torso"
                    src={selectedImage}
                  />}

              </Grid>
              <Grid item>
                <ImageList sx={{ height: '30vh', width: '50vw' }} cols={3} padding={2}>
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
            <Typography variant='h5'>
              Data used to create the model: <br />
            </Typography>
            <Typography>
              Images Analyzed: {imageCount} <br />
              Covid Positive Images: {postiveCount} <br />
              Covid Negative Images: {negativeCount} <br />
              Model Accuracy as Evaulated by .NET 6: 97.6% <br/>
            </Typography>
            <hr />
            <Typography>
              Details for the selected image: <br />
              Probability of Covid-19 diagnosis: {loading ? <CircularProgress /> : Math.round(positiveValue * 100)}% <br />
              Probability of a Covid-19 negative diagnosis: {loading ? <CircularProgress /> : Math.round(negativeValue * 100)}% <br />
            </Typography>
            <hr />
            <Typography sx={{ fontWeight: 'bold' }}>
              Study Catorgorized as: SARS-CoV-2: {loading ? <CircularProgress /> : predicitonValue.toUpperCase()}
            </Typography>
            <hr />

            <Typography>
              This application is intended only to demonstrate the power of
              residual neural networks on image based data sets. All 9 sample images are Covid-19 Positive.
              It should not be used as a diagnostic tool.
              For information about Covid 19 reach out your doctor or visit: 
              <Link href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"> https://www.cdc.gov/coronavirus/2019-ncov/index.html</Link>
            </Typography>
            
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>

  );
}

export default App;
