import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { CommunicationCall } from "material-ui/svg-icons";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
}));

const ImageGridList = ({ data }) => {
  const [count, setCount] = useState(0);
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div
      className={classes.root}
      style={{
        backgroundSize:'150%',
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/engraved-933fe.appspot.com/o/Background%20image%2FFree_Wood_Texture_10.jpg?alt=media&token=15b8cdb8-3339-4a02-b764-a7edcb1cfbe7)`,
      }}
    >
      <div>
        <GridList
          cellHeight={width >= 2560 ? 600 : width > 768 ? 350 : 300}
          style={{
            width: width > 1024 ? 900 : width >= 768 ? 600 : 350,
            height:
              width >= 2560
                ? 2300
                : width >= 1024
                ? 1000
                : width >= 768
                ? 820
                : 600,
                
          }}
          cols={width >= 2560 ? 3 : width > 768 ? 2 : width > 425 ? 2 : 1}
        >
          {data.map((tile) => (
            <GridListTile key={count} cols={tile.cols || 1} style={{objectFit:"cover"}}  >
              <img src={tile}  />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};
export default ImageGridList;
