import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

const WeatherDisplay = ({ weather, onSave }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{weather.name}</Typography>
        <Typography variant="body1">
          Temperature: {weather.main.temp}°C
        </Typography>
        <Typography variant="body1">
          Description: {weather.weather[0].description}
        </Typography>
        <Button
          onClick={() => onSave(weather.name)}
          variant="contained"
          color="secondary"
        >
          Save to Favorites
        </Button>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;
