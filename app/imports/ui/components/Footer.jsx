import React from 'react';
import { Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px', paddingBottom: '15px', color: 'white'};
    const background = { background: 'teal' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">
            <hr/>
            <div style={background}>
              <Icon name='copyright outline'/>
              No Copyright since 2019<br/>
              Ono Manoa Grindz Inc. All rights not reserved.<br/>
              University of Hawaii<br/>
              Honolulu, HI 96822
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
