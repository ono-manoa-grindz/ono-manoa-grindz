import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Vendor from '/imports/ui/components/Vendor';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListVendors extends React.Component {

  vendors = [
    {
      vendorName: 'Da Spot',
      location: 'Sustainability Courtyard & Saunders Hall (2 locations)',
      image: 'http://manoa.hawaii.edu/food/index_files/stacks_image_22.png',
      description: 'description',
      menu: 'menu',
      rating: 'rating',
    },
    {
      vendorName: 'Da Spot',
      location: 'Sustainability Courtyard & Saunders Hall (2 locations)',
      image: 'http://manoa.hawaii.edu/food/index_files/stacks_image_22.png',
      description: 'description',
      menu: 'menu',
      rating: 'rating',
    },
    {
      vendorName: 'Da Spot',
      location: 'Sustainability Courtyard & Saunders Hall (2 locations)',
      image: 'http://manoa.hawaii.edu/food/index_files/stacks_image_22.png',
      description: 'description',
      menu: 'menu',
      rating: 'rating',
    },
  ]

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Vendors</Header>
          <Card.Group>
            {this.vendors.map((vendor, index) => <Vendor key={index} vendor={vendor}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListVendors.propTypes = {
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
})(ListVendors);
