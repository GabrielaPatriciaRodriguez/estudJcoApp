import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardFront(props) {
  return (
    <Card sx={{ width: 300, margin: 2, marginTop: -15 }}>
      <CardMedia
        component="img"
        height="120"
        image={props.image}
        alt="derecho"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Consulta</Button>
      </CardActions> */}
    </Card>
  );
}
