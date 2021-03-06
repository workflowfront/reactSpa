import './index.scss';

import React, {
  Component
} from 'react';

class ReactFormLabel extends Component {
  constructor() {
    super();
  }
  
  render() {
    return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    )
  }
}

class FormSendMe extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }
  
  handleChange(e){
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };
  
  handleSubmit(e, message){
    e.preventDefault();

    let formData = {
      formSender: this.state.name,
      formEmail: this.state.email,
      formSubject: this.state.subject,
      formMessage: this.state.message
    }
    
    if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
      return false;
    }

    $.ajax({
      url: '#',
      dataType: 'json',
      type: 'POST',
      data: formData,
      success: function(data) {
        if (confirm('Thanks for signing up, we will chat soon!')) {
          document.querySelector('.form-input').val('');
        }
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
        alert('ERROR, YOU DID SOMETHING WRONG!!!');
      }
    });
    
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  render() {
    return(
      <form className='react-form' onSubmit={this.handleSubmit}>
        <h1>Connect with me!</h1>
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formName' title='Full Name:' />

          <input id='formName' className='form-input' name='name' type='text' ref='formName' required onChange={this.handleChange} value={this.state.name} />
        </fieldset>
        
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formEmail' title='Email:' />

          <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
        </fieldset>
        
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formSubject' title='Subject:'/>

          <input id='formSubject' className='form-input' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
        </fieldset>
        
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formMessage' title='Message:' />

          <textarea id='formMessage' className='form-textarea' name='message' required onChange={this.handleChange}></textarea>
        </fieldset>
        
        <div className='form-group'>
          <input id='formButton' className='btn' type='submit' placeholder='Send message' value='Send'/>
        </div>
      </form>
    )
  }
};

export default FormSendMe;
