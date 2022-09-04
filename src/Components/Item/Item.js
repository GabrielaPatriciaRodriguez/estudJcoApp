import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

function Item({ data }) {
  return (
    <>
      <Card sx={{ maxWidth: 300, height: 350, marginTop: 5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            width="180"
            image={data.imagen}
            alt={data.categoria}
            style={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.titulo}
            </Typography>
            <Link to={`/item/${data.id}`} style={{ textDecoration: "none",}}>
          <Button
            style={{
              margin: 10,
              borderRadius: 15,
              borderColor: "gray",
              color: "whitesmoke",
              padding: 5,
              backgroundColor: "gray",
            }}
          >
            + info
          </Button>
        </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Item;
