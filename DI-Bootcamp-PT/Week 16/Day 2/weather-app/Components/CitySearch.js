import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const CitySearch = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
    setCity("");
  };

  return (
    <div>
      <TextField
        label="Search City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={handleSearch} variant="contained" color="primary">
        Search
      </Button>
    </div>
  );
};

export default CitySearch;
