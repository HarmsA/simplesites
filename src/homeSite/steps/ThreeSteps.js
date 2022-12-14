import React from 'react';


import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import classes from './threeSteps.module.css'
const photo1 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=475&q=80"

const ThreeSteps = () => {
    return (
<section>

  <Container maxWidth="lg" minWidth="lg" id='ThreeSteps'>
    <Box py={8} textAlign="center" className={classes.threestepbackground}>
      <Typography variant="overline" component="span">The New Internet</Typography>
      <Typography variant="h4" component="h3">We specialize in getting your small businesses website online quickly. Not a business, no problem we work with individuals as well.</Typography>
    </Box>
    <Box pt={8} pb={10} className={classes.stepContainer}>
      <Grid container spacing={6} mb-5 className={`${classes.stepContainer} ${classes.switchorder}`}>
        <Grid item xs={12} md={6}>
          <Box display="flex" height="100%">
            <Box my="auto">
              <Typography variant="h2" component="h3" align='right' >01</Typography>
              <Typography variant="h4" component="h2" gutterBottom={true} align='right'>Contact Us</Typography>
              <Typography variant="body1" color="textSecondary" paragraph={true} align='right'>Once you call or email us we will go over how Simple Sites is the most user friendly website builder out there. We will do all the heavy lifting.</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Card> */}
            {/* <CardActionArea href="#"> */}
              {/* <div className={classes.media}  /> */}
              <img className={classes.media} src={photo1} alt="Contact Us" />
            {/* </CardActionArea> */}
          {/* </Card> */}
        </Grid>
      </Grid>
      <Grid container spacing={6} className={`${classes.stepContainer} ${classes.centerdiv}`}>
        <Grid item xs={12} md={6} >
          {/* <Card>
            <CardActionArea href="#">
              <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
            </CardActionArea>
          </Card> */}
            <img className={classes.media} src={photo1} alt="Contact Us" />

        </Grid>
        <Grid item xs={12} md={6} >
          <Box display="flex" height="100%">
            <Box my="auto">
              <Typography variant="h2" component="h3" align='left'>02</Typography>
              <Typography variant="h4" component="h2" gutterBottom={true} align='left'>Pick out your template</Typography>
              <Typography variant="body1" color="textSecondary" paragraph={true} align='left'>Choose from our pre-built templates or go allacart and pick the sections that works best for your needs.</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={6} className={`${classes.stepContainer} ${classes.switchorder}`}>
        <Grid item xs={12} md={6}>
          <Box display="flex" height="100%">
            <Box my="auto">
              <Typography variant="h2" component="h3" align='right'>03</Typography>
              <Typography variant="h4" component="h2" gutterBottom={true} align='right'>Fill your site with your content</Typography>
              <Typography variant="body1" color="textSecondary" paragraph={true} align='right'>Adding content to the site can be the hardest part, but we have you taken care of. We have an exaustive list of images to choose from and know how to help guide you through the process of creating an amazing web site.</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Card>
            <CardActionArea href="#">
              <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
            </CardActionArea>
          </Card> */}
          <img className={classes.media} src={photo1} alt="Contact Us" />
        </Grid>
      </Grid>
    </Box>
  </Container>
</section>
    );
};

export default ThreeSteps;