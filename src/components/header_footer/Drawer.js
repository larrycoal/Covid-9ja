import React from 'react';
import {scroller} from 'react-scroll'

import { SwipeableDrawer,List,ListItem } from '@material-ui/core';

const Drawer = (props) => {

  const scrollToComponent=(component)=>{
    scroller.scrollTo(component,{
      duration:500,
      delay:100,
      offset:-100,
      smooth:true
    })
    props.onClose(true)
  }
    return (
       <SwipeableDrawer
       anchor="right"
       open={props.drawerOpen}
       onOpen={()=>props.onOpen()}
       onClose={()=>props.onClose()}
       >
            <List
            component="nav"
            >
                <ListItem button onClick={()=>scrollToComponent("home")}>
                  Home
                </ListItem>
                <ListItem button onClick={()=>scrollToComponent("info")}>
                  Covid Info
                </ListItem>
                <ListItem button onClick={()=>scrollToComponent("highlights")}>
                  Highlights
                </ListItem>
                <ListItem button onClick={()=>scrollToComponent("donation")}>
                  Donations
                </ListItem>
                <ListItem button onClick={()=>scrollToComponent("map")}>
                  Heat-map
                </ListItem>
            </List>
       </SwipeableDrawer>
    );
};

export default Drawer;