import './index.scss';

import React, { Component } from 'react';
import Content from '../../components/content';
import Footer from '../../components/footer';

class Page2 extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="page2 placeholder">Page2</div>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default Page2;
