import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  CardActionArea,
  CardMedia,
  Typography,
} from "@material-ui/core";
const card = (props) => {
  return (
    <Card style={{ margin: "2%" }} key={props.title}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          height="200"
          image={props.image}
          title={props.title}
        />
        <CardContent
          style={{
            backgroundSize: "150%",
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/engraved-933fe.appspot.com/o/Background%20image%2FFree_Wood_Texture_10.jpg?alt=media&token=15b8cdb8-3339-4a02-b764-a7edcb1cfbe7)`,
          }}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            engraved
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default card;
