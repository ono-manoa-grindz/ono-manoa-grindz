import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { color: 'white' };
    const background = { background: 'gray' };
    return (
        <footer>
          <div style={divStyle} className="footer">
            <div style={background}>
              <Grid container stackable centered columns={1}>
                <div className='footer-text'>
              <Icon name='copyright outline'/>
              No Copyright since 2019<br/>
              Ono Manoa Grindz Inc. All rights not reserved.<br/>
              University of Hawaii at Manoa<br/>
              Honolulu, HI 96822
                </div>
              </Grid>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
