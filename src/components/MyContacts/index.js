import './index.scss';

import React, {
  Component
} from 'react';

class MyContacts extends Component {
  constructor() {
    super();
  }
  
  render() {
    return(
        <div className="footer__contacts">
      <a href="tel:+79119112233">Позвонить</a>
      <a href="mailto:workflowfront@gmail.com">Задавайте 
  вопросы по электронной почте</a>
        </div>
    )
  }
}
;
export default MyContacts;
