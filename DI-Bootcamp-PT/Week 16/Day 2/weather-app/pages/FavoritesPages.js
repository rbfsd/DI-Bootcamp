import React from "react";
import Favorites from "../components/Favorites";

const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <Favorites favorites={favorites} />
    </div>
  );
};

export default FavoritesPage;
