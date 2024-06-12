import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import WeatherPage from "./pages/WeatherPage";
import FavoritesPage from "./pages/FavoritesPage";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Weather App
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Weather
            </Button>
            <Button color="inherit" component={Link} to="/favorites">
              Favorites
            </Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <WeatherPage onAddFavorite={addFavorite} />
          </Route>
          <Route path="/favorites">
            <FavoritesPage favorites={favorites} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
