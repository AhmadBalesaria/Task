import React from "react";
import { CardContent, Card, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <Link to="/">
                <Button variant="contained" color="secondary" > Home </Button>
              </Link>
            </Grid>
            <Grid item xs={1}>
              <Link to="/man">
                <Button variant="contained" color="secondary" > Man </Button>
              </Link>
            </Grid>
            <Grid item xs={1}>
              <Link to="/women">
                <Button variant="contained" color="secondary" > Woman </Button>
              </Link>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained" color="secondary" > Kids </Button>
            </Grid>
            <Grid item xs={7}></Grid>
            <Grid item xs={1}>
              <Button variant="contained" color="warning" > Cart</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
