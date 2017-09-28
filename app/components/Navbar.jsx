// react
import React, { Component } from 'react'
import {browserHistory} from 'react-router'
import AppBar from 'material-ui/AppBar'

// drawer menu for Navbar
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

// icons for Navbar
import IconButton from 'material-ui/IconButton'
import Face from 'material-ui/svg-icons/action/face'
import List from 'material-ui/svg-icons/action/list'

// other components
import LandingPage from './LandingPage'
import WriteSpace from './WriteSpace'
import Footer from './Footer'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.handleToggle =  this.handleToggle.bind(this)
    this.handleLink = this.handleLink.bind(this)
  }

  // handles the toggle of the left drawer menu
  handleToggle = () => {
    this.setState({open: !this.state.open})
  }

  handleLink = (e, type) => {
    if( type === "read" ) {
      console.log('clicked on read!')
    } else if( type === "write" ) {
      browserHistory.push(`/write`)
    }
    this.handleToggle();
  }

  render() {
    console.log("WHAT IS PROPS", this.props);
    return (
      <div>
        <AppBar
          title="Parallel Stories"
          iconElementLeft={<IconButton><List/></IconButton>}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<IconButton><Face/></IconButton>}
          onRightIconButtonTouchTap={() => alert('implement login function pls')}
      		style={{boxShadow:"none", fontFamily:"Pacifico", textAlign:"center"}}
      		className="header">
          <Drawer open={this.state.open}>
            <MenuItem onClick={(e)=>{this.handleLink(e, "read")}}>Read Stories</MenuItem>
            <MenuItem onClick={(e)=>{this.handleLink(e, "write")}}>Write a Story</MenuItem>
            <MenuItem onClick={this.handleToggle} className="close-drawer">Close</MenuItem>
          </Drawer>
        </AppBar>
        <LandingPage />
        <hr />
        <Footer/>
      </div>
  )} // end render
};

export default Navbar
