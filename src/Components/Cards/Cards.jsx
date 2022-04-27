import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "./Cards.css";

const Cards = ({ className, img, title, text }) => {
  console.log(className);
  return (
    <Card className={`${className} card`}>
      <CardContent className='card__content'>
        <img className='card__image' src={img} alt='' />
        <div className='card__typography'>
          <h3 className='card__title'>{title}</h3>
          <p className='card__text'>{text}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cards;
