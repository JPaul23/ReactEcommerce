import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";

import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes.",
    price: "$5",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/reebok-run-panthea-8990-1581455951.jpg?crop=0.895xw:0.895xh;0.0510xw,0.105xh&resize=980:*",
  },
  {
    id: 2,
    name: "MacBook",
    description: "Apple MacBook.",
    price: "$10",
    image:
      "https://static.bhphoto.com/images/multiple_images/images500x500/1584552724_IMG_1332174.jpg",
  },
];

const Product = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <p>{props.product.name}</p>
      <CardMedia
        className={classes.media}
        image={props.product.image}
        title={props.product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {props.product.name}
          </Typography>
          <Typography variant="h5">{props.product.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {props.product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
