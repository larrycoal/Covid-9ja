import React, { Component } from 'react';



import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import Drawer from './Drawer'

class Header extends Component {
    state = {
        drawerOpen:false,
        headerShow:true
    }

    componentDidMount(){
        window.addEventListener("scroll",this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener("scroll")
    }
    
    handleScroll=()=>{
        if(window.scrollY > 0){
            this.setState({
                headerShow:!this.state.headerShow
            })
        }else{
            this.setState({
            headerShow:!this.state.headerShow
            })
        }
       
    }
    toggleDrawer =()=>{
        this.setState({
            drawerOpen:!this.state.drawerOpen
        })
    }
    render() {
        return (
            <AppBar
            style={{
                backgroundColor:!this.state.headerShow?"#2f2f2f":"transparent",
                boxShadow:"none",
                padding:"10px 0px"

            }}
            >
           <Toolbar>
            <div className="header_logo">
                <div className="font_righteous header_logo_venue">Covid-19 9ja</div>
                <div className="header_logo_title">covid watch</div>
            </div>
            
                <IconButton
                aria-label="menu"
                color="inherit"
                onClick={()=>this.toggleDrawer()}
                >
                    <MenuIcon/>
                </IconButton>
            <Drawer
            drawerOpen={this.state.drawerOpen}
            onOpen={this.toggleDrawer}
            onClose={this.toggleDrawer}
            />
           </Toolbar>
            </AppBar>
        );
    }
}

export default Header;