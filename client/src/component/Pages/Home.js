import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  Responsive,
  Grid,
  Divider
} from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";

function handleTest() {
  window.location = "/map";
}
/*
* HomepageHeading uses inline styling
* */
const HomepageHeading = ({ mobile }) => (
  <Responsive>
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 700, padding: "1em 0em" }}
      vertical
    >
      <Container text>
        <Header
          as="h1"
          content="Flights-Data Visualization"
          inverted
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "1.5em" : "3em"
          }}
        />
        <Header
          as="h2"
          content="Do you want to view airlines in a map?"
          inverted
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: mobile ? "0.5em" : "1.5em"
          }}
        />
        <Button onClick={handleTest} primary size="huge">
          Get Started
          <Icon name="right arrow" />
        </Button>
      </Container>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
              <Divider
                  as="h4"
                  className="header"
                  horizontal
                  style={{ margin: "3em 0em", textTransform: "uppercase" }}
              >
                  <p>Registration</p>
              </Divider>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Create your account
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Please make sure that you have a valid account of this Demo at first.You can proceeed to the singup page by click the sign up button on the top right of the navbar
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Log in your account
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              When the registration completed, you can click the log in button which is next to the sign up.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Create your account right now</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text>
              <Divider
                  as="h4"
                  className="header"
                  horizontal
                  style={{ margin: "3em 0em", textTransform: "uppercase" }}
              >
                  <p>Main Function</p>
              </Divider>
              <Header as="h3" style={{ fontSize: "2em" }}>
                  What you can do after loginin the demo
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                  Once you login this demo, you can either click "InputData" button for adding a new airline route or click "Map" button for viewing the content you already created.
              </p>
              <Button as="a" size="large">
                  Read More
              </Button>
              <Divider
                  as="h4"
                  className="header"
                  horizontal
                  style={{ margin: "3em 0em", textTransform: "uppercase" }}
              >
                  <p>Airline Routes</p>
              </Divider>
              <Header as="h3" style={{ fontSize: "2em" }}>
                  Create your own airline routes
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                  After you tapped "InputData" button, you can create your own airline routes via "Add New" button
              </p>
              <Button as="a" size="large">
                  I'm Still Quite Interested
              </Button>
              <Divider
                  as="h4"
                  className="header"
                  horizontal
                  style={{ margin: "3em 0em", textTransform: "uppercase" }}
              >
                  <p>Map</p>
              </Divider>
              <Header as="h3" style={{ fontSize: "2em" }}>
                  Interactive map demo
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                  You can interact with the map demo by changing different options on the bottom of the map.
              </p>
              <Button as="a" size="large">
                  I'm Still Quite Interested
              </Button>
          </Container>
      </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              An Data visualization app
            </Header>
            <p style={{ fontSize: "1.33em" }}>

            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Allows you change or view the data of airline routes
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
          <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
              <p>Main Function</p>
          </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
         What you can do after loginin the demo
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Once you login this demo, you can either click "InputData" button for adding a new airline route or click "Map" button for viewing the content you already created.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <p>Airline Routes</p>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Create your own airline routes
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          After you tapped "InputData" button, you can create your own airline routes via "Add New" button
        </p>
        <Button as="a" size="large">
          I'm Still Quite Interested
        </Button>
          <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
              <p>Map</p>
          </Divider>
          <Header as="h3" style={{ fontSize: "2em" }}>
              Interactive map demo
          </Header>
          <p style={{ fontSize: "1.33em" }}>
              You can interact with the map demo by changing different options on the bottom of the map.
          </p>
          <Button as="a" size="large">
              I'm Still Quite Interested
          </Button>
      </Container>
    </Segment>
  </Responsive>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;
