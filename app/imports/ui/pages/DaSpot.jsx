import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Image, Loader, Header, Divider, Grid, List } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class DaSpot extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Image size='medium' src={'http://manoa.hawaii.edu/food/resources/images/mainTitles/daSpotTitle.png'}
                 centered/>
          <Grid columns={2}>
            <Grid.Column>
              <Image size='small' src={'http://manoa.hawaii.edu/food/daSpot_files/stacks_image_1850.png'}
                     floated='right'/>
            </Grid.Column>
            <Grid.Column>
              <Image size='small' src={'http://manoa.hawaii.edu/food/daSpot_files/stacks_image_1853.png'}/>
            </Grid.Column>
          </Grid>
          <Divider></Divider>
          <Container text>
            <Header as='h4'>Sustainability Courtyard & Saunders Hall (2 locations)</Header>
            Da Spot Health Foods & Juices offers diverse, healthy and affordable cuisine with a unique take on tasty
            dishes from around the world. Da Spot specializes in Mediterranean and North African food with vegan and
            specialty meat options that can be certified halal or kosher. Offering imaginative cuisine in exotic
            styles of Egyptian, Greek, French, Italian, Indian, Thai, Malaysian, Ethiopian, American, Hawaiian,
            Japanese, Chinese, Korean, Pacific Rim and fusion cooking. Da Spots menu also features over 15
            combinations of different fruit smoothies.
          </Container>
          <Divider></Divider>
          <Header as='h4' textAlign='center'>Review Section</Header>
          <Divider></Divider>
          <Grid centered>
            <List>
              <List.Item><Header as='h4'>Operating Hours:</Header></List.Item>
              <List.Item>Monday - Friday</List.Item>
              <List.Item>10:00 am - 2:00 pm</List.Item>
            </List>
          </Grid>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
DaSpot.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(DaSpot);
