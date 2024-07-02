import React from "react";
// import { Link } from "react-router-dom";
import { Drawer, Toolbar, List, ListItem, ListItemButton, ListItemText, Link } from '@mui/material';

export default function Sidebar(props) {

  
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const drawer = (
        <div>
          <Toolbar />
          <List>
            {props.menuItems.map((item) => {
                return  <Link href={`/${item.name}`}
                            sx={{
                                color: "black",
                                "textDecoration": "none"
                                }}
                            key={item.name}
                            >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                    {capitalizeFirstLetter(item.name)}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
            })}
              
          </List>
        </div>
      );




    return (
        <Drawer 
            open 
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.width }
            }}
        >
            {drawer}
        </Drawer>
    
    )

}