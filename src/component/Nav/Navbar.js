import React, {useState, useEffect} from "react";
import { Box, Text,  } from "grommet";
import "./Navbar.css"
import {  Link } from 'react-router-dom';

import Logo from "../../img/engraved-logo.png";

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  return (
    <div>
    <Link to="/" >
      <Box
        height={{ vertical: "large" }}
        background={{
          image:
            "url(https://firebasestorage.googleapis.com/v0/b/engraved-933fe.appspot.com/o/Background%20image%2FFree_Wood_Texture_10.jpg?alt=media&token=15b8cdb8-3339-4a02-b764-a7edcb1cfbe7)",
        }}
        pad={{ vertical: "large" }}
        
      >
      
        <img src={Logo} className={ width > 768 ? "imgLarge" :"imgSmall"} />
      </Box>
      </Link>
    </div>
  );
};

export default Nav;
