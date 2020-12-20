import React, { useState, useEffect } from "react";
import { Box,} from "grommet";
import "./HowItsDone.css";
import part1 from "../../Video/Firststep.gif";
import part2 from "../../Video/Secondstep.gif";
import part3 from "../../Video/Thirdstep.gif";
import Final from "../../Video/Final.gif";

function HowItsDone() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  return (
    <>
    <Box
        height={{ vertical: "large" }}
        background={{
          image:
            "url(https://firebasestorage.googleapis.com/v0/b/engraved-933fe.appspot.com/o/Background%20image%2FFree_Wood_Texture_10.jpg?alt=media&token=15b8cdb8-3339-4a02-b764-a7edcb1cfbe7)",
        }}
        pad={{ vertical: "large" }}
      >
      <Box
        direction="row-responsive"
        justify="center"
        margin={"2%"}
        
      >
        <img
          src={part1}
          height={400}
          width={width > 425 ? 450 : 300}
          style={{ alignSelf: "center" }}
        />

        <Box justify="center" margin={{ left: "5%" }}>
          <Box direction="row-responsive" justify="center">
            <img
              src={part2}
              height={400}
              width={width > 425 ? 450 : 300}
              style={{ margin: "3%", alignSelf: "center" }}
            />
          </Box>
        </Box>
      </Box>
      <Box direction="row-responsive" justify="center" margin={"2%"}>
        <img
          src={part3}
          height={400}
          width={width > 425 ? 450 : 300}
          style={{ alignSelf: "center" }}
        />

        <Box justify="center" margin={{ left: "5%" }}>
          <Box direction="row-responsive" justify="center">
            <img
              src={Final}
              height={400}
              width={width > 425 ? 450 : 300}
              style={{ margin: "3%", alignSelf: "center" }}
            />
          </Box>
        </Box>
      </Box>
      </Box>
    </>
  );
}

export default HowItsDone;
