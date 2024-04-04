import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const ItemList = ({ itemList }) => {
  return (
    <div>
      {itemList && (
        <List>
          {itemList.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary={item.name} secondary={item.count} />
                </ListItemButton>
              </ListItem>
              <Divider variant="middle" component="li" />
            </React.Fragment>
          ))}
        </List>
      )}
    </div>
  );
};

export default ItemList;
