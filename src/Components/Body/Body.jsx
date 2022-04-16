import { Divider } from "@mui/material";
import React from "react";
import Cards from "../Cards/Cards";
import cardsData from "./cardsData";

import { images } from "../../constants/index";

import "./Body.css";

const Body = () => {
	return (
		<div className="body">
			<section className="body__services">
				<div className="body__servicesContent">
					<h2>Our services</h2>
					<Divider style={{ width: "5%", borderColor: "black" }} />
					<p className="body__servicesText">
						We provide to you the best choiches for you. Adjust it to your
						health needs and make sure your undergo treatment with our highly
						qualified doctors you can consult with us which type of service is
						suitable for your health
					</p>
				</div>

				<div className="body__servicesCards">
					<img
						className="body__serviceCards-bgImage"
						src={images.bgVector}
						alt=""
					/>
					{cardsData.map((item) => (
						<Cards
							key={item.id}
							img={item.img}
							title={item.title}
							text={item.text}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default Body;
