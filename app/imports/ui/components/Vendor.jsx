import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Vendor extends React.Component {
  render() {
    return (
        <Card centered>
          <Image href="#" centered size='small' src={this.props.vendor.image}/>
          <Card.Content>
            <Card.Header><a href="#">{this.props.vendor.vendorName}</a></Card.Header>
            <Card.Meta>
              {this.props.vendor.location}
            </Card.Meta>
            <Card.Description><a href="#">{this.props.vendor.description}</a></Card.Description>
            <Card.Description><a href="#">{this.props.vendor.menu}</a></Card.Description>
            <Card.Description><a href="#">{this.props.vendor.rating}</a></Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Vendor.propTypes = {
  vendor: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Vendor);
