import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "./Cards.css";

const Cards = ({ img, title, text }) => {
	return (
		<Card className="card">
			<CardContent className="card__content">
				<img className="card__image" src={img} alt="" />
				<h3 className="card__title">{title}</h3>
				<p className="card__text">{text}</p>
			</CardContent>
		</Card>
	);
};

export default Cards;
