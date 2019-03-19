import './index.scss';

import React, {
  Component
} from 'react';

class ImageBanner extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      	slides: [
			  {
			    color: 'url(https://freelance.ru/img/portfolio/pics/00/21/09/2165162.jpg)',
			  },
			  {
			    color: 'url(http://bezopasnik.org/images/unix/pic/1a/401.jpg)',
			  },
			  {
			    color: 'url(http://365psd.ru/images/photos/medium/article83.jpg)',
			  },
			  {
			    color: 'url(https://cs8.pikabu.ru/images/big_size_comm/2016-09_3/1473912719141362.jpg)',
			  },
			  {
			    color: 'url(http://tutozone.net/wp-content/uploads/2013/12/3D-Cube-Grid-Gallery-With-3D-Flip1.jpg)',
			  },
			  {
			    color: 'url(https://i.ytimg.com/vi/oGG6VGGh9Mw/maxresdefault.jpg)',
			  }
			],
			autoplay: false,
			active: 0
	    };

	    this.state.max = this.state.slides.length;
	    this.timer = this.timer.bind(this);
	}

	componentDidMount() {
      this.timer = setInterval(this.timer, 3000); 
	}

    componentWillUnmount() {
      clearInterval(this.timer)
    }

    timer() {
	  	
	  	if (this.state.autoplay === true) {
		   
		    if (this.state.active === this.state.max - 1) {
		      this.state.active = 0;
		    } else {
		      this.state.active++;
		    }

		    this.setState({
		    	active: this.state.active
		    });
		}
    }

    toggleAutoPlay(){

    	this.setState({
			autoplay: !this.state.autoplay
		});
    }

    nextOne(){
    	
    	if (this.state.active < this.state.max - 1) {

    		this.setState({
	    		active: this.state.active + 1
	    	});
	    }
    }

    prevOne(){
    	if (this.state.active > 0) {
	    	
	    	this.setState({
	    		active: this.state.active - 1
	    	});
    	}
    }

    dots(index, event){
    	
    	this.setState({
    		active: index
    	});
    }

    isActive(value){
	    if(this.state.active === value){
	    	return "active";
	    }
    }

    render(){

		let transition = this.state.active * - 100;
	    let style = {
	      width: ( this.state.slides.length * 100 ) + 'vw',
	      transform: 'translateX(' + transition + 'vw)'
	    }

	    let slides = this.state.slides.map( (item, index) => (
	      <div className="each" 
		       key={index} 
		       style={{backgroundImage: item.color}}></div> 
		    )
	    );

	    let dots = this.state.slides.map( (item, index) => (
		      <li className={this.isActive(index) + " dots" }   
			      key={index} 
			      ref="dots" 
			      onClick={this.dots.bind(this, index)}>
		     		 <a>&#9679;</a>
		      </li> 
	        )
	    );

	    let playStop;

	    if(this.state.autoplay){
	    	
	    	playStop =  <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
						    <path d="M0 0h24v24H0z" fill="none"/>
						    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
						</svg>;
	    }else {
	    	playStop =  <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
						    <path d="M0 0h24v24H0z" fill="none"/>
						    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
						</svg>;
	    }

	    return (
	    	<div>
	    		
			    <div className="slider">
			        
			        <div className="wrapper" style={style}>
			          {slides}
			        </div>

			        <button className="arrows prev" ref="prev" onClick={this.prevOne.bind(this)} >
			        	<svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
						    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
						    <path d="M0 0h24v24H0z" fill="none"/>
						</svg>
			        </button>

					<button className="arrows next" ref="next" onClick={this.nextOne.bind(this)} > 
						<svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
						    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
						    <path d="M0 0h24v24H0z" fill="none"/>
						</svg>
					 </button>

			        <ul className="dots_container">
			        	{dots}
			        </ul>

			        <a className="toggle-play" onClick={this.toggleAutoPlay.bind(this)}> 
			       	 	{playStop}
			        </a>

			    </div>

			</div>
		);
	}
};
export default ImageBanner;


