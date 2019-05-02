import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Image, Loader, Header, Divider, Grid, List } from 'semantic-ui-react';
import { Vendors } from '/imports/api/vendor/vendor';
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
          <Image src={this.props.vendor.image} centered/>
          <Divider/>
          <Grid columns={3 + this.props.vendor.locationImage.length}>
            {this.props.vendor.locationImage.map((image, index) => <Grid.Column><Image centered src={image}
                                                                                       key={index}/></Grid.Column>)}
            <Grid.Column>
              <Container text>
                <Header as='h4' textAlign='center'>{this.props.vendor.location}</Header>
                {this.props.vendor.fullDescription}
              </Container>
            </Grid.Column>
          </Grid>
          <Divider/>
          <Grid centered>
            <List>
              <List.Item><Header as='h4'>Menu</Header></List.Item>
            </List>
          </Grid>
          <Divider/>
          <Grid centered>
            <List>
              <List.Item><Header as='h4'>Review Section</Header></List.Item>
            </List>
          </Grid>
          <Divider/>
          <Grid centered>
            <List>
              <List.Item><Header as='h4'>Operating Hours:</Header></List.Item>
              {this.props.vendor.hours}
            </List>
          </Grid>
          <Divider/>
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
