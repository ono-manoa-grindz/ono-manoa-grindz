import React from 'react';
import { Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Reviews } from '/imports/api/review/review';

class Review extends React.Component {
  render() {
    const feedstyle = { margin: '20px' };
    return (
        <Feed.Event style={feedstyle}>
          <Feed.Content>
            <Feed.Summary>
              {this.props.review.rating}
              <br/>
              {this.props.review.review}
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
    );
  }
}

/** Require a document to be passed to this component. */
Review.propTypes = {
  review: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Reviews);
