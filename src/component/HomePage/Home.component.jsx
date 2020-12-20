import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import CardComponent from "./card";
import background from "../../Texture/Free_Wood_Texture_10.jpg";
import { Card, CardContent, CardHeader, CardActionArea, CardMedia, Typography } from "@material-ui/core";
import data from "./HomePage";
import { Box } from "grommet";
export class HomePage extends Component {
  render() {
    return (
      <Box
        height={{ vertical: "large" }}
        background={{
          image:
            "url(https://firebasestorage.googleapis.com/v0/b/engraved-933fe.appspot.com/o/Background%20image%2FFree_Wood_Texture_10.jpg?alt=media&token=15b8cdb8-3339-4a02-b764-a7edcb1cfbe7)",
        }}
        pad={{ vertical: "large" }}
      >
        <div style={{ margin: "2%" }}>
          <Grid container xs={12} justify="center" spacing={4}>
            <Grid item xs={4}>
              <Link to="Gallery" style={{ textDecoration: "none" }}>
                <CardComponent
                  title={data.catagory[0].title}
                  image={data.catagory[0].imagePath}
                  alt="Alder"
                />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="Gallery" style={{ textDecoration: "none" }}>
                <CardComponent
                  title={data.catagory[1].title}
                  image={data.catagory[1].imagePath}
                  alt="Alder"
                />
              </Link>
            </Grid>
          </Grid>
          <Grid container xs={12} justify="center" spacing={4}>
            <Grid item xs={4}>
              <Link to="Gallery" style={{ textDecoration: "none" }}>
                <CardComponent
                  title={data.catagory[2].title}
                  image={data.catagory[2].imagePath}
                  alt="Alder"
                />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="Gallery" style={{ textDecoration: "none" }}>
                <CardComponent
                  title={data.catagory[3].title}
                  image={data.catagory[3].imagePath}
                  alt="Alder"
                />
              </Link>
            </Grid>
          </Grid>
          <Grid container xs={12} justify="center" spacing={4}>
            <Grid item xs={4}>
              <Link to="Gallery" style={{ textDecoration: "none" }}>
                <CardComponent
                  title={data.catagory[4].title}
                  image={data.catagory[4].imagePath}
                  alt="Alder"
                />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="Gallery" style={{ textDecoration: "none" }}>
                <CardComponent
                  title={data.catagory[5].title}
                  image={data.catagory[5].imagePath}
                  alt="Alder"
                />
              </Link>
            </Grid>
          </Grid>
          <Grid container xs={12} justify="center" spacing={4}>
            <Grid item xs={4}>
              <Link to="/How-Its-Done" style={{ textDecoration: "none" }}>
                <Card style={{ margin: "2%" , height:"200"}} key="How Its Work">
                  <CardActionArea  >
                  <CardMedia height="200" component="img" image={"https://firebasestorage.googleapis.com/v0/b/engraved-933fe.appspot.com/o/Background%20image%2FFree_Wood_Texture_10.jpg?alt=media&token=15b8cdb8-3339-4a02-b764-a7edcb1cfbe7"} />
                    <CardContent  >
                      <Typography gutterBottom variant="h5" component="h2" >
                        How Its Done
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        engraved
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="/About Us" style={{ textDecoration: "none" }}>
              <Card style={{ margin: "2%" , height:"200"}} key="About Us">
                  <CardActionArea >
                  <CardMedia height="200" component="img" image={"https://firebasestorage.googleapis.com/v0/b/engraved-933fe.appspot.com/o/Background%20image%2FFree_Wood_Texture_10.jpg?alt=media&token=15b8cdb8-3339-4a02-b764-a7edcb1cfbe7"}/>
                    <CardContent  >
                      <Typography gutterBottom variant="h5" component="h2" >
                      About Us
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        engraved
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Box>
    );
  }
}

export default HomePage;
