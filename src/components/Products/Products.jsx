import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";

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
const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => {
          <Grid item key={product.id} xs={10} sm={6} md={4} lg={3}>
            <Product product={product} />;
          </Grid>;
        })}
      </Grid>
    </main>
  );
};
export default Products;
