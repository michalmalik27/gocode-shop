import { useState, useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useProducts } from "../contexts/ProductsContext";

const sorts = [
  "Featured",
  "Best Selling",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date, new to old",
  "Date, old to new",
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Header = (
) => {
  const classes = useStyles();
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    selectedMinPrice,
    setSelectedMinPrice,
    selectedMaxPrice,
    setSelectedMaxPrice,
    getMinPriceByCategory,
    getMaxPriceByCategory,
  } = useProducts();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Filter By:</InputLabel>
        <Select
          value={selectedCategory}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(event) => {
            setSelectedCategory(event.target.value);
          }}
        >
          <MenuItem value="">
            <em>All Categories...</em>
          </MenuItem>
          {categories.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sort By:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(event) => {}}
        >
          {sorts.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography id="range-slider" gutterBottom>
        Prices range
      </Typography>
      <Slider
        value={[selectedMinPrice, selectedMaxPrice]}
        onChange={(event, newValue) => {
          console.log(newValue);
          setSelectedMinPrice(newValue[0]);
          setSelectedMaxPrice(newValue[1]);
        }}
        min={getMinPriceByCategory()}
        max={getMaxPriceByCategory()}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
      />
    </div>
  );
};

export default Header;
