import './index.scss';
//import MenuVertical from '../MenuVertical/index';
import MyContacts from '../MyContacts/index';
import FormSendMe from '../FormSendMe/index';

import React, { Component } from 'react';
//<MyContacts />
          //<MenuVertical />

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__container">
          <MyContacts />
          <FormSendMe />
        </div>
      </div>
    );
  }
}
