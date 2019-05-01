import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Image, Loader, Header, Divider, Grid, List } from 'semantic-ui-react';
import { Vendors, VendorSchema } from '/imports/api/vendor/vendor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class MoreInfo extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Image size='medium' src={this.props.vendor.image}
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
            <Header as='h4'>{this.props.vendor.location}</Header>
            {this.props.vendor.description}
          </Container>
          <Divider></Divider>
          <Grid centered>
            <List>
              <List.Item><Header as='h4'>Review Section</Header></List.Item>
            </List>
          </Grid>
          <Divider></Divider>
          <Grid centered>
            <List>
              <List.Item><Header as='h4'>Operating Hours:</Header></List.Item>
              <List.Item>Monday - Friday</List.Item>
              <List.Item>10:00 am - 2:00 pm</List.Item>
            </List>
          </Grid>
          <Divider></Divider>
        </Container>
    );
  }
}

/** Require the presence of a Vendor document in the props object. Uniforms adds 'model' to the props, which we use. */
MoreInfo.propTypes = {
  vendor: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Vendor documents.
  const subscription = Meteor.subscribe('Vendors');
  return {
    vendor: Vendors.findOne(documentId),
    ready: subscription.ready(),
  };
})(MoreInfo);