import './index.scss';

import React, {
  Component
} from 'react';


let iconMenu = <svg width='30' height='30' fill="#FFFFFF" viewBox="0 0 20 20" x="0px" y="0px">
<path fill="#FFFFFF" d="M17.5 6h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path>
<path fill="#FFFFFF" d="M17.5 11h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path>
<path fill="#FFFFFF" d="M17.5 16h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path>
    </svg>

let iconMenu2 = <svg width='30' height='30' fill="#FFFFFF" viewBox="0 0 100 100" x="0px" y="0px"><title>54 all</title><path d="M76.46,46H23.54a4,4,0,0,0,0,8H76.46a4,4,0,0,0,0-8Z"/><path d="M76.46,23.73H23.54a4,4,0,0,0,0,8H76.46a4,4,0,0,0,0-8Z"/><path d="M76.46,68.27H23.54a4,4,0,1,0,0,8H76.46a4,4,0,0,0,0-8Z"/></svg>
      
class MenuItem extends Component {
  static defaultsProps : {
    bgColor:'#FFFFFF',
    fontColor:'#FFFFFF',
    display:'x-large',
    styleItemLabel:{ display:'flex' },
    styleItem:{},// display:'flex', borderStyle :'solid',margin:'5px' },
    label:' --- ' 
  };  

  constructor(props){
    super(props)
    console.log("props bt  => "+ JSON.stringify(props))
   this.state=Object.assign({},MenuItem.defaultsProps,props)
   this.state.styleItem.backgroundColor = props.bgColor;
   this.state.styleItemLabel.color = props.fontColor;
   switch(this.props.display){
     case 'tiny':
       this.state.styleItemLabel.display='none'
       this.state.styleItem.margin='5px 0px'
       console.log("Tiny for bt '"+props.label+"' => "+ JSON.stringify(this.state.styleItem))
       break;
     case 'medium':
       this.state.styleItemLabel.display='flex'
       this.state.styleItemLabel.paddingRight='0px'
       this.state.styleItem.display='flex'
       this.state.styleItem.margin='5px 0px'
       this.state.styleItem.borderStyle ='none' 
       console.log("Medium for bt '"+props.label+"' => "+ JSON.stringify(this.state.styleItem))
       break;
     default:
       this.state.styleItemLabel.display='flex'
       this.state.styleItemLabel.paddingRight='5px'
       this.state.styleItem.display='flex'
       this.state.styleItem.margin='5px'
       this.state.styleItem.borderStyle ='solid' 
       console.log("Default for bt '"+props.label+"'")
       break;
       
    }
  }
  
  componentWillReceiveProps(props){
    console.log("componentWillReceiveProps => " + JSON.stringify(props))
  }
  
  render() {
    this.state.styleItem={}
    this.state.styleItemLabel={}
    console.log("State => " + JSON.stringify(this.state))
    return (
     
        <div className={'cpItem' + (this.props.selected ? ' itemSelected' :'')} style={this.state.styleItem}>
          <div className='cpItemIcon' >
            {iconMenu}
          </div>
          <div className='cpItemLabel' style={this.state.styleItemLabel}>
           {this.state.label}
          </div>
        </div>
   
		);
	}
}

class FormSendMe extends Component {
    render() {
        return 
    (<div className='cpContainer'>
    <MenuItem label='Item 1' />
    <MenuItem label='Item 2'  display='medium'/>
    <MenuItem label='Time 3'  selected/>
    <MenuItem label='Liste exposants' bgColor='#FF5544' fontColor='#45FF22'/>
    <MenuItem label='Test lable item' bgColor='#FF4455' fontColor='#45FF22'  display='medium'/>
    <MenuItem label='Menu3' bgColor='#CC5544' fontColor='#45FF22' display='tiny'/>
  </div>, document.getElementById('component'));
     	}

}

export default FormSendMe;
