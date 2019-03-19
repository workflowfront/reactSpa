import './index.scss';
import ImageBanner from '../image-banner/index';

import React, {
  Component
} from 'react';

export default class TopBanner extends Component {
  render() {
    return (
      <div className="top-banner">
        <div className="top-banner__container">
          <ImageBanner />
        </div>
      </div>
    );
  }
}
