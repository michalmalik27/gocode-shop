
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { useProducts } from "../contexts/ProductsContext";
import TextField from "@material-ui/core/TextField";

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

const Header = () => {
  const classes = useStyles();
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    selectedMinPrice,
    setSelectedMinPrice,
    selectedMaxPrice,
    setSelectedMaxPrice,
    minPriceByCategory,
    maxPriceByCategory,
  } = useProducts();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          select
          label="Filter By:"
          variant="filled"
          value={selectedCategory}
          onChange={(event) => {
            setSelectedCategory(event.target.value);
          }}
          fullWidth
        >
          <MenuItem value="">
            <em>All Categories...</em>
          </MenuItem>
          {categories.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          select
          label="Sorting By:"
          variant="filled"
          value={selectedCategory}
          onChange={(event) => {}}
          fullWidth
        >
          <MenuItem value=""></MenuItem>
          {sorts.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
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
          min={minPriceByCategory}
          max={maxPriceByCategory}
          valueLabelDisplay="on"
          aria-labelledby="range-slider"
        />
      </Grid>
    </Grid>
  );
};

export default Header;
