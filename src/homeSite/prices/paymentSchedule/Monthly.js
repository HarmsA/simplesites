import React from 'react';
import classes from '../prices.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';

const Monthly = () => {
    return (
        <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardHeader title="Starter" className={classes.cardHeader}></CardHeader>
            <CardContent>
              <Box px={1}>
                <Typography variant="h3" component="h2" gutterBottom={true}>
                  $12
                  <Typography variant="h6" color="textSecondary" component="span">/ mo</Typography>
                </Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p">50 Emails/mo</Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p">3 Stock Images</Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p">Search Engine Optimization</Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>2 Yearly Minor Site Updates</Typography>
              </Box>
              <Button variant="outlined" color="primary" className={classes.primaryAction}>Select plan</Button>
              <Box mt={2}>
                <Link href="#" color="primary">Learn more</Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardHeader title="Advanced" className={classes.cardHeader}></CardHeader>
            <CardContent>
              <Box px={1}>
                <Typography variant="h3" component="h2" gutterBottom={true}>
                  $18
                  <Typography variant="h6" color="textSecondary" component="span">/ mo</Typography>
                </Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p">100 Emails/mo</Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p">6 Stock Images</Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p">Domains Included*</Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>5 Yearly Minor Site Updates</Typography>
              </Box>
              <Button variant="contained" color="primary">Select plan</Button>
              <Box mt={2}>
                <Link href="#" color="primary">Learn more</Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardHeader title="Pro" className={classes.cardHeader}></CardHeader>
            <CardContent>
              <Box px={1}>
                <Typography variant="h3" component="h2" gutterBottom={true}>
                  $28
                  <Typography variant="h6" color="textSecondary" component="span">/ mo</Typography>
                </Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p">200 Emails/mo</Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p">10 Stock Images</Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p">Domains Included*</Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>2 Yearly Major Site Updates</Typography>
              </Box>
              <Button variant="outlined" color="primary">Select plan</Button>
              <Box mt={2}>
                <Link href="#" color="primary">Learn more</Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
};

export default Monthly;