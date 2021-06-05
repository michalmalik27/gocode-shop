import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import ShoppingCartItem from "./ShoppingCartItem";

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const {
    shoppingCart,
    getTotalPrice,
    getProductsCount,
    getProductCount,
    setProductCount,
    increaseProductCount,
    decreaseProductCount,
  } = useShoppingCart();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label="show shopping cart"
        color="inherit"
        onClick={handleClickOpen}
      >
        <Badge badgeContent={getProductsCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          You'r Shoppin Cart
        </DialogTitle>
        <DialogContent dividers>
          {shoppingCart.length === 0 && (
            <Typography>There are no products in the cart</Typography>
          )}
          {shoppingCart.length > 0 &&
            shoppingCart.map((product) => (
              <ShoppingCartItem
                spacing={20}
                count={product.count}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Continue shopping
          </Button>
          <Button onClick={handleClose} color="secondary">
            Continue shopping
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
