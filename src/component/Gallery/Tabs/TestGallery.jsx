import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box } from "grommet";
import GalleryFile from "../Tabs/GalleryFile";
import { Container } from "@material-ui/core";
import fire from "../../firebase";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    justify: "center",
    alignContent: "center",
    marginTop: "3%",
  },
});

class Gallery extends React.Component {
  state = {
    Coaster: [],
    Plaque: [],
    CustomInspired: [],
    CustomSign: [],
    Magnet: [],
    Frame: [],
    list: [],
    value: 0,
  };

  componentDidMount() {
    fire
      .storage()
      .ref()
      .listAll()
      .then((file) =>
        file.prefixes.map((file) =>
          file.listAll().then((nam) =>
            nam.items.forEach((imgRef) =>
              imgRef.getDownloadURL().then((url) => {
                file.name === "Coaster"
                  ? this.setState((prevState) => ({
                      Coaster: [...prevState.Coaster, url],
                    }))
                  : file.name === "Custom_Inspired_Gift"
                  ? this.setState((prevState) => ({
                      CustomInspired: [...prevState.CustomInspired, url],
                    }))
                  : file.name === "Custom_Sign"
                  ? this.setState((prevState) => ({
                      CustomSign: [...prevState.CustomSign, url],
                    }))
                  : file.name === "Frame"
                  ? this.setState((prevState) => ({
                      Frame: [...prevState.Frame, url],
                    }))
                  : file.name === "Magnet"
                  ? this.setState((prevState) => ({
                      Magnet: [...prevState.Magnet, url],
                    }))
                  : file.name === "Plaque"
                  ? this.setState((prevState) => ({
                      Plaque: [...prevState.Plaque, url],
                    }))
                  : this.setState((prevState) => ({
                      list: [...prevState.list, url],
                    }));
              })
            )
          )
        )
      )
      .catch((err) => err.message);
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const handleChange = (event, newValue) => {
      this.setState({ value: newValue });
    };

    {
      return (
        <Box
          height={{ vertical: "large" }}
          background={{
            image:
              "url(https://firebasestorage.googleapis.com/v0/b/engraved-933fe.appspot.com/o/Background%20image%2FFree_Wood_Texture_10.jpg?alt=media&token=15b8cdb8-3339-4a02-b764-a7edcb1cfbe7)",
          }}
          pad={{ vertical: "large" }}
        >
          <Container>
            <div className={classes.root}>
              <AppBar
                position="static"
                color="default"
                
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="Secondary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  
                >
                  <Tab label="Custom Signs" {...a11yProps(0)} />
                  <Tab label="Custom Inspired Gifts" {...a11yProps(1)} />
                  <Tab label="Magnets" {...a11yProps(2)} />
                  <Tab label="Picture Frame" {...a11yProps(3)} />
                  <Tab label="Plaque" {...a11yProps(4)} />
                  <Tab label="Square Coaster" {...a11yProps(5)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <GalleryFile data={this.state.CustomSign} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <GalleryFile data={this.state.CustomInspired} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <GalleryFile data={this.state.Magnet} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <GalleryFile data={this.state.Frame} />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <GalleryFile data={this.state.Plaque} />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <GalleryFile data={this.state.Coaster} />
              </TabPanel>
            </div>
          </Container>
        </Box>
      );
    }
  }
}

export default withStyles(styles, { withTheme: true })(Gallery);
