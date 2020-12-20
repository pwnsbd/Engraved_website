import React from "react";
import "./AboutUs.css";
import { grommet, Text,  } from "grommet";
import img from '../Categories/CategoriesData'
import {Box} from "grommet";
import {Grid,} from '@material-ui/core'
const AboutUs = () => {
  return (
    <Box height={"100%"}
      background={{
        image:
          "url(https://firebasestorage.googleapis.com/v0/b/engraved-933fe.appspot.com/o/Background%20image%2FFree_Wood_Texture_10.jpg?alt=media&token=15b8cdb8-3339-4a02-b764-a7edcb1cfbe7)",
      }}
      pad={{ vertical: "large" }}>
    <div style={{margin:"3%", justifyContent:"center"}}>
    
      <Grid container xs ={12} justify="center" >
      
        <img src={img.catagory[0].imagePath} width="60%" height={500}  style={{marginBottom:"2%"}}/>

      </Grid>
      <Text style={{ fontSize: 22, lineHeight: 2 }}>
        eng<Text style={{ fontSize: 22, lineHeight: 2 }} color="red">rave</Text>d was started in 2001 by Jim Kolbrek under the name J.K.
        Marketing, Inc. They focused mainly on laser engraved picture frames for
        whitewater rafters. In 2006, Jim’s son, Bill, joined him, and together
        they have developed a range of different wood products. Bill took over
        the company in April 2020.
      </Text>
      <br/>
      <Text style={{ fontSize: 22, lineHeight: 2 }}>
      eng<Text style={{ fontSize: 22, lineHeight: 2 }} color="red">rave</Text>d uses mostly live edge elm and cottonwood. The company
        manufacture every product in Sioux Falls, South Dakota. From cutting
        down the actual tree to laser engraving a finished product, eng d takes
        pride in being involved in every step of the process.
      </Text>

    </div>
    </Box>
  );
};

export default AboutUs;
