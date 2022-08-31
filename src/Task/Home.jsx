import React from "react";
import { Button, Grid, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { Man } from "./Man";
import { Women } from "./Women";
import { convertLength } from "@mui/material/styles/cssUtils";

export const Home = () => {
  return (
    <React.Fragment>
      <h1>This is Home Page</h1>
      
      <Grid container spacing={3}>
        <Grid item xs={6} >
          <Link to="/women" target="_blank">
            <Button sx={{position:"relative" , top:"300px" }} variant="contained" color="error">For Her</Button>
            <Card sx={{height:"600px"}}>
              <CardContent>
                <img
                  src="https://media.istockphoto.com/photos/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-picture-id1208148708?k=20&m=1208148708&s=612x612&w=0&h=rjZiAPCOpwREiTET21lTP3wM30BUqAG9PjocC-euJ98="
                  alt=""
                  height="500px"
                  opacity="0.3"
                />
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={6} >
          <Link to="/man" target="_blank">
          <Button sx={{position:"relative" , top:"300px" }} variant="contained" color="error" >For Him</Button>
            <Card sx={{height:"600px"}}>
              <CardContent>
                <img
                  src="https://image.shutterstock.com/image-photo/mens-clothing-set-boots-watch-260nw-1427016581.jpg"
                  alt=""
                  height="500px"
                  opacity="0.3"
                />
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
      <Man/>
      <Women/>
    </React.Fragment>
  );
};
