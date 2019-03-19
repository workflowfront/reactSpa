import './index.scss';

import React, { Component } from 'react';
import Content from '../../components/content';
import Footer from '../../components/footer';

class Page1 extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="page1 placeholder">Page1</div>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default Page1;
