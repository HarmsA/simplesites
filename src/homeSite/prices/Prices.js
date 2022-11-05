import React, {useState} from 'react';
import classes from './prices.module.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

import Monthly from './paymentSchedule/Monthly.js';
import Yearly from './paymentSchedule/Yearly.js';


const Prices = () => {
  const [checkbox, setCheckbox] = useState(false);

  const handleChange = () => {
    setCheckbox(!checkbox);
  }

    return (
        <section className={classes.section}>
  <Container maxWidth="lg">
    <Box py={8} textAlign="center">
      <Box mb={3}>
        <Container maxWidth="md">
          <Typography variant="overline" color="textSecondary">WHATS INCLUDED IN YOUR SUBSCRIPTION</Typography>
          <Typography variant="h3" component="h2" gutterBottom={true}>
            <Typography variant="h3" component="span" color="primary">Each plan creates an amazing website. </Typography>
            <Typography variant="h3" component="span">Each level increase your options.</Typography>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" paragraph={true}>We monitor your website and verify its status every day.</Typography>

          <div>
            <Typography variant="subtitle1" component="span">Monthly</Typography>
            &nbsp; <Switch name="checkbox" color="primary" checked={checkbox} onChange={handleChange} /> &nbsp;
            <Typography variant="subtitle1" component="span">Annual</Typography>
          </div>
        </Container>
      </Box>
      {!checkbox && <Monthly/>}
      {checkbox && <Yearly/>}

    </Box>
  </Container>
</section>
    );
};

export default Prices;