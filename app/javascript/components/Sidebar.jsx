import React from "react";
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";
import { Drawer, Toolbar, List, ListItem, ListItemButton, ListItemText, Link, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Sidebar(props) {
  
    
    const closeIcon = (
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.closeDrawer}
                edge="start"
                sx={{
                 alignSelf: "flex-end"
                }}
            >
                <ChevronLeftIcon />
            </IconButton>
        );

    const drawer = (
        <div>
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
        <div className="Sidebar">
            <Drawer 
                open 
                variant="permanent"
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.width },
                    display: { xs: 'none', sm: 'block' },

                }}
            >
                {drawer}
            </Drawer>
            <Drawer 
                open={props.open}
                variant="temporary"
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.width },
                    display: { xs: 'block', sm: 'none' },
                }}
            >
                {closeIcon}
                {drawer}
                
            </Drawer>
        </div>
    )

}