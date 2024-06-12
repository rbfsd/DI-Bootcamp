import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const Favorites = ({ favorites }) => {
  return (
    <List>
      {favorites.map((city, index) => (
        <ListItem key={index}>
          <ListItemText primary={city} />
        </ListItem>
      ))}
    </List>
  );
};

export default Favorites;
