import React, { Component } from "react";
import { Grid, Box } from "@material-ui/core";
import CardComponent from "./card";
import data from "./HomePage";
import { Link } from "react-router-dom";
export class HomePage extends Component {
  render() {
    return (
      <Box
        height={{ vertical: "large" }}
        background={{
          image:
            "url(https://firebasestorage.googleapis.com/v0/b/engraved-933fe.appspot.com/o/images%2FFree_Wood_Texture_10.jpg?alt=media&token=bbe1a33d-269b-43b2-b2b6-b9caeb9f4de0)",
        }}
        pad={{ vertical: "large" }}
      >
        <div style={{ margin: "2%" }}>
          <Grid container xs={12} justify="center">
            <Grid item xs={12}>
              <Link to="Gallery" style={{ textDecoration: "none" }}>
                <CardComponent
                  title={data.catagory[0].title}
                  image={data.catagory[0].imagePath}
                  alt="Alder"
                />
              </Link>
            </Grid>
          </Grid>
          <Grid container xs={12} justify="center">
            <Grid item xs={12}>
              <Link to="Gallery" style={{ textDecoration: "none" }}>
                <CardComponent
                  title={data.catagory[1].title}
                  image={data.catagory[1].imagePath}
                  alt="Alder"
                />
              </Link>
            </Grid>
          </Grid>
          <Grid container xs={12} justify="center">
            <Grid item xs={12}>
              <Link to="Gallery" style={{ textDecoration: "none" }}>
                <CardComponent
                  title={data.catagory[2].title}
                  image={data.catagory[2].imagePath}
                  alt="Alder"
                />
              </Link>
            </Grid>
          </Grid>
          <Grid container xs={12} justify="center">
            <Grid item xs={12}>
              <Link to="Gallery" style={{ textDecoration: "none" }}>
                <CardComponent
                  title={data.catagory[3].title}
                  image={data.catagory[3].imagePath}
                  alt="Alder"
                />
              </Link>
            </Grid>
          </Grid>
          <Grid container xs={12} justify="center">
            <Grid item xs={12}>
              <Link to="Gallery" style={{ textDecoration: "none" }}>
                <CardComponent
                  title={data.catagory[4].title}
                  image={data.catagory[4].imagePath}
                  alt="Alder"
                />
              </Link>
            </Grid>
          </Grid>
          <Grid container xs={12} justify="center">
            <Grid item xs={12}>
              <Link to="Gallery" style={{ textDecoration: "none" }}>
                <CardComponent
                  title={data.catagory[5].title}
                  image={data.catagory[5].imagePath}
                  alt="Alder"
                />
              </Link>
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  }
}

export default HomePage;
