import './index.scss';

import React, { Component } from 'react';
import Content from '../../components/content';
import Footer from '../../components/footer';

class Login extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="login placeholder">Login</div>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default Login;
